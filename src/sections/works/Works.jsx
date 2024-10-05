import { useState } from "react";
import ProjectCard from "../../ui/ProjectCard";
import projectsData from "../../projects.json";
import styles from "./Works.module.css";

function Works() {
  const [projectCount, setProjectCount] = useState(1);

  return (
    <section className={`mt-20 p-10`}>
      <h2 className="mb-20 text-center font-serif text-8xl font-bold tracking-wider">
        Selected Works
      </h2>
      <div className="flex">
        <h3 className="line basis-5/12 text-[300px] leading-tight tracking-tighter">
          0{projectCount}.
        </h3>
        <div className="no-scrollbar-x h-screen grow space-y-24 overflow-scroll">
          {projectsData.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
