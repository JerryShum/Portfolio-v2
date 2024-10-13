import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 z-30 flex w-full items-center justify-between px-4 py-4 md:px-10 md:py-10">
      <Link to={"/"}>
        <img src="/Logo 3.png" alt="logo" className="h-[40px] md:h-[60px]" />
      </Link>

      <ul className="flex flex-col gap-3 font-serif text-lg font-bold md:flex-row md:text-xl">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hidden md:block">|</li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="hidden md:block">|</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
