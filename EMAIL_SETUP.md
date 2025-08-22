# Email Confirmation Setup Guide

## Overview

This guide will help you set up automatic email confirmation sending after successful PayPal payments for your Georgia Stride tours website.

## Setup Options

### Option 1: Netlify Functions (Recommended for Netlify deployment)

#### Step 1: Install Dependencies

```bash
cd netlify/functions
npm install
```

#### Step 2: Configure Environment Variables

In your Netlify dashboard, go to Site Settings > Environment Variables and add:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**For Gmail:**

1. Enable 2-factor authentication
2. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"
   - Use this password in EMAIL_PASSWORD

#### Step 3: Deploy

The functions will automatically deploy when you push to your repository.

### Option 2: EmailJS (Client-side, No Backend Required)

#### Step 1: Sign up for EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Add your email service (Gmail, Outlook, etc.)

#### Step 2: Create Email Template

1. In EmailJS dashboard, go to Email Templates
2. Create a new template with this HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Booking Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        text-align: center;
        border-radius: 10px 10px 0 0;
      }
      .content {
        background: #f9f9f9;
        padding: 30px;
        border-radius: 0 0 10px 10px;
      }
      .tour-card {
        background: white;
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      .success-icon {
        font-size: 48px;
        margin-bottom: 10px;
      }
      .button {
        display: inline-block;
        background: #667eea;
        color: white;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 5px;
        margin: 10px 5px;
      }
      .footer {
        text-align: center;
        margin-top: 30px;
        color: #666;
        font-size: 14px;
      }
      .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin: 20px 0;
      }
      .info-item {
        background: #f0f0f0;
        padding: 10px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="success-icon">✅</div>
        <h1>Booking Confirmed!</h1>
        <p>Thank you for choosing Georgia Stride Tours</p>
      </div>

      <div class="content">
        <h2>Hello {{to_name}},</h2>
        <p>
          Your tour booking has been successfully confirmed! Here are your
          booking details:
        </p>

        <div class="tour-card">
          <h3>{{tour_name}}</h3>
          <div class="info-grid">
            <div class="info-item">
              <strong>Date:</strong><br />
              {{tour_date}}
            </div>
            <div class="info-item">
              <strong>Duration:</strong><br />
              {{tour_duration}}
            </div>
            <div class="info-item">
              <strong>Participants:</strong><br />
              {{tour_participants}}
            </div>
            <div class="info-item">
              <strong>Total Paid:</strong><br />
              ${{tour_price}}
            </div>
          </div>
        </div>

        <h3>What's Next?</h3>
        <ul>
          <li>
            <strong>Meeting Point:</strong> We'll send you the exact meeting
            location 24 hours before your tour
          </li>
          <li>
            <strong>Guide Contact:</strong> Your guide will contact you the day
            before with their details
          </li>
          <li>
            <strong>What to Bring:</strong> Comfortable shoes, camera, and a
            sense of adventure!
          </li>
        </ul>

        <h3>Important Information</h3>
        <ul>
          <li>Please arrive 10 minutes before the scheduled start time</li>
          <li>In case of bad weather, we'll contact you to reschedule</li>
          <li>Free cancellation up to 24 hours before the tour</li>
        </ul>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://georgiastride.com" class="button"
            >Visit Our Website</a
          >
          <a href="mailto:support@georgiastride.com" class="button"
            >Contact Support</a
          >
        </div>

        <div class="footer">
          <p><strong>Georgia Stride Tours</strong></p>
          <p>📧 support@georgiastride.com | 📞 +995 555 123 456</p>
          <p>Transaction ID: {{transaction_id}}</p>
          <p>Thank you for choosing us for your Georgian adventure!</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

#### Step 3: Update EmailJS Configuration

In `src/services/emailService.js`, replace the placeholder values:

```javascript
const result = await window.emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  templateParams,
  "YOUR_USER_ID" // Replace with your EmailJS user ID
);
```

#### Step 4: Add EmailJS Script

In `public/index.html`, add before the closing `</body>` tag:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
></script>
<script type="text/javascript">
  (function () {
    emailjs.init("YOUR_USER_ID");
  })();
</script>
```

### Option 3: Custom Backend API

If you have your own backend server, you can create an API endpoint:

```javascript
// Example Express.js endpoint
app.post("/api/send-confirmation-email", async (req, res) => {
  const { tourDetails, paymentDetails, customerEmail, customerName } = req.body;

  // Use nodemailer or any email service
  // Send confirmation email

  res.json({ success: true, messageId: "email-sent" });
});
```

Then update the `baseUrl` in `emailService.js`:

```javascript
this.baseUrl = "https://your-backend-domain.com/api";
```

## Features Included

### ✅ Email Collection

- Beautiful email collection form before payment
- Email validation
- Optional name collection
- Seamless integration with payment flow

### ✅ Confirmation Email

- Professional HTML email template
- Tour details and payment information
- Meeting point and guide information
- Contact details and support information
- Transaction ID for reference

### ✅ Error Handling

- Graceful fallback if email fails
- Payment success not blocked by email issues
- Console logging for debugging

### ✅ Multiple Email Service Support

- Netlify Functions with nodemailer
- EmailJS for client-side sending
- Custom backend API support

## Testing

### Test Email Sending

1. Add a tour to cart
2. Click "Proceed to Checkout"
3. Enter your email address
4. Complete PayPal payment
5. Check your email for confirmation

### Test Email Template

You can test the email template by:

1. Using EmailJS test feature
2. Sending test emails through your email service
3. Checking email rendering in different clients

## Troubleshooting

### Email Not Sending

- Check environment variables are set correctly
- Verify email service credentials
- Check browser console for errors
- Ensure CORS is configured properly

### Email Template Issues

- Test HTML in email client
- Check for broken images or links
- Verify template variables are populated

### Netlify Functions Issues

- Check function logs in Netlify dashboard
- Verify function dependencies are installed
- Ensure function is deployed correctly

## Security Notes

- Never commit email credentials to version control
- Use environment variables for sensitive data
- Consider rate limiting for email sending
- Implement email validation and sanitization
- Use HTTPS for all API calls

## Support

For EmailJS issues: [EmailJS Support](https://www.emailjs.com/support/)
For Netlify Functions: [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
For nodemailer: [Nodemailer Documentation](https://nodemailer.com/)
