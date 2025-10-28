# PI Track Landing Page - Personal Injury Case Generation System

A modern, mobile-responsive landing page for personal injury law firms showcasing case generation systems and client testimonials. Built with React, TypeScript, and Vite, featuring advanced email capture with UTM tracking and Zapier webhook integration.

## 🌐 **Production Environment**

- **Domain**: https://redwoodmeridian.com
- **Platform**: Vercel
- **Branch**: `main`
- **Status**: Production-ready

## 🚀 **Key Features**

### **Email Capture & Lead Generation**
- **Hero Form**: Direct email submission with immediate JotForm redirect
- **Popup Forms**: Modal email capture for secondary CTAs
- **UTM Parameter Capture**: Automatic tracking of all UTM parameters
- **Zapier Webhook Integration**: Real-time lead delivery to your CRM
- **Analytics Tracking**: Google Analytics 4 with conversion tracking

### **Technical Stack**
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn UI Components
- **Analytics**: Google Analytics 4 (GA4)
- **Deployment**: Vercel
- **Webhooks**: Zapier integration

## 📊 **Analytics & Tracking**

### **Google Analytics Setup**
- **Property ID**: `G-BPBP33H4JP`
- **Events Tracked**:
  - Page views
  - Email submissions
  - Form interactions
  - UTM parameter tracking

### **UTM Parameter Support**
- `utm_source`: Traffic source
- `utm_medium`: Marketing medium
- `utm_campaign`: Campaign name
- `utm_term`: Keywords
- `utm_content`: Content variation

## 🔧 **Development Setup**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Local Development**
```bash
# Clone the repository
git clone <repository-url>
cd pi-track-lander

# Install dependencies
npm install

# Start development server
npm run dev

# Start API server (optional - for local testing)
npm run server
```

### **Build for Production**
```bash
npm run build
npm run preview
```

## 🚀 **Vercel Deployment**

### **Automatic Deployment**
The project is configured for automatic deployment on Vercel. Push to the `main` branch to trigger deployment.

### **Environment Variables**
Set these in your Vercel dashboard:

```env
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/522295/uhnr1x6/
NODE_ENV=production
```

### **Manual Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📁 **Project Structure**

```
├── api/                    # Vercel serverless functions
│   ├── submit-email.ts    # Email submission endpoint
│   └── health.ts          # Health check endpoint
├── src/
│   ├── components/        # React components
│   ├── screens/          # Page components
│   ├── services/         # Business logic
│   └── utils/            # Utilities
├── index.html            # Entry point
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies
```

## 🔌 **API Endpoints**

### **POST /api/submit-email**
Submits email and UTM data to Zapier webhook.

**Request Body:**
```json
{
  "email": "user@example.com",
  "source": "hero-form",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "pi-cases-2024"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email submitted successfully",
  "data": { "email": "user@example.com" }
}
```

### **GET /api/health**
Health check endpoint for monitoring.

## 🐛 **Troubleshooting**

### **Common Issues**

1. **Build Failures**
   - Ensure Node.js 18+ is installed
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

2. **API Not Working**
   - Check Vercel function logs
   - Verify environment variables are set
   - Test with health endpoint: `/api/health`

3. **Email Submissions Not Reaching Zapier**
   - Check webhook URL in environment variables
   - Verify Zapier webhook is active
   - Check Vercel function logs for errors

### **Debugging**
- Use browser dev tools to check network requests
- Check Vercel function logs in dashboard
- Test API endpoints locally with `npm run server`

## 📈 **Performance Optimization**

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: WebP format support
- **Caching**: Static assets cached by Vercel
- **CDN**: Global edge network via Vercel

## 🔒 **Security**

- **CORS**: Properly configured for API endpoints
- **Input Validation**: Zod schema validation
- **HTTPS**: Enforced by Vercel
- **Environment Variables**: Secure storage

## 📞 **Support**

For technical issues or deployment questions, check:
1. Vercel deployment logs
2. Browser console for frontend errors
3. API function logs in Vercel dashboard

## 📝 **Changelog**

### **v1.0.0** - Initial Release
- Complete landing page with email capture
- UTM parameter tracking
- Zapier webhook integration
- Google Analytics integration
- Mobile-responsive design
- Vercel deployment configuration
