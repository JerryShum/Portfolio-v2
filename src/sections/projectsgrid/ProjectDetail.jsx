import { useParams } from "react-router-dom";

import projectsData from "../../projects.json";
import PageHeading from "../../ui/PageHeading";

function ProjectDetail() {
  const { projectName } = useParams();
  const project = projectsData.find(
    (project) => project.projectName === projectName,
  );

  if (!project) {
    throw new Error("Project not found!");
  }

  return (
    <>
      <PageHeading>{projectName}</PageHeading>
      <div className="flex gap-10"></div>
    </>
  );
}

export default ProjectDetail;
