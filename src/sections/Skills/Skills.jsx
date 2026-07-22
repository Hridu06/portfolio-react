import { useState } from "react";
import "./Skills.css";
import orgImage from "../../assets/nanosoft.jpg";
import iubatImage from "../../assets/iubat.jpg";
import iesImage from "../../assets/ies.jpg";
import schoolImage from "../../assets/Kafila.jpg";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skillData = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: ".NET Core", level: 80 },
    { name: "C#", level: 85 },
    { name: "SQL Server", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "WordPress", level: 70 },
  ];

  const experienceData = {
    organization: "Nanosoft, Badda",
    designation: "Software Engineer (.NET)",
    duration: "June 2025 - Present",
    description: "Serving as a full-time .NET Software Engineer on enterprise-grade solutions including DSK Bangladesh and BTS. Responsibilities include developing and maintaining ASP.NET Core Web API applications, integrating React frontends with backend services, implementing database-driven business logic with Microsoft SQL Server and Dapper, and applying OOP, Clean Architecture, and SDLC best practices to deliver scalable, maintainable software.",
    highlights: ["ASP.NET Core Web API", "React Integration", "Clean Architecture", "SQL Server + Dapper"],
    stats: [
      { value: "Full-time", label: "Role Type" },
      { value: "Enterprise", label: "Product Scope" },
      { value: "Backend", label: "Core Focus" },
    ],
  };

  const educationData = [
    {
      year: "2022 - 2025",
      degree: "Bachelor of Computer Science & Engineering",
      institute: "IUBAT - International University of Business Agriculture and Technology",
      image: iubatImage,
      tag: "University",
    },
    {
      year: "2018 - 2020",
      degree: "Higher Secondary Certificate in Science",
      institute: "I.E.S School & College",
      image: iesImage,
      tag: "College",
    },
    {
      year: "2018",
      degree: "Secondary School Certificate in Science",
      institute: "Kalia Ramnagar High School",
      image: schoolImage,
      tag: "School",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-tag">Professional Path</span>
          <h2 className="skills-title">
            Skills & <span className="text-gradient">Professional</span> <br />
            <span className="text-outline">Experience</span>
          </h2>
          
          <div className="skills-tabs">
            <button 
              className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              My Skills
            </button>
            <button 
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>
        </div>

        <div className="skills-content">
          {activeTab === "skills" ? (
            <div className="skills-grid">
              {skillData.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : activeTab === "experience" ? (
            <div className="experience-view">
              <div className="experience-panel experience-copy">
                <span className="experience-kicker">Current Position</span>
                <h3 className="org-name">{experienceData.organization}</h3>
                <h4 className="designation">{experienceData.designation}</h4>
                <span className="exp-duration">{experienceData.duration}</span>
                <p className="exp-desc">{experienceData.description}</p>

                <div className="experience-tags" aria-label="Experience focus areas">
                  {experienceData.highlights.map((highlight) => (
                    <span className="experience-tag" key={highlight}>{highlight}</span>
                  ))}
                </div>
              </div>

              <div className="experience-panel experience-visual">
                <div className="org-img-wrapper">
                  <img src={orgImage} alt="Nanosoft office" className="org-img" />
                </div>
                <div className="experience-stats">
                  {experienceData.stats.map((stat) => (
                    <div className="experience-stat" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="education-view">
              <div className="education-timeline">
                {educationData.map((education, index) => (
                  <article
                    className="education-item"
                    style={{ animationDelay: `${index * 0.12}s` }}
                    key={education.degree}
                  >
                    <div className="education-dot"></div>
                    <div className="education-media">
                      <img src={education.image} alt={education.institute} className="education-img" />
                      <span className="education-tag">{education.tag}</span>
                    </div>
                    <div className="education-content">
                      <span className="education-year">{education.year}</span>
                      <h3 className="education-degree">{education.degree}</h3>
                      <p className="education-institute">{education.institute}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
