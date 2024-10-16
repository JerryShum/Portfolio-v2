import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Button({ children }) {
  return (
    <Link to={".."}>
      <motion.button
        className="mt-10 rounded-full bg-slate-300 p-4 px-5 font-serif text-lg font-semibold text-black transition-all duration-200 hover:bg-slate-400 md:text-2xl md:font-medium xl:font-bold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    </Link>
  );
}

export default Button;
