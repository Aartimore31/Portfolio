import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I’m a passionate developer dedicated to building responsive and beautiful web experiences.
          I specialize in MERN stack and love crafting modern UIs with React and Tailwind.
        </p>
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>🚀 Tech Stack</h3>
            <p>React, Node.js, MongoDB, Express</p>
          </div>
          <div className="highlight-card">
            <h3>🎯 Goals</h3>
            <p>Build impactful software, learn continuously, and grow as a developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
