import "./Contact.css";

const Contact = () => {
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
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h3>Email</h3>
                <p>hridoy@example.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+880 1234 567890</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon">Li</a>
              <a href="#" className="social-icon">Gh</a>
              <a href="#" className="social-icon">Tw</a>
              <a href="#" className="social-icon">In</a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
