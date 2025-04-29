import React from "react";
import "../styles/Home.css";
import healthcarebg from "../assets/healthcarebg.jpg";

function Home() {
  return (
    <div
      className="home-bg"
      style={{ backgroundImage: `url(${healthcarebg})` }}
    >
      <section className="slide title-slide">
        <h1 className="typing-main">DiagnostiCode</h1>
        <p className="typing-sub">
          ICD-10 Code Conversion
        </p>
      </section>

      <section className="container skyblue-1 fade-in">
        <h2>Welcome to DiagnostiCode</h2>
        <p>
          The International Classification of Diseases, 10th Revision (ICD-10), is an internationally recognized system developed by the World Health Organization. It provides standardized coding for the classification of diseases, symptoms, and medical procedures.
        </p>
      </section>

      <section className="container skyblue-2 fade-in">
        <h2>System Objectives</h2>
        <ul>
          <li>Automate the process of converting diagnoses to ICD-10 codes</li>
          <li>Provide detailed descriptions of ICD-10 codes</li>
          <li>Track and analyze diagnostic occurrences on a monthly basis</li>
          <li>Reduce manual work and minimize errors</li>
          <li>Organize patient data to enhance overall care</li>
        </ul>
      </section>

      <section className="container skyblue-3 fade-in">
        <h2>Challenges We Are Addressing</h2>
        <p>The current manual process at the hospital presents several challenges:</p>
        <ul>
          <li>Time-consuming classification process</li>
          <li>Inconsistent or incorrect diagnostic records</li>
          <li>Lack of real-time diagnostic statistics</li>
        </ul>
        <p>DiagnostiCode addresses these challenges by providing an efficient, automated solution.</p>
      </section>

      <section className="container skyblue-4 fade-in">
        <h2>Why This System Matters</h2>
        <ul>
          <li><strong>For Healthcare Workers:</strong> The system ensures accurate ICD-10 code matching and streamlines workflows, making tasks faster and easier.</li>
          <li><strong>For Medical Records Staff:</strong> With less manual data entry, staff can focus more on reviewing and improving patient care.</li>
          <li><strong>For the Hospital:</strong> The system enables data-driven decisions and enhances the quality of services provided to patients.</li>
        </ul>
      </section>

      <section className="container skyblue-5 fade-in">
        <h2>Scope & Limitations</h2>
        <p>
          This project focuses on the ICD-10 coding and diagnostic counting processes within the medical records section of WUP Hospital. It does not extend to billing or treatment management systems.
        </p>
      </section>

      <section className="container skyblue-6 fade-in">
        <h2>Meet the Developers</h2>
        <ul>
          <li>Jose Louis S. Ortega</li>
          <li>Justine Cedric P. Ocampo</li>
          <li>Jacob M. Ignacio</li>
          <li>Ivan Reiner P. Panelo</li>
          <li>Jeremie L. Marquez</li>
        </ul>
        <p className="group">BSIT 3-1 | Wesleyan University-Philippines</p>
      </section>
    </div>
  );
}

export default Home;
