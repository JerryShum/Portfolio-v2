import { Link } from "react-router-dom";
import LinkAnimation from "../LinkAnimation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <nav className="absolute top-0 z-30 flex w-full items-center justify-between px-4 py-4 md:px-10 md:py-10">
      <Link to={"/"}>
        <img src="/Logo 3.png" alt="logo" className="h-[40px] md:h-[60px]" />
      </Link>

      {/* Menu Button */}
      <button className="z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <motion.svg
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          className="h-6 w-6 md:h-8 md:w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </motion.svg>
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95"
          >
            <motion.ul className="flex flex-col items-center gap-8 font-serif text-2xl font-bold text-white md:text-4xl">
              {[
                { path: "/", text: "Home" },
                { path: "/projects", text: "Projects" },
                { path: "/about", text: "About" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-transform hover:scale-110"
                >
                  <LinkAnimation destination={item.path}>
                    {item.text}
                  </LinkAnimation>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
