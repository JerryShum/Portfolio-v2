import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Button({ children }) {
  return (
    <Link to={".."}>
      <motion.button
        className="rounded-full bg-slate-300 p-3 px-4 font-serif text-base font-semibold text-black transition-all duration-200 hover:bg-slate-400 sm:p-4 sm:px-5 sm:text-lg md:text-xl md:font-medium lg:text-2xl xl:text-3xl xl:font-bold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    </Link>
  );
}

export default Button;
