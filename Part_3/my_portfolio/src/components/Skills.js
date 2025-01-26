import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['PHP', 'JavaScript', 'SQL', 'Java', 'Python', 'C++'];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;