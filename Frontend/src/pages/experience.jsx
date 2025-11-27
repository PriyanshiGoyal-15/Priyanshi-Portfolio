import React from "react";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      role: " MERN Web Development Intern",
      company: "Edutantr",
      duration: "Aug 2025 - Oct 2025",
      location: "Bangalore, Karnataka",
      points: [
        "Gained confidence and valuable industry-level knowledge from mentors.",
        "Developed a restaurant online ordering system using full-stack technologies.",
        "Improved communication and teamwork skills.",
      ],
    },
    {
      role: "Frontend Development Intern",
      company: "Bharat Intern",
      duration: "Jan 2025 - Mar 2025",
      location: "Virtual",
      points: [
        "Built a personal portfolio and Netflix clone using React.js.",
        "Enhanced self-learning, problem-solving, and project management skills.",
        "Learned full workflow of designing, developing & deploying web apps.",
      ],
    },
  ];

  return (
    <div className="experience-section my-4">
      <h2 className="exp-title">Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card glass-card fadeInUp">
              <h3>{exp.role}</h3>
              <h5 className="company">
                {exp.company} • <span>{exp.duration}</span>
              </h5>
              <p className="location">{exp.location}</p>
              <ul>
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
