import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("");
    setIsSending(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sabbirhossainhridoy06@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();
      if (response.ok) {
        setStatusMessage("Message sent successfully. I will reply soon.");
        event.target.reset();
      } else {
        setStatusMessage(
          "Unable to send message. Please try again later."
        );
      }
    } catch (error) {
      setStatusMessage(
        "Something went wrong. Please try again again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="contact-title">
            Let's <span className="text-gradient">Work</span> <br />
            <span className="text-outline">Together</span>
          </h2>
        </div>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 5h18v14H3V5Zm2 2v10h14V7H5Zm2.5 1.5h9v1.5h-9v-1.5Zm0 3h6v1.5h-6v-1.5Z" />
                </svg>
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>sabbirhossainhridoy06@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.24 1l-2.23 2.2Z" />
                </svg>
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+880 1725-272987</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.facebook.com/sabbir.hossain.hridoy.754697/" className="social-icon" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.99H7.898v-2.887h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.887h-2.33v6.989C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sabbir-hossain-hridoy-bbb4052b4/" className="social-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.5 24h4.8V14.5c0-5.1 6-5.5 6 0V24h4.8V13.2c0-8.6-9.2-8.3-11.6-4.1V13H7.5v11z"/>
                </svg>
              </a>
              <a href="https://github.com/Hridu06" className="social-icon" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.03 0 0 .98-.31 3.2 1.19a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.58.23 2.74.11 3.03.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New message from portfolio website" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {statusMessage && (
                <p className="contact-status">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
