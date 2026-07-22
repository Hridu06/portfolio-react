import { useState } from "react";
import "./Skills.css";
import orgImage from "../../assets/nanosoft.jpg";

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
    duration: "June 2025 – Present",
    description: "Serving as a full-time .NET Software Engineer on enterprise-grade solutions including DSK Bangladesh and BTS. Responsibilities include developing and maintaining ASP.NET Core Web API applications, integrating React frontends with backend services, implementing database-driven business logic with Microsoft SQL Server and Dapper, and applying OOP, Clean Architecture, and SDLC best practices to deliver scalable, maintainable software."
  };

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
          ) : (
            <div className="experience-view">
              <div className="experience-left">
                <h3 className="org-name">{experienceData.organization}</h3>
                <h4 className="designation">{experienceData.designation}</h4>
                <span className="exp-duration">{experienceData.duration}</span>
                <p className="exp-desc">{experienceData.description}</p>
              </div>
              <div className="experience-right">
                <div className="org-img-wrapper">
                  <img src={orgImage} alt="Organization" className="org-img" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
