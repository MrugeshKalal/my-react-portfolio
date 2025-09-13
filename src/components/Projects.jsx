import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Hospital Management System</h3>
          <p>A web app for managing hospital data and patients.</p>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built with React and responsive design.</p>
        </div>
      </div>
    </section>
  );
}
