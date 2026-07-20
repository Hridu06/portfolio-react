import { useState } from "react";
import "./MyWork.css";

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "ASP.NET Core", "React", "Javascript", "UIUX"];

  const createPlaceholder = (label) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#e6fbf4"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="32" font-weight="700" fill="#007755">${label}</text></svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  // Placeholder projects
  const projects = [
    { id: 1, title: "DSK", category: "ASP.NET Core", img: createPlaceholder("DSK") },
    { id: 2, title: "BTS", category: "ASP.NET Core", img: createPlaceholder("BTS") },
    { id: 3, title: "DSK", category: "React", img: createPlaceholder("DSK") },
    { id: 4, title: "BTS", category: "React", img: createPlaceholder("BTS") },
    { id: 5, title: "UrbanStep", category: "React", img: createPlaceholder("UrbanStep") },
    { id: 6, title: "Calculator", category: "Javascript", img: createPlaceholder("Calculator") },
    { id: 7, title: "Project Four", category: "UIUX", img: createPlaceholder("UIUX") },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
            <div className="work-card" key={project.id}>
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
