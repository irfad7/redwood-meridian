import { UTMParams, getUTMParams } from '../utils/utmTracking';
import { trackLeadFormSubmit } from '../utils/analytics';

// Local API endpoint for email submission
const API_ENDPOINT = '/api/submit-email';

export interface EmailSubmission {
  email: string;
  source?: string;
  timestamp?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Function to send email via local API
async function sendEmailViaAPI(submission: EmailSubmission): Promise<boolean> {
  try {
    const webhookData = {
      email: submission.email,
      utm_source: submission.utm_source || '',
      utm_medium: submission.utm_medium || '',
      utm_campaign: submission.utm_campaign || '',
      utm_term: submission.utm_term || '',
      utm_content: submission.utm_content || '',
    };

    console.log('Sending email data via API:', webhookData);

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    console.log('API response status:', response.status);

    if (!response.ok) {
      console.error('API call failed:', response.status, response.statusText);
      return false;
    }

    const result = await response.json();
    console.log('API call success:', result);
    return result.success;
  } catch (error) {
    console.error('API call error:', error);
    return false;
  }
}

export class EmailService {
  static async submitEmail(email: string, source?: string): Promise<ApiResponse> {
    try {
      const utmParams = getUTMParams();
      
      const submission: EmailSubmission = {
        email,
        source: source || 'landing-page',
        timestamp: new Date().toISOString(),
        ...utmParams,
      };

      console.log('Submitting email:', submission);

      // Send email via local API
      const apiSuccess = await sendEmailViaAPI(submission);
      
      if (apiSuccess) {
        console.log('Email submitted successfully via API for:', email);
        
        // Track successful email submission with funnel tracking
        trackLeadFormSubmit(source || 'landing-page', email);

        return {
          success: true,
          message: 'Email submitted successfully',
          data: { email }
        };
      } else {
        console.error('API call failed for:', email);
        return {
          success: false,
          message: 'Failed to submit email - API error',
        };
      }
    } catch (error) {
      console.error('Email submission error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit email',
      };
    }
  }
}
