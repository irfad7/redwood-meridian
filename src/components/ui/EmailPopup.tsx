import React, { useState } from "react";
import { X, Mail, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { EmailService } from "../../services/EmailService";
import { TermsCheckbox } from "./TermsCheckbox";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export const EmailPopup: React.FC<EmailPopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    if (!acceptedTerms) {
      setError("Please accept the Terms of Service and Privacy Policy");
      return;
    }

    setIsSubmitting(true);
    setIsValid(true);
    
    try {
      // Submit to backend API
      const result = await EmailService.submitEmail(email, "popup-form");
      
      if (result.success) {
        onSubmit(email);
        setIsSubmitting(false);
        setEmail("");
        onClose();
        
        // Redirect to JotForm after a short delay
        setTimeout(() => {
          const jotformUrl = `https://form.jotform.com/252374559938069?email=${encodeURIComponent(email)}`;
          window.open(jotformUrl, '_blank');
        }, 1000);
      } else {
        setError(result.message || "Failed to submit email");
        setIsSubmitting(false);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Email submission error:", err);
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
    if (!isValid && validateEmail(e.target.value)) {
      setIsValid(true);
    }
  };

  const handleClose = () => {
    setEmail("");
    setAcceptedTerms(false);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-[#0e823e] rounded-full p-2">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-xl">
              Get Started with PI Track
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
                      <p className="[font-family:'Playfair_Display',serif] text-[#4d5256] text-base leading-relaxed mb-6">
            Enter your email address to access our qualification questionnaire and see if PI Track is right for your firm.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                disabled={isSubmitting}
                className={`h-12 text-base border-2 ${
                  !isValid ? "border-red-500" : "border-[#d5d5d5]"
                } rounded-[4px] [font-family:'Playfair_Display',serif] px-4 focus:border-[#0e823e] focus:outline-none`}
                required
              />
              {!isValid && (
                <p className="text-red-500 text-sm mt-1 [font-family:'Playfair_Display',serif]">
                  Please enter a valid email address
                </p>
              )}
              {error && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <TermsCheckbox 
              checked={acceptedTerms}
              onChange={setAcceptedTerms}
              required={true}
              className="mb-2"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-[#0e823e] hover:bg-[#0c7236] disabled:bg-gray-400 text-white text-lg [font-family:'Playfair_Display',serif] font-medium rounded-[3px] border border-[#00000021] shadow-[0px_4px_16px_2px_#002c7a33] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  Continue to Application
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
