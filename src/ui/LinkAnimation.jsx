import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LinkAnimation({ children, destination, targetFlag }) {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <Link to={destination} target={targetFlag ? "_blank" : ""}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap"
      >
        <div>
          {children.split("").map((letter, index) => {
            return (
              <motion.span
                className="inline-block"
                key={index}
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-100%",
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
        </div>
        <div className="absolute inset-0">
          {children.split("").map((letter, index) => {
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
        </div>
      </motion.div>
    </Link>
  );
}

export default LinkAnimation;
