import "./Hero.css";
import heroImage from "../../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h5 className="hero-subtitle">Hi I'm</h5>

        <h1 className="hero-title">
          Sabbir Hossain <br /> Hridoy
        </h1>

        <p className="hero-desc">
          I'm a React developer focused on building component-driven,
          responsive user interfaces using React, Hooks, and modern JavaScript.
          I have 1+ years of experience creating accessible, performant web
          applications and enjoy working with HTML and CSS alongside React.
        </p>

        <button className="hero-btn">Contact Me</button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
