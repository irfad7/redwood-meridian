import React from "react";
import { Link } from "react-router-dom";

export const PrivacyPolicyPage = (): JSX.Element => {
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
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-[#4d5256] [font-family:'Playfair_Display',serif]">
            <p className="text-sm mb-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                1. Information We Collect
              </h2>
              <p>
                Redwood Meridian LLC ("we," "us," or "our") collects information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Submit your email address through our website forms</li>
                <li>Contact us via email</li>
                <li>Complete our qualification questionnaire</li>
                <li>Interact with our website and services</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, phone number, company name, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you updates, newsletters, and marketing communications</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                4. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                5. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                7. Children's Privacy
              </h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0c0c0c] mb-4">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

