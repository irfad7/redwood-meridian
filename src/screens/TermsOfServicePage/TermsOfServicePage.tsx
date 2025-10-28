import React from "react";
import { Link } from "react-router-dom";

export const TermsOfServicePage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full flex flex-col">
        {/* Header with Logo */}
        <div className="w-full bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <h1 className="[font-family:'Playfair_Display',serif] text-[#0e823e] font-bold text-2xl md:text-3xl tracking-tight">
                Redwood Meridian
              </h1>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="[font-family:'Playfair_Display',serif] text-4xl md:text-5xl font-semibold text-[#0c0c0c] mb-8">
            Terms of Service
          </h1>
          
          <div className="space-y-6 text-[#4d5256] [font-family:'Playfair_Display',serif]">
            <p className="text-sm mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using redwoodmeridian.com (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Redwood Meridian LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                3. Description of Services
              </h2>
              <p>
                Redwood Meridian LLC provides case generation systems and marketing services for personal injury law firms. Our services are subject to prerequisites and process adherence. Spaces are limited, and no guarantees of specific case outcomes are provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                4. User Accounts
              </h2>
              <p>
                To access certain features of our services, you may be required to provide your email address and other information. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                5. Disclaimer
              </h2>
              <p>
                The materials on Redwood Meridian LLC's website are provided on an 'as is' basis. Redwood Meridian LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="mt-4">
                Further, Redwood Meridian LLC does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                6. Limitations
              </h2>
              <p>
                In no event shall Redwood Meridian LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Redwood Meridian LLC's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                7. Compliance with State Bar Guidelines
              </h2>
              <p>
                Users agree to comply with all applicable State Bar guidelines and regulations. This program is subject to Redwood Meridian LLC's prerequisites and process adherence. No guarantees of specific case outcomes are provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                8. Revisions and Errata
              </h2>
              <p>
                The materials appearing on Redwood Meridian LLC's website could include technical, typographical, or photographic errors. Redwood Meridian LLC does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                9. Links
              </h2>
              <p>
                Redwood Meridian LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Redwood Meridian LLC of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                10. Site Terms of Use Modifications
              </h2>
              <p>
                Redwood Meridian LLC may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                11. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                12. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Redwood Meridian LLC</strong><br />
                7104 Salisbury Rd.<br />
                West Hills, CA 91307<br />
                Email: <a href="mailto:support@redwoodmeridian.com" className="text-[#0e823e] hover:underline">support@redwoodmeridian.com</a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/" 
              className="text-[#0e823e] hover:underline [font-family:'Playfair_Display',serif]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

