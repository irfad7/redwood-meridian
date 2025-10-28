# Vercel Deployment Checklist

## ✅ **Pre-Deployment Checklist**

### **Configuration Files**
- [x] `vercel.json` - Updated with proper build commands and runtime
- [x] `package.json` - Updated with correct scripts and dependencies
- [x] `vite.config.ts` - Removed problematic base setting
- [x] `.vercelignore` - Created to exclude unnecessary files
- [x] `tsconfig.api.json` - Created for API functions

### **API Functions**
- [x] `/api/submit-email.ts` - Updated with better error handling and CORS
- [x] `/api/health.ts` - Created for health monitoring
- [x] Environment variable support for webhook URL

### **Frontend**
- [x] EmailService.ts - Properly configured for Vercel API
- [x] UTM tracking utilities - Working correctly
- [x] Analytics integration - GA4 tracking configured
- [x] Build process - Successfully tested

### **SEO & Performance**
- [x] Meta tags updated for better SEO
- [x] Open Graph tags configured
- [x] Twitter Cards configured
- [x] Structured data added

## 🚀 **Deployment Steps**

### **1. Environment Variables**
Set these in Vercel dashboard:
```env
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/522295/uhnr1x6/
NODE_ENV=production
```

### **2. Deploy to Vercel**
```bash
# Option 1: Automatic deployment (push to main branch)
git push origin main

# Option 2: Manual deployment
vercel --prod
```

### **3. Post-Deployment Verification**
- [ ] Test health endpoint: `https://your-domain.vercel.app/api/health`
- [ ] Test email submission: Submit test email through form
- [ ] Check Vercel function logs for any errors
- [ ] Verify Zapier webhook receives data
- [ ] Test UTM parameter tracking
- [ ] Check Google Analytics events

## 🔧 **Troubleshooting Commands**

### **Check Build Status**
```bash
npm run build
npm run type-check
```

### **Test API Locally**
```bash
npm run server
# Then test: curl http://localhost:3001/api/health
```

### **Check Vercel Logs**
```bash
vercel logs
```

## 📊 **Monitoring Points**

### **Success Indicators**
- ✅ Build completes without errors
- ✅ Health endpoint returns 200
- ✅ Email submissions reach Zapier
- ✅ Analytics events fire correctly
- ✅ UTM parameters are captured
- ✅ Mobile responsiveness works

### **Common Issues & Solutions**

1. **Build Fails**
   - Check Node.js version (18+ required)
   - Clear cache: `rm -rf node_modules && npm install`

2. **API Not Working**
   - Check Vercel function logs
   - Verify environment variables
   - Test with health endpoint

3. **Email Submissions Fail**
   - Check webhook URL in environment
   - Verify Zapier webhook is active
   - Check CORS configuration

4. **Analytics Not Tracking**
   - Verify GA4 property ID
   - Check browser console for errors
   - Ensure gtag is loaded

## 🎯 **Expected Behavior**

### **Email Submission Flow**
1. User enters email → Form validation
2. API call to `/api/submit-email` → Success response
3. Webhook sent to Zapier → Lead captured
4. Analytics event fired → Conversion tracked
5. Redirect to JotForm → User completes application

### **UTM Tracking**
- All UTM parameters captured from URL
- Sent with email submission
- Available in Zapier webhook data
- Tracked in Google Analytics

### **Performance**
- Page load time < 3 seconds
- Mobile-friendly design
- Fast API responses
- Optimized images and assets
