import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Nitya from './images/509.jpg';
import Arunodaya from './images/50B.jpg';
import Dinesh from './images/50X.jpg';
import Popup from './Popup';

const Projects = () => {
  const projectList = [
    {
      title: "Name",
      description: "Nitya-20BD1A0509",
      image: Nitya,
    },
    {
      title: "Name",
      description: "Arunodaya-20BD1A050B",
      image: Arunodaya,
    },
    {
      title: "Name",
      description: 'Dinesh-20BD1A050X',
      image: Dinesh,
    },
    {
      title: "Name",
      description: 'Dinesh-20BD1A050X',
      image: Dinesh,
    },
    {
      title: "Name",
      description: 'Nitya-20BD1A0509',
      image: Nitya,
    },
    {
      title: "Name",
      description: 'Arunodaya-20BD1A050B',
      image: Arunodaya,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      {projectList.map((project, index) => (
        <div key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
          />
          <button onClick={() => handleDetailsClick(project)}>View Details</button>
        </div>
      ))}
      {selectedProject && (
        <Popup
          title={selectedProject.title}
          description={selectedProject.description}
          image={selectedProject.image}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Projects;
