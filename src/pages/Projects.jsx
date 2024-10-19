import ProjectsGrid from "../sections/projectsgrid/ProjectsGrid";
import FooterComponent from "../ui/FooterComponent";
import PageHeading from "../ui/PageHeading";

function Projects() {
  return (
    <>
      <PageHeading>Recent Projects</PageHeading>
      <ProjectsGrid />
      <FooterComponent />
    </>
  );
}

export default Projects;
