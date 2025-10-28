// Google Analytics event tracking utility
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track email submissions
export const trackEmailSubmission = (source: string, email: string) => {
  trackEvent('email_submit', 'lead_generation', source);
  
  // Also track as conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'G-BPBP33H4JP/email_submission',
      value: 1.0,
      currency: 'USD',
    });
  }
};

// Track funnel progression events
export const trackFunnelEvent = (step: string, action: string, source?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'Funnel_Progression',
      event_label: step,
      funnel_step: step,
      source: source || 'unknown',
      custom_parameters: {
        timestamp: Date.now(),
        page_location: window.location.href
      }
    });
  }
};

// Track lead form submission (step 1 of funnel)
export const trackLeadFormSubmit = (source: string, email: string) => {
  // Track the funnel step
  trackFunnelEvent('lead_form_submit', 'lead_form_submit', source);
  
  // Store funnel tracking data
  if (typeof window !== 'undefined' && window.sessionStorage) {
    const funnelData = {
      email_submitted: true,
      email_timestamp: Date.now(),
      source: source,
      original_utm_source: getUtmParam('utm_source'),
      original_utm_campaign: getUtmParam('utm_campaign'),
      original_utm_medium: getUtmParam('utm_medium')
    };
    window.sessionStorage.setItem('funnel_tracking', JSON.stringify(funnelData));
  }
  
  // Still track the existing email submission event
  trackEmailSubmission(source, email);
};

// Track application completion (step 2 of funnel)
export const trackApplicationComplete = () => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    const funnelData = JSON.parse(window.sessionStorage.getItem('funnel_tracking') || '{}');
    
    if (funnelData.email_submitted) {
      const timeToConvert = Date.now() - funnelData.email_timestamp;
      
      // Track the funnel completion
      trackFunnelEvent('application_submitted', 'application_submitted', funnelData.source);
      
      // Track conversion with timing data
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'G-BPBP33H4JP/application_complete',
          value: 10.0, // Assign value to completed applications
          currency: 'USD',
          custom_parameters: {
            time_to_convert_seconds: Math.round(timeToConvert / 1000),
            original_source: funnelData.original_utm_source,
            original_campaign: funnelData.original_utm_campaign,
            funnel_complete: true
          }
        });
      }
      
      // Clear the funnel tracking data
      window.sessionStorage.removeItem('funnel_tracking');
    } else {
      // Track direct application page visit (without funnel)
      trackFunnelEvent('application_submitted_direct', 'application_submitted', 'direct');
    }
  }
};

// Helper function to get UTM parameters
const getUtmParam = (param: string): string | null => {
  if (typeof window === 'undefined') return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// Track form interactions
export const trackFormInteraction = (action: string, formType: string) => {
  trackEvent(action, 'form_interaction', formType);
};

// Track page views with UTM parameters
export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-BPBP33H4JP', {
      page_title: page,
      page_location: window.location.href,
    });
  }
};

// Declare gtag on window object
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
