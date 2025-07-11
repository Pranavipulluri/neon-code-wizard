import React, { useRef, useEffect, useState } from "react";
import "./ProjectRotator.css";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  label: string;
  labelColor?: string;
  link?: string;
}

interface ProjectRotatorProps {
  projects: Project[];
}

const ProjectRotator: React.FC<ProjectRotatorProps> = ({ projects }) => {
  const [angle, setAngle] = useState(0);
  const angleStep = 360 / projects.length;

  const rotate = (direction: "left" | "right") => {
    setAngle(prev =>
      direction === "left" ? prev + angleStep : prev - angleStep
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateZ(-400px) rotateY(${angle}deg)` }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="carousel-card"
            style={{ transform: `rotateY(${index * angleStep}deg) translateZ(400px)` }}
          >
            <div className="carousel-content">
              <span
                className="card-label"
                style={{ color: project.labelColor || "#f0f" }}
              >
                {project.label}
              </span>
              <h2 className="card-title">{project.title}</h2>
              <h4 className="card-subtitle">{project.subtitle}</h4>
              <p className="card-description">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  View Source ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={() => rotate("left")}>‹</button>
        <button onClick={() => rotate("right")}>›</button>
      </div>
    </div>
  );
};

export default ProjectRotator;
