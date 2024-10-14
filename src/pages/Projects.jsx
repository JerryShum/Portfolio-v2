import ProjectsGrid from "../sections/projectsgrid/ProjectsGrid";
import PageHeading from "../ui/PageHeading";
import projectsData from "../../projects.json";

function Projects() {
  return (
    <>
      <PageHeading>Recent Projects</PageHeading>
      <ProjectsGrid />
    </>
  );
}

export default Projects;
