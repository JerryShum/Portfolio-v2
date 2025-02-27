import { useInView } from "react-intersection-observer";
import SkillPill from "./SkillPill";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

function ProjectCard({
  projectName = "Project Name",
  category = "Category",
  skills = ["HTML", "CSS", "React"],
  year = "2024",
  backgroundImage = "/paniz-gm-iZhjxPCxOEI-unsplash.jpg",
  projectImage = "/Designer.png",
  setProjectCount,
  projectIndex,
  id,
}) {
  const { ref, inView, entry } = useInView({ threshold: 0.66 });
  useEffect(() => {
    if (inView) setProjectCount((projectCount) => projectIndex);
  }, [inView, setProjectCount, projectIndex]);

  //! Custom Cursor
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  //! Lenis
  const lenis = useLenis();

  return (
    <div ref={ref} className="overflow-hidden">
      <Link
        className="cursor-none"
        to={`/projects/${id}`}
        onClick={() => {
          lenis?.scrollTo(0, { immediate: true });
        }}
      >
        <div
          className="relative mb-5 h-[50vh] w-full overflow-hidden rounded-lg lg:h-screen"
          ref={ref}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
          {isHovering && (
            //! CUSTOM CURSOR FOR HOVERING OVER IMAGE
            <motion.div
              className="custom-cursor pointer-events-none fixed z-50 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white mix-blend-difference"
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                transition: "transform 0.2s ease-out",
                willChange: "transform",
              }}
              animate={{
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-black"
                animate={{
                  scaleY: [1, 0.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </motion.svg>
            </motion.div>
          )}
          {/* Background Gradient */}
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-[linear-gradient(to_bottom_right,#111827_30%,#1e81b0_70%,#063970_100%)]" />

          {/* Overlay Image */}
          <img
            src={projectImage}
            alt="Project"
            className="absolute left-1/2 top-1/2 z-20 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg object-cover opacity-100 md:h-[90%] md:w-[90%]"
          />
        </div>
      </Link>
      <div className="flex flex-col items-start justify-start md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="font-serif text-xl font-semibold text-slate-400 md:text-2xl">
            {category}
          </h4>
          <h3 className="font-serif text-2xl font-bold text-neutral-300 md:text-4xl">
            {projectName}
          </h3>
        </div>
        <div className="flex max-w-[60%] flex-wrap gap-2 md:gap-4">
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
