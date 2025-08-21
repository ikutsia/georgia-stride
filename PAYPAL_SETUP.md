# PayPal Integration Setup Guide

## Overview
This guide will help you set up PayPal payment functionality for your Georgia Stride tours website.

## Prerequisites
- A PayPal Business account
- Access to PayPal Developer Dashboard

## Step 1: Create PayPal App
1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Sign in with your PayPal Business account
3. Navigate to "Apps & Credentials"
4. Click "Create App"
5. Give your app a name (e.g., "Georgia Stride Tours")
6. Select "Business" account type
7. Click "Create App"

## Step 2: Get Your Client ID
1. After creating the app, you'll see your Client ID
2. Copy the Client ID (it looks like: `Ae...`)

## Step 3: Update Your Code
Replace the placeholder client ID in the following files:

### In `src/App.js`:
```javascript
const paypalOptions = {
  clientId: "YOUR_ACTUAL_CLIENT_ID_HERE", // Replace "test" with your real client ID
  currency: "USD",
  intent: "capture",
};
```

### In `src/components/PayPalPayment.js`:
```javascript
// The client ID is now handled at the app level, so no changes needed here
```

## Step 4: Test Your Integration
1. Start your development server: `npm start`
2. Add a tour to your cart
3. Click "Proceed to Checkout"
4. Click "Pay Now" for any tour
5. You should see the PayPal payment buttons
6. Use PayPal's sandbox accounts for testing

## PayPal Sandbox Testing
For testing, you can use these sandbox accounts:

### Buyer Account:
- Email: sb-1234567890@business.example.com
- Password: (provided in PayPal Developer Dashboard)

### Seller Account:
- Email: sb-1234567890@business.example.com
- Password: (provided in PayPal Developer Dashboard)

## Production Setup
When ready for production:

1. Switch to "Live" environment in PayPal Developer Dashboard
2. Get your production Client ID
3. Update the client ID in your code
4. Test with real PayPal accounts

## Security Notes
- Never commit your real PayPal Client ID to version control
- Use environment variables for production:
  ```javascript
  clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID
  ```
- Create a `.env` file in your project root:
  ```
  REACT_APP_PAYPAL_CLIENT_ID=your_actual_client_id_here
  ```

## Features Included
- ✅ Secure PayPal payment processing
- ✅ Individual tour payment (pay per tour)
- ✅ Payment success/failure handling
- ✅ Order summary before payment
- ✅ Automatic cart cleanup after successful payment
- ✅ Responsive design matching your site theme

## Troubleshooting
- If PayPal buttons don't appear, check your Client ID
- If payments fail, verify your PayPal account is properly set up
- Check browser console for any JavaScript errors
- Ensure you're using HTTPS in production (PayPal requirement)

## Support
For PayPal-specific issues, visit [PayPal Developer Support](https://developer.paypal.com/support/)
