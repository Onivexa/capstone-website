import React from "react";
import "../styles/About.css"; 
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import fbLogo from "../assets/facebook-logo.png";
import healthcarebg from "../assets/healthcarebg.jpg";

function About() {
  return (
    <div
      className="about-bg"
      style={{
        backgroundImage: `url(${healthcarebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <section id="about" className="about-section">
        <h2>About Us</h2>

        <div className="team-member right">
          <img src={profile1} alt="Justine Cedric P. Ocampo" className="profile-img" />
          <div className="team-info">
            <h3>Justine Cedric P. Ocampo</h3>
            <p>Front-End Developer & UI/UX Designer</p>
            <a href="https://www.facebook.com/jc.ocmpo18/" target="_blank" rel="noopener noreferrer" className="fb-link">
              <img src={fbLogo} alt="Facebook" className="fb-logo" />
            </a>
          </div>
        </div>

        <div className="team-member right">
          <div className="team-info">
            <h3>Jose Louis S. Ortega</h3>
            <p>Back-End Developer & Database Architect</p>
            <a href="https://www.facebook.com/joselouis.ortega" target="_blank" rel="noopener noreferrer" className="fb-link">
              <img src={fbLogo} alt="Facebook" className="fb-logo" />
            </a>
          </div>
          <img src={profile2} alt="Jose Louis S. Ortega" className="profile-img" />
        </div>

        <div className="team-member right">
          <img src={profile3} alt="Ivan Reiner P. Panelo" className="profile-img" />
          <div className="team-info">
            <h3>Ivan Reiner P. Panelo</h3>
            <p>Walang Ambag ne isang kusing</p>
            <a href="https://www.facebook.com/ivanreiner.panelo" target="_blank" rel="noopener noreferrer" className="fb-link">
              <img src={fbLogo} alt="Facebook" className="fb-logo" />
            </a>
          </div>
        </div>

        <div className="team-member right">
          <div className="team-info">
            <h3>Aron Jacob M. Ignacio</h3>
            <p>Pogi Lang</p>
            <a href="https://www.facebook.com/http.eyrn" target="_blank" rel="noopener noreferrer" className="fb-link">
              <img src={fbLogo} alt="Facebook" className="fb-logo" />
            </a>
          </div>
          <img src={profile4} alt="Aron Jacob M. Ignacio" className="profile-img" />
        </div>
      </section>
    </div>
  );
}

export default About;
