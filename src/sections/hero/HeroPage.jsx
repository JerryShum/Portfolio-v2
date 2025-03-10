import styles from "./HeroPage.module.css";
import { motion } from "framer-motion";

function HeroPage() {
  return (
    <section
      className={`${styles.sectionbg} relative flex min-h-screen flex-col items-center justify-center gap-5 p-4 md:p-8`}
    >
      <h1 className="flex items-center justify-center font-serif text-5xl font-bold tracking-wider md:text-7xl lg:text-9xl">
        Jerry Shum
      </h1>
      <h2 className="text-center font-serif text-2xl font-semibold tracking-wider md:text-3xl lg:text-4xl">
        Step Inside My World of Technology and Creation
      </h2>

      <motion.img
        className="absolute bottom-12 md:bottom-16 lg:bottom-24"
        src="/icons/🦆 icon _chevron bottom_.svg"
        alt="Chevron Icon"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </section>
  );
}

export default HeroPage;
