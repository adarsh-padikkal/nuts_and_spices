import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // '', 'sending', 'success'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const { firstName, lastName, email, phone, message } = formData;

    try {
      const response = await fetch("/send_mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
        }),
      });

      // Check if response is valid JSON
      if (!response.ok) {
        throw new Error("PHP script not found or returned error status.");
      }

      const data = await response.json();

      if (data && data.success) {
        setStatus("success");
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "PHP script failed to send mail.");
      }
    } catch (error) {
      console.warn(
        "Mail script failed or unavailable. Falling back to local mail client. Details:",
        error,
      );

      // Construct email subject and body templates for client fallback
      const subject = `New Website Inquiry from ${firstName} ${lastName}`;
      const body =
        `Dear Kalyan Foods Team,\n\nYou have received a new inquiry from the website contact form:\n\n` +
        `----------------------------------------\n` +
        `Sender Details:\n` +
        `- Name: ${firstName} ${lastName}\n` +
        `- Email: ${email}\n` +
        `- Phone: ${phone || "Not Provided"}\n\n` +
        `Message Details:\n` +
        `"${message}"\n` +
        `----------------------------------------\n\n` +
        `Best regards,\n` +
        `${firstName} ${lastName}`;

      // Open default mail handler (mailto:)
      const mailtoUrl = `mailto:adarshkayanna2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      setStatus("fallback");

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    // Reset status after a few seconds
    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Fill up the form and our team will get back to you within 24 hours.
          </p>
          <div className="info-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 89435 22106</span>
          </div>
          <div className="info-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>adarshkayanna2001@gmail.com</span>
          </div>
          <div className="info-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>123 Market Street, Food District, City 400001</span>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="contact-form-advanced">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows="4"
                required
              ></textarea>
            </div>

            {status === "success" && (
              <div
                style={{
                  color: "var(--primary)",
                  marginBottom: "1rem",
                  fontWeight: 500,
                }}
              >
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "fallback" && (
              <div
                style={{
                  color: "var(--primary)",
                  marginBottom: "1rem",
                  fontWeight: 500,
                }}
              >
                ✓ Redirecting to mail client to send message... Form reset
                successfully!
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "0.5rem", width: "100%" }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
