const { Resend } = require("resend");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { tourDetails, paymentDetails, customerEmail, customerName } =
      JSON.parse(event.body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from:
        process.env.FROM_EMAIL ||
        "Georgia Stride Tours <noreply@georgiastride.com>",
      to: [customerEmail],
      subject: `Booking Confirmation - ${tourDetails.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Booking Confirmation</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .tour-card { background: white; border-radius: 10px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .success-icon { font-size: 48px; margin-bottom: 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 5px; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
            .info-item { background: #f0f0f0; padding: 10px; border-radius: 5px; }
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
              <h2>Hello ${customerName || "Valued Customer"},</h2>
              <p>Your tour booking has been successfully confirmed! Here are your booking details:</p>
              
              <div class="tour-card">
                <h3>${tourDetails.name}</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <strong>Date:</strong><br>
                    ${tourDetails.selectedDate || "To be confirmed"}
                  </div>
                  <div class="info-item">
                    <strong>Duration:</strong><br>
                    ${tourDetails.duration}
                  </div>
                  <div class="info-item">
                    <strong>Participants:</strong><br>
                    ${tourDetails.participants || 1}
                  </div>
                  <div class="info-item">
                    <strong>Total Paid:</strong><br>
                    $${tourDetails.totalPrice || tourDetails.price}
                  </div>
                </div>
              </div>
              
              <h3>What's Next?</h3>
              <ul>
                <li><strong>Meeting Point:</strong> We'll send you the exact meeting location 24 hours before your tour</li>
                <li><strong>Guide Contact:</strong> Your guide will contact you the day before with their details</li>
                <li><strong>What to Bring:</strong> Comfortable shoes, camera, and a sense of adventure!</li>
              </ul>
              
              <h3>Important Information</h3>
              <ul>
                <li>Please arrive 10 minutes before the scheduled start time</li>
                <li>In case of bad weather, we'll contact you to reschedule</li>
                <li>Free cancellation up to 24 hours before the tour</li>
              </ul>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://georgiastride.com" class="button">Visit Our Website</a>
                <a href="mailto:support@georgiastride.com" class="button">Contact Support</a>
              </div>
              
              <div class="footer">
                <p><strong>Georgia Stride Tours</strong></p>
                <p>📧 support@georgiastride.com | 📞 +995 555 123 456</p>
                <p>Transaction ID: ${paymentDetails.id}</p>
                <p>Thank you for choosing us for your Georgian adventure!</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Confirmation email sent successfully via Resend",
        messageId: data.id,
      }),
    };
  } catch (error) {
    console.error("Resend email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send confirmation email",
        details: error.message,
      }),
    };
  }
};
