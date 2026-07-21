import "./Hero.css";
import heroImage from "../../assets/hero.png";
import cvFile from "../../assets/Sabbir Hossain Hridoy ATS CV.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="hero-badge">Available for Work</div>
          <h5 className="hero-subtitle">Hi, I'm</h5>

          <h1 className="hero-title">
            <span className="hero-name">Sabbir Hossain</span>
            <span className="hero-alias">Hridoy</span>
          </h1>

          <p className="hero-desc">
            I am a full-time .NET Software Engineer with over 1 years of experience in designing and developing user-focused web applications. I work with JavaScript, React, C#, and .NET, with a strong interest in UI/UX design.
          </p>

          <div className="hero-actions">
            <a className="hero-btn primary" href="mailto:sabbirhossainhridoy06@gmail.com?subject=Hiring%20Inquiry">
              Hire Me
            </a>
            <a className="hero-btn secondary" href={cvFile} download>
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-blob"></div>
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Profile" />
            </div>
            {/* Floating Tags */}
            <div className="tech-tag tag-1">React</div>
            <div className="tech-tag tag-2">UI/UX</div>
            <div className="tech-tag tag-3">.NET</div>
            <div className="tech-tag tag-4">SQL Server</div>
            <div className="tech-tag tag-5">C#</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
