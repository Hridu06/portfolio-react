import { useState } from "react";
import "./Projects.css";
import DSK from "../../assets/DSK.png";
import BTS from "../../assets/BTS.png";
import UrbanStep from "../../assets/UrbanStep.png";
import Foodie from "../../assets/Foodie.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DSK",
      category: "ASP.NET Core",
      img: DSK,
      description: "A professional enterprise-style web platform built to structure business workflows and present key information clearly.",
      techStack: ["C#", "ASP.NET Core", "Dapper", "React", "SQL Server"],
      liveDemo: "https://dsk.nanoit.biz/",
      github: "private",
    },
    {
      id: 2,
      title: "BTS",
      category: "ASP.NET Core",
      img: BTS,
      description: "A structured internal dashboard concept focused on visibility, usability, and streamlined operational performance.",
      techStack: ["C#", "ASP.NET Core",  "Dapper", "React", "SQL Server" ],
      liveDemo: "https://bts.nanoit.biz/",
      github: "private",
    },
    {
      id: 3,
      title: "UrbanStep",
      category: "React",
      img: UrbanStep,
      description: "A modern landing page concept designed to communicate product value with clean storytelling and polished interface hierarchy.",
      techStack: ["React", "JavaScript", "UX Strategy"],
      liveDemo: "#",
      github: "https://github.com/Hridu06/Urban-Step",
    },
    {
      id: 4,
      title: "Foodie",
      category: "UIUX",
      img: Foodie,
      description: "A mobile-first food discovery concept focused on intuitive browsing, elegant content hierarchy, and a delightful user experience.",
      techStack: ["UIUX", "Figma", "Mobile Design", "Prototype"],
      liveDemo: "https://dribbble.com/Hriduu-6",
      
    },
  ];

  const [selectedProjectId, setSelectedProjectId] = useState(1);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) || projects[0];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">Projects</span>
          <h2 className="projects-title">
            Built for <span className="text-gradient">Impact</span>
          </h2>
          <p className="projects-subtitle">
            A focused showcase of business applications, product concepts, and polished UI systems.
          </p>
        </div>

        <div className="projects-layout">
          <article className="featured-project-card">
            <div className="featured-project-image">
              <img src={selectedProject.img} alt={selectedProject.title} />
            </div>

            <div className="featured-project-content">
              <div className="featured-project-meta">
                <span className="project-pill">{selectedProject.category}</span>
                <span className="project-pill project-pill-outline">Case Study</span>
              </div>

              <h3>{selectedProject.title}</h3>
              <p className="project-description">{selectedProject.description}</p>

              <div className="project-tech-stack">
                {selectedProject.techStack.map((item) => (
                  <span key={item} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {selectedProject.liveDemo ? (
                  <a href={selectedProject.liveDemo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : null}
                {selectedProject.github === "private" ? (
                  <a href="#" className="private-link" aria-disabled="true">
                    GitHub Private
                  </a>
                ) : selectedProject.github && selectedProject.github !== "#" ? (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </article>

          <div className="project-list">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className={`project-list-item ${selectedProject.id === project.id ? "active" : ""}`}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <div className="project-list-thumb">
                  <img src={project.img} alt={project.title} />
                </div>

                <div className="project-list-copy">
                  <h4>{project.title}</h4>
                  <span>{project.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
