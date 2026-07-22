import { useState } from "react";
import "./Projects.css";
import DSK from "../../assets/DSK.png";
import BTS from "../../assets/BTS.png";
import UrbanStep from "../../assets/UrbanStep.png";
import HeroSection from "../../assets/Hero Section.jpg";
import UiUxPortfolio from "../../assets/uiux portfolio.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DSK",
      category: "ASP.NET Core",
      img: DSK,
      description: "A professional enterprise-style web platform built to structure business workflows and present key information clearly.",
      techStack: ["ASP.NET Core", "C#", "SQL", "Bootstrap"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "BTS",
      category: "ASP.NET Core",
      img: BTS,
      description: "A structured internal dashboard concept focused on visibility, usability, and streamlined operational performance.",
      techStack: ["ASP.NET Core", "C#", "Entity Framework", "HTML/CSS"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "UrbanStep",
      category: "React",
      img: UrbanStep,
      description: "A modern landing page concept designed to communicate product value with clean storytelling and polished interface hierarchy.",
      techStack: ["React", "JavaScript", "CSS", "UX Strategy"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Hero Section",
      category: "UIUX",
      img: HeroSection,
      description: "A hero section design aimed at clear brand presentation, visual hierarchy, and stronger first impressions.",
      techStack: ["UIUX", "Figma", "Layout Design", "Wireframe"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 5,
      title: "UIUX Portfolio",
      category: "UIUX",
      img: UiUxPortfolio,
      description: "A clean UI portfolio concept focusing on polished typography, balanced spacing, and professional card-based layouts.",
      techStack: ["UIUX", "Design Systems", "Responsive Layout", "Prototype"],
      liveDemo: "#",
      github: "#",
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
                <a href={selectedProject.liveDemo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={selectedProject.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
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
