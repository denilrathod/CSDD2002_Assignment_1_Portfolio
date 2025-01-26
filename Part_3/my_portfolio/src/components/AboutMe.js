import React from "react";
import "./AboutMe.css";
import profilePic from "./img.svg"; // Adjust the path as needed

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="profile-pic">
        <img src={profilePic} alt="Profile Picture" />
      </div>
      <div className="description">
        <h2>About Me</h2>
        <p>I am a driven student passionate about technology and software development. I enjoy tackling challenges and solving problems while working collaboratively in teams. I'm constantly learning new skills and looking for opportunities to grow.</p>
        <div className="social-links">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;