import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projectListItems = projects.map((project) => (
    <ProjectItem key={project.id} project={project} name={project.name} about={project.about} technologies={project.technologies}/>
  ))

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectListItems}</div>
    </div>
  );
}

export default ProjectList;
