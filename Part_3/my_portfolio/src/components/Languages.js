import React from "react";
import "./Languages.css";

function Languages() {
  const languages = ["English", "Hindi", "Marathi", "Gujarati"];

  return (
    <section className="languages" id="languages">
      <h2>Languages</h2>
      {languages.map((language, index) => (
        <div className="language-item" key={index}>{language}</div>
      ))}
    </section>
  );
}

export default Languages;
