# A2P 10DLC Compliance Documentation

This document explains how the Terms & Privacy compliance features work for A2P 10DLC registration.

## Overview

To comply with A2P 10DLC registration requirements, all data collection forms now include:
- **Privacy Policy** (`/privacy-policy`)
- **Terms of Service** (`/terms-of-service`)
- **Required checkbox** for user consent before data collection

## Contact Information

**Company Name:** Redwood Meridian LLC  
**Domain:** redwoodmeridian.com  
**Support Email:** support@redwoodmeridian.com  
**Address:** 7104 Salisbury Rd., West Hills, CA 91307

## Easy Toggle Configuration

The terms checkbox can be easily enabled/disabled on any form:

### EmailForm Component

```tsx
// Location: src/components/ui/EmailForm.tsx

// Show checkbox (default - for A2P compliance)
<EmailForm 
  showTermsCheckbox={true}  // ← Change to false to disable
  source="hero-form"
/>

// Hide checkbox
<EmailForm 
  showTermsCheckbox={false}  // ← Set to false to disable
  source="hero-form"
/>
```

### EmailPopup Component

The EmailPopup component **always shows the checkbox** to ensure A2P compliance.

To disable the checkbox in EmailPopup:
1. Open `src/components/ui/EmailPopup.tsx`
2. Find the `<TermsCheckbox />` component (around line 136)
3. Comment it out or wrap it in a conditional

## Where Data Collection Happens

1. **Hero Section Email Form** (`src/screens/HomePage/sections/CallToActionSection/`)
2. **Email Popup** (`src/components/ui/EmailPopup.tsx`)
3. **All forms using EmailForm component**

All collection points now include the terms checkbox by default.

## Pages Created

### Privacy Policy
- **Route:** `/privacy-policy`
- **File:** `src/screens/PrivacyPolicyPage/PrivacyPolicyPage.tsx`

### Terms of Service  
- **Route:** `/terms-of-service`
- **File:** `src/screens/TermsOfServicePage/TermsOfServicePage.tsx`

## Testing

To verify the implementation:

1. **Test Privacy Policy:**
   - Visit: `http://localhost:5173/privacy-policy`

2. **Test Terms of Service:**
   - Visit: `http://localhost:5173/terms-of-service`

3. **Test Email Forms:**
   - Open any page with an email form
   - Verify the checkbox appears
   - Verify you cannot submit without checking the box
   - Verify links open in new tabs

## A2P 10DLC Checklist

- ✅ Privacy Policy created
- ✅ Terms of Service created  
- ✅ Checkbox on all data collection forms
- ✅ Links to policies on all forms
- ✅ Company information consistent across all pages
- ✅ Support email configured
- ✅ Domain updated to redwoodmeridian.com

## Notes

- The checkbox is **enabled by default** on all forms to ensure A2P 10DLC compliance
- To disable for testing: set `showTermsCheckbox={false}` on the EmailForm component
- The TermsCheckbox component is reusable and can be added to any form

