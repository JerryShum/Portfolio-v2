import { useInView } from "react-intersection-observer";
import SkillPill from "./SkillPill";
import { useEffect } from "react";

function ProjectCard({
  projectName = "Project Name",
  category = "Category",
  skills = ["HTML", "CSS", "React"],
  year = "2024",
  backgroundImage = "/paniz-gm-iZhjxPCxOEI-unsplash.jpg",
  projectImage = "/Designer.png",
  setProjectCount,
  projectIndex,
}) {
  const { ref, inView, entry } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setProjectCount((projectCount) => projectIndex);
  }, [inView, setProjectCount, projectIndex]);

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="relative mb-5 h-[50vh] w-full overflow-hidden rounded-lg lg:h-screen">
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute left-0 top-0 z-10 h-full w-full object-cover opacity-100 brightness-75"
        />
        {/* Overlay Image */}
        <img
          src={projectImage}
          alt="Project"
          className="absolute left-1/2 top-1/2 z-20 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg object-cover opacity-100 md:h-[90%] md:w-[90%]"
        />
      </div>
      <div className="flex flex-col items-end justify-start md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="font-serif text-xl font-semibold text-slate-400 md:text-2xl">
            {category}
          </h4>
          <h3 className="font-serif text-2xl font-bold text-neutral-300 md:text-4xl">
            {projectName}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4">
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
