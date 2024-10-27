import ProjectsHoverCard from "./ProjectsHoverCard";
import projectsData from "../../projects.json";
import { motion } from "framer-motion";

function ProjectsGrid() {
  return (
    <motion.div
      className="my-10 grid grid-rows-2 gap-3 px-5 lg:my-20 lg:grid-cols-2 lg:gap-5 lg:px-20 xl:px-60"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {projectsData.map((project, index) => (
        <ProjectsHoverCard project={project} key={index} />
      ))}
    </motion.div>
  );
}

export default ProjectsGrid;
