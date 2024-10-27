import ProjectsGrid from "../sections/projectsgrid/ProjectsGrid";
import FooterComponent from "../ui/Layout/FooterComponent";
import PageHeading from "../ui/Layout/PageHeading";
import PageWrapper from "../ui/Layout/PageWrapper";

function Projects() {
  return (
    <PageWrapper>
      <PageHeading>Recent Projects</PageHeading>
      <ProjectsGrid />
      <FooterComponent />
    </PageWrapper>
  );
}

export default Projects;
