import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectsData from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-20 lg:my-32 ">
      <SectionTitle nb="2" title="Projects" />
      <ul>
        {ProjectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} nb={index} />
        ))}
      </ul>
    </section>
  );
}
