function ProjectsHoverCard({ project }) {
  return (
    <div className="overflow-hidden rounded-lg lg:rounded-xl">
      <img src={project.projectImage} />
    </div>
  );
}

export default ProjectsHoverCard;
