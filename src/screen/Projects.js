import React from "react";
import "../styles/Projects.css";
import healthcarebg from "../assets/healthcarebg.jpg";
import image1 from "../assets/Gameplay.png";
import image2 from "../assets/ContactsScreen.jpg";
import image3 from "../assets/StartScreen.jpg"

function Projects() {
  const projectList = [
    {
      title: "Python Game",
      images: [image1],
      descriptions: [
        "This is a basic Python game that Sir Rodel taught us.",
        "It includes keypress handling and simple scoring logic.",
      ],
    },
    {
      title: "React Native Apps",
      images: [image2],
      descriptions: [
        "A React Native mobile app taught by Sir Oanes.",
        "This app uses Flatlist and displays the data inserted.",
      ],
    },
    {
      title: "Android Studio",
      images: [image3],
      descriptions: [
        "Android Studio App taught by Sir Arnold.",
        "We made an app using Firebase database and Android Studio.",
      ],
    },
  ];

  return (
    <div
      className="projects-bg"
      style={{
        backgroundImage: `url(${healthcarebg})`,
      }}
    >
      <div className="projects">
        <h1>Our Projects</h1>
        <p>Here are some of our latest projects throughout our years as IT students.</p>

        <div className="alt-project-layout">
          {projectList.map((project, index) => (
            <div className={`project-card-3d ${index % 2 === 0 ? "left" : "right"}`} key={index}>
              <div className="card-image">
                {project.images.map((img, i) => (
                  <img src={img} key={i} alt={`Project ${index} Img ${i}`} />
                ))}
              </div>
              <div className="card-text">
                <h3>{project.title}</h3>
                {project.descriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
