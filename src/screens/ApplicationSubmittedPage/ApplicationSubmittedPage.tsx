import React from "react";
import { Facebook, Instagram, Youtube, Linkedin, Calendar, Users, Target, ArrowRight, CheckCircle, Clock, Phone } from "lucide-react";
import { trackPageView, trackApplicationComplete } from "../../utils/analytics";

export const ApplicationSubmittedPage = (): JSX.Element => {
  // Track page view on component mount
  React.useEffect(() => {
    trackPageView('Application Submitted Page');
    // Track application completion for funnel analysis
    trackApplicationComplete();
  }, []);

  // Dynamically resize the booking iframe when the provider posts height updates
  const bookingIframeRef = React.useRef<HTMLIFrameElement | null>(null);
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the booking provider
      const isFromProvider = typeof event.origin === 'string' && event.origin.includes('link.legalfunnel.com');
      if (!isFromProvider) return;

      const data: any = event.data;
      // Many embed scripts post an object containing a height; guard defensively
      const possibleHeight = (data && (data.height || data.newHeight || data.iframeHeight)) as number | undefined;
      if (typeof possibleHeight === 'number' && bookingIframeRef.current) {
        bookingIframeRef.current.style.height = `${Math.max(possibleHeight, 600)}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-[#d7e3f3]/60 to-white scroll-optimized">
      <div className="w-full flex flex-col">
        {/* Header with Logo */}
        <div className="w-full relative">
          <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-10 pb-8 md:pb-12 lg:pb-16">
            <div className="flex items-center">
              <h1 className="[font-family:'Playfair_Display',serif] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
                <span className="text-[#0c0c0c]">Redwood</span>{' '}
                <span className="text-[#0e823e]">Meridian</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            
            {/* Success Section */}
            <div className="text-center mb-12 md:mb-10 lg:mb-8 mt-8">
              <div className="mb-4">
                <h1 className="[font-family:'Playfair_Display',serif] font-normal text-[#0c0c0c] text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[-0.5px] leading-tight whitespace-nowrap flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-green-600" />
                  Your Application Has Been Received
                </h1>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="[font-family:'Playfair_Display',serif] font-normal text-[#0c0c0c] text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
                  You're one step closer to building a predictable pipeline of 15+ new car accident clients every month.
                </p>
              </div>
            </div>

            {/* Next Steps Section */}
            <div className="mb-12 md:mb-10 lg:mb-8">
              <div className="text-center mb-8 md:mb-6 lg:mb-4">
                <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-3xl md:text-4xl lg:text-5xl tracking-[-0.5px] leading-tight mb-6">
                  The next step is to lock in your strategy call.
                </h2>
                
                <div className="max-w-4xl mx-auto">
                  <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] text-lg md:text-xl leading-relaxed mb-8">
                    This call is a working session. We'll review your current intake and marketing, show you how top personal injury firms are signing 15+ clients per month, and outline a roadmap specific to your firm. Please choose a time when all decision-makers can join.
                  </p>
                </div>
              </div>
              
              <div style={{marginTop: '-20px', marginBottom: '-60px'}} className="md:!-mt-10">
                <iframe 
                  src="https://link.legalfunnel.com/widget/booking/u7qmhdSBaONOc8fIipAv" 
                  style={{
                    width: '100%', 
                    height: '800px',
                    minHeight: '800px',
                    border: 'none', 
                    overflow: 'visible'
                  }} 
                  scrolling="auto" 
                  id="u7qmhdSBaONOc8fIipAv_1756957745159"
                ></iframe>
                <script src="https://link.legalfunnel.com/js/form_embed.js" type="text/javascript"></script>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="w-full border-t border-[#ebecef] flex flex-col items-center gap-6 py-8 mt-16">
          {/* Logo */}
          <div>
            <h2 className="[font-family:'Playfair_Display',serif] text-[#0e823e] font-bold text-2xl md:text-3xl tracking-tight">
              Redwood Meridian
            </h2>
          </div>

          {/* Address */}
          <div className="text-center text-[#4d5256] text-sm leading-[19.6px]">
            10880 Wilshire Blvd Suite 2000, <br />
            Los Angeles, CA 90024
          </div>

          {/* Links to Privacy Policy and Terms */}
          <div className="flex items-center gap-4">
            <a 
              href="/privacy-policy" 
              className="[font-family:'Playfair_Display',serif] text-[#4d5256] hover:text-[#0e823e] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-[#4d5256]">|</span>
            <a 
              href="/terms-of-service" 
              className="[font-family:'Playfair_Display',serif] text-[#4d5256] hover:text-[#0e823e] text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <p className="[font-family:'Playfair_Display',serif] font-normal italic text-[#60606b] text-[14.1px] leading-[19.7px]">
              This program is subject to Redwood Meridian&apos;s prerequisites and process
              adherence. Spaces are limited. No guarantees of specific case
              outcomes. Compliance with State Bar guidelines required.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/mylegalacademyofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4d5256] hover:text-[#0e823e] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/mylegalacademy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4d5256] hover:text-[#0e823e] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@mylegalacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4d5256] hover:text-[#0e823e] transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/company/mylegalacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4d5256] hover:text-[#0e823e] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
