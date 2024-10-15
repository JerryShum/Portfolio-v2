import { motion } from "framer-motion";

function ProjectsHoverCard({ project }) {
  return (
    <motion.div className="relative overflow-hidden rounded-lg lg:rounded-xl">
      <img
        src={project.projectImage}
        className="transition-all duration-300 hover:brightness-75"
      />
      <div className="absolute top-[10%] w-full bg-black bg-opacity-70 py-2 text-center font-serif text-6xl tracking-tighter">
        <motion.div>
          <span>{project.projectName}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectsHoverCard;
