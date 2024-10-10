import { Link } from "react-router-dom";

function Button({ children }) {
  return (
    <Link to={".."}>
      <button className="mt-10 rounded-full bg-slate-300 p-4 px-5 font-serif text-lg font-semibold text-black md:text-2xl md:font-medium xl:font-bold">
        {children}
      </button>
    </Link>
  );
}

export default Button;
