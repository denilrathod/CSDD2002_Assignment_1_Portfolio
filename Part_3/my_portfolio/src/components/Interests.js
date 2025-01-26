import React from "react";
import "./Interests.css";

function Interests() {
  const interests = ["Reading", "Esports Enthusiast", "Sports Enthusiast"];

  return (
    <section className="interests" id="interests">
      <h2>Interests</h2>
      {interests.map((interest, index) => (
        <div className="interest-item" key={index}>{interest}</div>
      ))}
    </section>
  );
}

export default Interests;
