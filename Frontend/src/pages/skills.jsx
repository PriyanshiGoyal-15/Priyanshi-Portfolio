import React, { useState } from "react";
import "./skill.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SkillsData from "../pages/skillsData";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(SkillsData.map((i) => i.category))];

  const filteredItems =
    selectedCategory === "All"
      ? SkillsData
      : SkillsData.filter((i) => i.category === selectedCategory);

  return (
    <div className="container">
      {/* background */}
      <div className="background">
        <div className="lines-wrapper"></div>

        {/* skills content */}
        <div className="skills-layout">
          {/* LEFT SIDE VERTICAL CATEGORIES */}
          <div className="categories-vertical">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${
                  selectedCategory === cat ? "active-cat" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="skills-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="skill-card">
                <div className="skill-logo-box">
                  <img src={item.image} alt={item.name} />
                </div>
                <p className="skill-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
