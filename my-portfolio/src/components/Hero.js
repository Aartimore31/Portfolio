import React from 'react';
import './Hero.css';
import profileImg from './aartipic4.jpg'; // ✅ make sure this path is correct

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={profileImg} alt="Aarti More" className="hero-img" />
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Aarti More</span></h1>
          <p>A passionate Web Developer & Prompt Engineer</p>
          <a href="\AartiMore.pdf" download className="cv-button">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
