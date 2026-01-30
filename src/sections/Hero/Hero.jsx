import "./Hero.css";
import heroImage from "../../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <div className="hero-badge">Available for Work</div>
          <h5 className="hero-subtitle">Hi, I'm</h5>

          <h1 className="hero-title">
            <span className="text-gradient">Sabbir Hossain</span> <br /> 
            <span className="text-outline">Hridoy</span>
          </h1>

          <p className="hero-desc">
            I am a frontend developer, I have 1+ years of experience as a
            developer and I love working with HTML and CSS.
          </p>

          <div className="hero-actions">
            <button className="hero-btn primary">Hire Me</button>
            <button className="hero-btn secondary">Download CV</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-blob"></div>
            <div className="hero-shape-layer"></div>
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
