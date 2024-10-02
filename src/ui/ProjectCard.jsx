function ProjectCard({
  projectName,
  category,
  skills,
  year,
  backgroundImage,
  projectImage,
}) {
  return (
    <div className="h-full w-full">
      <div className="relative w-full overflow-hidden rounded-md">
        <img
          src="/public/paniz-gm-iZhjxPCxOEI-unsplash.jpg"
          className="absolute h-screen w-full"
        />
        <img src="/public/Designer.png" className="absolute h-screen w-full" />
      </div>
    </div>
  );
}

export default ProjectCard;
