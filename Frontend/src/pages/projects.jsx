import React from "react";
import "./project.css";
import foodOrderImg from "../image/projects/food-order.png";
import { FaReact, FaNode, FaDatabase, FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

function Projects() {
  const techStack = [
    { name: "react", icon: FaReact },
    { name: "react-router", icon: FaReact },
    { name: "bootstrap", icon: FaBootstrap },
    { name: "node.js", icon: FaNode },
    { name: "express.js", icon: SiExpress },
    { name: "mongodb", icon: FaDatabase },
    { name: "framer-motion", icon: TbBrandFramerMotion },
  ];
  return (
    <div className="projects-container">
      {/* Heading */}
      <div className="projects-header">
        <h1>
          Featured <span>Projects</span>
        </h1>
        <p>
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and responsiveness.
        </p>
      </div>

      {/* Project Card */}
      <div className="project-card">
        <div className="project-content-wrapper">
          {/* Image */}
          <img src={foodOrderImg} alt="Project" className="project-img" />

          {/* Content */}
          <div className="project-text">
            <h2>Food Ordering Website</h2>
            <p>
              A complete food ordering platform built with modern web
              technologies, ensuring smooth UI, fast performance, and responsive
              design.
            </p>
            <a
              href="https://github.com/PriyanshiGoyal-15/FoodOrder-MERN-PROJECT"
              target="_blank"
              className="ProjectRepo"
              style={{
                fontFamily: "Good Vibes, cursive",
                textDecoration: "none",
                color: "#00ffff", // neon cyan color
                padding: "0.5rem 1rem",
                border: "2px solid #224141ff",
                width: "25vh",
                boxShadow: "0 0 5px #286f6fff, 0 0 5px #216666ff",
                borderRadius: "2rem",
                transitionBehavior: "all 0.3s ease-in-out",
              }}
            >
              View Project Repo
            </a>

            <a
              href="https://www.linkedin.com/posts/priyanshi-goyal-397b682a2_mernstack-fullstackdevelopment-webdevelopment-activity-7395487966967754752-ndV9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkkgiMByaOYrRLOA1BQqoLR1Dp0IPe-Zz4"
              target="_blank"
              className="ProjectRepo"
              style={{
                fontFamily: "Good Vibes, cursive",
                textDecoration: "none",
                color: "#d7e6e6ff", // neon cyan color
                padding: "0.5rem 1rem",
                border: "2px solid #612829ff",
                boxShadow: "0 0 5px #751a31ff, 0 0 5px #6a0e16ff",
                width: "25vh",
                borderRadius: "2rem",
                transitionBehavior: "all 0.3s ease-in-out",
              }}
            >
              View Project Video
            </a>

            {/* Tech Stack */}
            <div className="tech-list">
              {techStack.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div className="tech-item" key={tech.name}>
                    <div className="tech-icon">
                      <IconComponent />
                    </div>
                    <span>{tech.name.replace("-", " ")}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2nd project */}
    </div>
  );
}

export default Projects;
