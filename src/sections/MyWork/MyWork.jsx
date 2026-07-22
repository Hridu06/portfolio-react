import { useState } from "react";
import "./MyWork.css";
import DSK from "../../assets/DSK.png";
import BTS from "../../assets/BTS.png";
import UrbanStep from "../../assets/UrbanStep.png";
import HeroSection from "../../assets/Hero Section.jpg";
import UiUxPortfolio from "../../assets/uiux portfolio.png";
import Foodie from "../../assets/Foodie.jpg";

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const filters = ["All", "ASP.NET Core", "React", "UIUX"];

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
      title: "Foodie",
      category: "UIUX",
      img: Foodie,
      description: "A mobile-first food discovery concept focused on intuitive browsing, elegant content hierarchy, and a delightful user experience.",
      techStack: ["UIUX", "Figma", "Mobile Design", "Prototype"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 7,
      title: "Smiley",
      category: "UIUX",
      img: HeroSection,
      description: "A hero layout concept that emphasizes visual hierarchy, branding, and a strong first impression.",
      techStack: ["UIUX", "Figma", "Layout Design", "Wireframe"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 8,
      title: "UIUX Portfolio",
      category: "UIUX",
      img: UiUxPortfolio,
      description: "A portfolio-style UI direction focusing on clarity, modern card layouts, and concise visual storytelling.",
      techStack: ["UIUX", "Design Systems", "Responsive Layout", "Prototype"],
      liveDemo: "#",
      github: "#",
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects.filter((project, index, self) =>
        index === self.findIndex((p) => p.img === project.img)
      )
    : projects.filter((p) => p.category === activeFilter);

  const selectedProject =
    filteredProjects.find((project) => project.id === selectedProjectId) || filteredProjects[0];

  return (
    <section className="my-work" id="my-work">
      <div className="work-container">
        <div className="work-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="work-title">
            My <span className="text-gradient">Work</span> & <br />
            <span className="text-outline">Creations</span>
          </h2>

          <div className="work-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="work-grid">
          {filteredProjects.map((project) => (
            <div
              className={`work-card ${selectedProject?.id === project.id ? "selected" : ""}`}
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
            >
              <div className="work-img-wrapper">
                <img src={project.img} alt={project.title} />
                <div className="work-overlay">
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MyWork;
