import { useState } from "react";
import "./Skills.css";
import orgImage from "../../assets/iubat.jpg"; // Using this as a placeholder

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skillData = [
    { name: "React JS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: ".NET Core", level: 80 },
    { name: "C#", level: 85 },
    { name: "SQL Server", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Frontend Development", level: 90 },
  ];

  const experienceData = {
    organization: "International University of Business Agriculture & Technology",
    designation: "Software Developer",
    duration: "2022 - Present",
    description: "Working on building modern web applications, focusing on both frontend and backend technologies like React, .NET, and SQL Server."
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
