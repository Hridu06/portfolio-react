import "./About.css";
import aboutImage from "../../assets/About.png";

const About = () => (
  <section className="about" id="about">
    <div className="about-container">
      <div className="about-portrait">
        <div className="portrait-accent" aria-hidden="true"></div>
        <img src={aboutImage} alt="Sabbir Hossain Hridoy" />
      </div>

      <div className="about-content">
        <span className="section-tag">About me</span>
        <h2 className="about-title">
          Who is Sabbir Hossain?
        </h2>

        <div className="about-copy">
          <p>
            I&apos;m a <strong>Software Engineer</strong> who builds reliable web
            applications with <strong>React, ASP.NET Core, C#,</strong> and{" "}
            <strong>SQL Server</strong>. I enjoy turning complex requirements
            into clean, user-focused digital experiences.
          </p>
        </div>

        <dl className="about-highlights">
          <div>
            <dt>Years of experience</dt>
            <dd>1.5+</dd>
          </div>
          <div>
            <dt>Projects completed</dt>
            <dd>8+</dd>
          </div>
          <div>
            <dt>Core technologies</dt>
            <dd>3+</dd>
          </div>
        </dl>

        <div className="about-expertise" aria-label="Core expertise">
          <span>Full-stack development</span>
          <span>Responsive interfaces</span>
          <span>UI/UX-minded engineering</span>
        </div>

        <a className="about-link" href="#contact">
          Let&apos;s work together <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

    </div>
  </section>
);

export default About;
