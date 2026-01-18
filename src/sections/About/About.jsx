import "./About.css";
import aboutSmall from "../../assets/about-small.jpg";
import aboutLarge from "../../assets/iubat.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* LEFT */}
        <div className="about-left">
          <span className="section-tag">About Me</span>

          <h2 className="about-title">
            Leading the way in <br /> Creative Product Designer
          </h2>

          <p className="about-desc">
            I’m a React developer focused on building clean, scalable,
            and user-friendly interfaces. I enjoy turning complex
            problems into simple, beautiful designs.
          </p>

          <div className="about-info">
            <div>
              <span className="info-label">Name</span>
              <p>Hridoy</p>
            </div>
            <div>
              <span className="info-label">Experience</span>
              <p>1.5+ Years</p>
            </div>
            <div>
              <span className="info-label">Date of Birth</span>
              <p>05 May, 2001</p>
            </div>
          </div>

          <h3 className="edu-title">Education & Experience</h3>

          <ul className="edu-list">
            <li>
              <span>2022 – Present</span>
              <p>Bachelor of Computer Science</p>
              <small>International University of Business Agriculture & Technology</small>
            </li>
            <li>
              <span>2018 – 2020</span>
              <p>Higher Secondary Certificate in Science</p>
              <small>I.E.S School & College</small>
            </li>
            <li>
              <span>2016 – 2018</span>
              <p>Secondary School Certificate in Science</p>
              <small>Kalia Ramnagar High School</small>
            </li>
          </ul>

          <button className="about-btn">Contact Me</button>

          <img src={aboutSmall} alt="About small" className="about-small-img" />
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <img src={aboutLarge} alt="About large" />
        </div>

      </div>
    </section>
  );
};

export default About;
