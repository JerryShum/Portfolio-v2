import { useState } from "react";
import ProjectCard from "../../ui/ProjectCard";
import projectsData from "../../projects.json";

function Works() {
  const [projectCount, setProjectCount] = useState(1);

  return (
    <section className="p-10">
      <h2 className="mb-20 font-serif text-8xl font-bold tracking-wider">
        Selected Works
      </h2>
      <div className="flex">
        <h3 className="line basis-5/12 text-[300px] leading-tight tracking-tighter">
          0{projectCount}.
        </h3>
        <div className="h-screen grow space-y-24 overflow-scroll">
          {projectsData.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
