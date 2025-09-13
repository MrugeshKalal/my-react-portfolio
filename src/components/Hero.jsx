import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Mrugesh 👋</h1>
        <p>A passionate developer skilled in React, AWS, DevOps, and Cloud Engineering 🚀</p>
        <div className="buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
