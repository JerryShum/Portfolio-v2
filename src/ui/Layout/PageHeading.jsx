import { motion } from "framer-motion";

function PageHeading({ children }) {
  return (
    <div className="bg-gradient-to-b from-blue-900 from-10% to-black px-4 py-10 md:px-20 md:py-16 lg:px-40 lg:py-20">
      <motion.h1
        className="text-center font-serif text-2xl font-semibold capitalize md:text-4xl xl:text-6xl"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        {children}
      </motion.h1>
    </div>
  );
}

export default PageHeading;
