// Email submission API function
export default async function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      const { email, source, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req.body;
      
      // Basic email validation
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

      // Log submission for debugging
      console.log('New email submission:', submission);

      // Zapier webhook URL
      const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/522295/uhnr1x6/';

      // Send webhook to Zapier (fire and forget)
      try {
        const webhookData = {
          email: submission.email,
          utm_source: submission.utm_source || '',
          utm_medium: submission.utm_medium || '',
          utm_campaign: submission.utm_campaign || '',
          utm_term: submission.utm_term || '',
          utm_content: submission.utm_content || '',
        };

        console.log('Sending webhook to Zapier:', webhookData);

        const response = await fetch(ZAPIER_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        });

        if (response.ok) {
          console.log('Zapier webhook sent successfully for:', email);
        } else {
          console.error('Zapier webhook failed:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Zapier webhook error:', error);
      }

      // Return success response immediately
      return res.status(201).json({
        success: true,
        message: 'Email submitted successfully',
        data: { email }
      });

    } else {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
    }

  } catch (error) {
    console.error('Email submission error:', error);
    return res.status(400).json({
      success: false,
      message: 'Invalid email address',
      error: error.message || 'Unknown error'
    });
  }
}
