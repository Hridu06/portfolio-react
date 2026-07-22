import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-block">
          <span className="footer-tag">Let’s work together</span>
          <h3 className="footer-title">Sabbir Hossain Hridoy</h3>
          <p className="footer-copy">
            Building polished web experiences with a focus on clarity, usability, and business impact.
          </p>
        </div>

        <div className="footer-links-block">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#my-work">My Work</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-social-block">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38A1.56 1.56 0 0 0 6.94 8.5ZM5.5 9.75h2.88V19H5.5Zm4.68 0h2.76v1.26h.04c.38-.73 1.32-1.5 2.72-1.5 2.9 0 3.43 1.9 3.43 4.38V19h-2.88v-17.8c0-.92-.02-2.12-1.3-2.12-1.3 0-1.5 1.02-1.5 2.07V19H10.18Z" />
              </svg>
            </a>
            <a href="https://github.com/Hridu06" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-1.03-.02-1.88-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.06 2.75-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.2 10.2 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-8h3l.5-3h-3.5V8.2c0-.9.3-1.52 1.6-1.52H17V3.9c-.3-.04-1.35-.15-2.56-.15-2.53 0-4.27 1.54-4.27 4.38V11H7v3h3.17v8h3.33Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sabbir Hossain Hridoy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
