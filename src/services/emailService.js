// Email service for sending confirmation emails
class EmailService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || "/.netlify/functions";
  }

  async sendConfirmationEmail(
    tourDetails,
    paymentDetails,
    customerEmail,
    customerName
  ) {
    try {
      const response = await fetch(`${this.baseUrl}/sendgrid-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tourDetails,
          paymentDetails,
          customerEmail,
          customerName,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      throw error;
    }
  }

  // Alternative method using EmailJS (client-side email service)
  async sendEmailWithEmailJS(
    tourDetails,
    paymentDetails,
    customerEmail,
    customerName
  ) {
    // This requires EmailJS setup - see setup instructions below
    if (typeof window !== "undefined" && window.emailjs) {
      try {
        const templateParams = {
          to_email: customerEmail,
          to_name: customerName,
          tour_name: tourDetails.name,
          tour_date: tourDetails.selectedDate || "To be confirmed",
          tour_duration: tourDetails.duration,
          tour_participants: tourDetails.participants || 1,
          tour_price: tourDetails.totalPrice || tourDetails.price,
          transaction_id: paymentDetails.id,
          from_name: "Georgia Stride Tours",
          reply_to: "support@georgiastride.com",
        };

        const result = await window.emailjs.send(
          "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
          "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
          templateParams,
          "YOUR_USER_ID" // Replace with your EmailJS user ID
        );

        return result;
      } catch (error) {
        console.error("EmailJS error:", error);
        throw error;
      }
    } else {
      throw new Error("EmailJS not available");
    }
  }

  // Method to collect customer email before payment
  async collectCustomerEmail() {
    return new Promise((resolve) => {
      const email = prompt(
        "Please enter your email address for booking confirmation:"
      );
      if (email && this.isValidEmail(email)) {
        resolve(email);
      } else if (email) {
        alert("Please enter a valid email address.");
        resolve(this.collectCustomerEmail());
      } else {
        resolve(null);
      }
    });
  }

  // Email validation
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

export default new EmailService();
