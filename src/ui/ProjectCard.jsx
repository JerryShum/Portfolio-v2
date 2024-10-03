import SkillPill from "./SkillPill";

function ProjectCard({
  projectName = "Project Name",
  category = "Category",
  skills = ["HTML", "CSS", "React"],
  year = "2024",
  backgroundImage = "/public/paniz-gm-iZhjxPCxOEI-unsplash.jpg",
  projectImage = "/public/Designer.png",
}) {
  return (
    <div>
      <div className="relative mb-5 h-screen w-full overflow-hidden rounded-lg">
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute left-0 top-0 z-10 h-full w-full object-cover opacity-70"
        />
        {/* Overlay Image */}
        <img
          src={projectImage}
          alt="Project"
          className="absolute left-1/2 top-1/2 z-20 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg object-cover opacity-100"
        />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h4 className="font-serif text-2xl font-semibold text-slate-400">
            {category}
          </h4>
          <h3 className="font-serif text-4xl font-bold text-neutral-300">
            {projectName}
          </h3>
        </div>
        <div className="flex gap-4">
          {skills.map((skill) => (
            <SkillPill skill={skill} key={skill} />
          ))}
          <SkillPill year={year} key={projectName} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
