import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Zapier webhook URL
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/522295/uhnr1x6/';

// Function to send webhook to Zapier
async function sendZapierWebhook(submission) {
  try {
    const webhookData = {
      email: submission.email,
      utm_source: submission.utm_source || '',
      utm_medium: submission.utm_medium || '',
      utm_campaign: submission.utm_campaign || '',
      utm_term: submission.utm_term || '',
      utm_content: submission.utm_content || '',
    };

    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!response.ok) {
      console.error('Zapier webhook failed:', response.status, response.statusText);
      return false;
    }

    const result = await response.json();
    console.log('Zapier webhook success:', result);
    return true;
  } catch (error) {
    console.error('Zapier webhook error:', error);
    return false;
  }
}

// Email submission endpoint
app.post('/submit-email', async (req, res) => {
  try {
    const { email, source, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
    }

    // Create submission object
    const submission = {
      email,
      source: source || 'landing-page',
      timestamp: new Date().toISOString(),
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    };

    // Log submission
    console.log('New email submission:', submission);

    // Send webhook to Zapier
    const webhookSuccess = await sendZapierWebhook(submission);
    
    if (webhookSuccess) {
      console.log('Zapier webhook sent successfully for:', email);
    } else {
      console.error('Zapier webhook failed for:', email);
    }

    return res.status(201).json({
      success: true,
      message: 'Email submitted successfully',
      data: { email }
    });

  } catch (error) {
    console.error('Email submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
