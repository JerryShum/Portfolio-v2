import ProjectsHoverCard from "./ProjectsHoverCard";
import projectsData from "../../projects.json";

function ProjectsGrid() {
  return (
    <div className="my-10 grid grid-rows-2 gap-3 px-5 lg:grid-cols-2 lg:gap-5 lg:px-60">
      {projectsData.map((project, index) => (
        <ProjectsHoverCard project={project} key={index} />
      ))}
    </div>
  );
}

export default ProjectsGrid;
