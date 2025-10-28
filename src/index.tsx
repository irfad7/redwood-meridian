import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage/HomePage";
import { ApplicationSubmittedPage } from "./screens/ApplicationSubmittedPage/ApplicationSubmittedPage";
import { PrivacyPolicyPage } from "./screens/PrivacyPolicyPage/PrivacyPolicyPage";
import { TermsOfServicePage } from "./screens/TermsOfServicePage/TermsOfServicePage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/application-submitted" element={<ApplicationSubmittedPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
