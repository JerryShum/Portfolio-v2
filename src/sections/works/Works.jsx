import { useState } from "react";
import ProjectCard from "../../ui/ProjectCard";

function Works() {
  const [projectCount, setProjectCount] = useState(1);

  return (
    <section className="h-screen p-10">
      <h2 className="mb-20 font-serif text-8xl font-bold tracking-wider">
        Selected Works
      </h2>
      <div className="flex">
        <h3 className="line basis-5/12 text-[300px] leading-tight tracking-tighter">
          0{projectCount}.
        </h3>
        <div className="grow">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default Works;
