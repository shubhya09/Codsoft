import "react";
import "./styles.css";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "An online platform for seamless shopping with product search, filters, and a cart system.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website to showcase my projects, skills, and contact information.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A React-based weather app displaying real-time weather updates using an API.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
    link: "https://example.com/project3",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
