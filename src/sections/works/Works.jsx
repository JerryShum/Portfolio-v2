import { useRef, useState } from "react";
import ProjectCard from "../../ui/ProjectCard";
import projectsData from "../../projects.json";
import { AnimatePresence, motion } from "framer-motion";

function Works() {
  const [projectCount, setProjectCount] = useState(1);

  return (
    <section className="mb-40 mt-20 p-4 sm:p-10 xl:px-40 2xl:px-60">
      <h2 className="mb-10 text-center font-serif text-4xl font-bold tracking-wider sm:mb-20 sm:text-6xl">
        Selected Works
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="sticky top-10 mb-10 hidden basis-full self-start text-6xl leading-tight tracking-tighter md:flex md:basis-4/12 md:text-[150px] lg:mb-0 lg:basis-5/12 lg:text-[250px] xl:text-[300px]">
          <span className="relative font-serif">0</span>
          <div className="relative">
            <AnimatePresence>
              <motion.span
                className="absolute font-serif"
                key={projectCount}
                initial={{ opacity: 0, y: "-20%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "20%" }}
                transition={{
                  duration: 0.75,
                  ease: [0.68, -0.55, 0.27, 1.55],
                }}
              >
                {projectCount}.
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="no-scrollbar-x grow space-y-12 rounded-lg sm:space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard
              {...project}
              key={index}
              setProjectCount={setProjectCount}
              projectIndex={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
