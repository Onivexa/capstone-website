import React from "react";
import "../styles/Features.css";
import healthcarebg from "../assets/healthcarebg.jpg";
import featureImage1 from "../assets/feature1.png";
import featureImage2 from "../assets/feature3.png";
import featureImage3 from "../assets/feature2.png";

function Features() {
  return (
    <div
      className="features-bg"
      style={{ backgroundImage: `url(${healthcarebg})` }}
    >
      <section className="slide title-slide">
        <h1>Key Features of DiagnostiCode</h1>
        <p className="subtitle">
          Explore the powerful functionalities of our ICD-10 Conversion System
        </p>
      </section>

      <section className="slide">
        <div className="feature-row">
          <div className="feature-card">
            <img src={featureImage1} alt="ICD-10 Code Conversion" />
            <p>
              Automatically converts patient diagnoses into ICD-10 codes with accuracy and speed.
            </p>
          </div>
          <div className="feature-card">
            <img src={featureImage2} alt="Description Retrieval" />
            <p>
              Retrieves detailed ICD-10 descriptions to improve diagnostic clarity for professionals.
            </p>
          </div>
          <div className="feature-card">
            <img src={featureImage3} alt="Monthly Diagnostic Counter" />
            <p>
              Tracks monthly diagnostic frequency for actionable insights in hospital management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
