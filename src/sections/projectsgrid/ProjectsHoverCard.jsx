import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectsHoverCard({ project }) {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  return (
    <Link to={`/projects/${project.projectName}`}>
      <motion.div
        className="relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 lg:rounded-xl"
        whileHover="hovered"
        initial="initial"
        variants={{
          hovered: {
            scale: 1.01,
          },
          initial: {
            scale: 1, // Add initial scale variant for consistency
          },
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }} // Smoother transition for scale
      >
        <motion.img
          src={project.projectImage}
          alt={project.projectName}
          variants={{
            hovered: {
              opacity: 0.3,
            },
            initial: {
              opacity: 1,
            },
          }}
          transition={{ duration: DURATION, ease: "easeInOut" }} // Smoother transition for opacity
        />

        <motion.div
          className="absolute top-1/2 w-full -translate-y-1/2 text-center"
          variants={{
            initial: {
              opacity: 0,
              y: "100%",
            },
            hovered: {
              opacity: 1,
              y: "-100%",
            },
          }}
          transition={{ duration: DURATION, ease: "easeInOut" }} // Smoother transition for text fade-in
        >
          <span className="font-serif text-4xl font-semibold text-white">
            {project.projectName.split("").map((letter, index) => {
              return (
                <motion.span
                  className="inline-block"
                  key={index}
                  variants={{
                    initial: {
                      y: "100%",
                    },
                    hovered: {
                      y: "0%",
                    },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * index,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default ProjectsHoverCard;
