import { useState } from "react";
import "./MyWork.css";
import DSK from "../../assets/DSK.png";
import BTS from "../../assets/BTS.png";
import UrbanStep from "../../assets/UrbanStep.png";
import Calculator from "../../assets/Calculator.png";

const MyWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "ASP.NET Core", "React", "Javascript", "UIUX"];

  const projects = [
    { id: 1, title: "DSK", category: "ASP.NET Core", img: DSK },
    { id: 2, title: "BTS", category: "ASP.NET Core", img: BTS },
    { id: 3, title: "DSK", category: "React", img: DSK },
    { id: 4, title: "BTS", category: "React", img: BTS },
    { id: 5, title: "UrbanStep", category: "React", img: UrbanStep },
    { id: 6, title: "Calculator", category: "Javascript", img: Calculator },
    { id: 7, title: "Project Four", category: "UIUX", img: DSK },
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
