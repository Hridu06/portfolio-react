import { useState } from "react";
import "./MyWork.css";

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "ASP.NET Core", "React", "Javascript", "HTML&CSS", "UIUX"];

  // Placeholder projects
  const projects = [
    { id: 1, title: "Project One", category: "React", img: "https://via.placeholder.com/400x300" },
    { id: 2, title: "Project Two", category: "ASP.NET Core", img: "https://via.placeholder.com/400x300" },
    { id: 3, title: "Project Three", category: "Javascript", img: "https://via.placeholder.com/400x300" },
    { id: 4, title: "Project Four", category: "UIUX", img: "https://via.placeholder.com/400x300" },
    { id: 5, title: "Project Five", category: "HTML&CSS", img: "https://via.placeholder.com/400x300" },
    { id: 6, title: "Project Six", category: "React", img: "https://via.placeholder.com/400x300" },
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
