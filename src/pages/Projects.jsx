import ProjectsGrid from "../sections/projectsgrid/ProjectsGrid";
import FooterComponent from "../ui/Layout/FooterComponent";
import PageHeading from "../ui/Layout/PageHeading";

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
