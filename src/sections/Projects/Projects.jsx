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
      description: "A business-focused web platform built to present structured data and streamline user workflows.",
      techStack: ["ASP.NET Core", "C#", "SQL", "Bootstrap"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "BTS",
      category: "ASP.NET Core",
      img: BTS,
      description: "A clean and functional internal dashboard experience built for performance and task visibility.",
      techStack: ["ASP.NET Core", "C#", "Entity Framework", "HTML/CSS"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "DSK",
      category: "React",
      img: DSK,
      description: "A responsive React interface focused on smooth navigation and a modern portfolio-style experience.",
      techStack: ["React", "JavaScript", "CSS Modules", "Vite"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "BTS",
      category: "React",
      img: BTS,
      description: "A polished React-based product view designed with reusable UI components and modern layout patterns.",
      techStack: ["React", "JavaScript", "Responsive Design", "UI Components"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 5,
      title: "UrbanStep",
      category: "React",
      img: UrbanStep,
      description: "A sleek landing and product showcase concept centered on clean storytelling and conversion flow.",
      techStack: ["React", "JavaScript", "CSS", "UX Strategy"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Hero Section",
      category: "UIUX",
      img: HeroSection,
      description: "A hero layout concept that emphasizes visual hierarchy, branding, and a strong first impression.",
      techStack: ["UIUX", "Figma", "Layout Design", "Wireframe"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 7,
      title: "UIUX Portfolio",
      category: "UIUX",
      img: UiUxPortfolio,
      description: "A portfolio-style UI direction focusing on clarity, modern card layouts, and concise visual storytelling.",
      techStack: ["UIUX", "Design Systems", "Responsive Layout", "Prototype"],
      liveDemo: "#",
      github: "#",
    },
  ];

  const [selectedProject] = projects;

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">Projects</span>
          <h2 className="projects-title">
            Project <span className="text-gradient">Tour</span>
          </h2>
        </div>

        <div className="project-tour">
          <div className="project-tour-header">
            <h3>{selectedProject.title}</h3>
          </div>

          <div className="project-tour-content">
            <div className="project-tour-image">
              <img src={selectedProject.img} alt={selectedProject.title} />
            </div>

            <div className="project-tour-details">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
