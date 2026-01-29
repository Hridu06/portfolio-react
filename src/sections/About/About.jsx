import { useState, useEffect } from "react";
import "./About.css";
import aboutSmall from "../../assets/about-small.jpg";
import aboutLarge from "../../assets/iubat.jpg";
import heroImage from "../../assets/hero.jpeg";

const About = () => {
  const images = [aboutLarge, heroImage, aboutSmall];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* COLUMN 1: INTRO */}
        <div className="about-column about-left">
          <div className="about-header">
            <span className="section-tag">About Me</span>
            <h2 className="about-title">
              Developing Modern <br /> 
              <span className="text-gradient">Full-Stack Web</span> <br />
              <span className="text-outline">Solutions</span>
            </h2>
          </div>

          <p className="about-desc">
            I’m a React developer focused on building clean, scalable,
            and user-friendly interfaces. I enjoy turning complex
            problems into simple, beautiful designs. My approach combines 
            technical precision with creative problem-solving.
          </p>

          <div className="about-signature">Sabbir Hossain Hridoy</div>
          
          <div className="about-short-img-wrapper">
            <img src={aboutSmall} alt="Short Profile" className="about-short-img" />
          </div>

          <button className="about-btn">Contact Me!</button>
        </div>

        {/* COLUMN 2: EDUCATION */}
        <div className="about-column about-middle">
          <div className="about-info-top">
            <div className="info-item">
              <span className="info-label">Born in</span>
              <p className="info-value">Bangladesh</p>
            </div>
            <div className="info-item">
              <span className="info-label">Experience</span>
              <p className="info-value">1.5+ Years</p>
            </div>
          </div>

          <div className="about-education">
            <h3 className="edu-title">Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="edu-year">2022 – Present</span>
                  <p className="edu-degree">Bachelor of Computer Science</p>
                  <small className="edu-school">IUBAT - International University</small>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="edu-year">2018 – 2020</span>
                  <p className="edu-degree">Higher Secondary Certificate in Science</p>
                  <small className="edu-school">I.E.S School & College</small>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="edu-year">2016 – 2018</span>
                  <p className="edu-degree">Secondary School Certificate in Science</p>
                  <small className="edu-school">Kalia Ramnagar High School</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: SLIDER */}
        <div className="about-column about-right">
          <div className="about-info-top">
            <div className="info-item">
              <span className="info-label">Date of Birth</span>
              <p className="info-value">05 May, 2001</p>
            </div>
          </div>

          <div className="about-slider">
            <div className="slider-wrapper">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`slider-img ${index === currentImage ? "active" : ""}`}
                />
              ))}
            </div>
            {/* Decorative Elements */}
            <div className="deco-dots"></div>
            <div className="deco-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
