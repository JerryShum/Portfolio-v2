import { Link, useLocation } from "react-router-dom";
import LinkAnimation from "./LinkAnimation";

function Navbar() {
  const location = useLocation();

  return (
    // <nav className="absolute top-0 z-30 flex w-full items-center justify-between px-4 py-4 md:px-10 md:py-10">
    //   <Link to={"/"}>
    //     <img src="/Logo 3.png" alt="logo" className="h-[40px] md:h-[60px]" />
    //   </Link>

    //   <ul className="flex flex-col gap-3 font-serif text-lg font-bold md:text-xl lg:flex-row">
    //     <li>
    //       {location.pathname === "/projects" ? (
    //         <Link to="/">Home</Link>
    //       ) : (
    //         <Link to="/projects">Projects</Link>
    //       )}
    //     </li>
    //     <li className="hidden lg:block">|</li>
    //     <li>
    //       {location.pathname === "/about" ? (
    //         <Link to="/">Home</Link>
    //       ) : (
    //         <Link to="/about">About</Link>
    //       )}
    //     </li>
    //     <li className="hidden lg:block">|</li>
    //     <li>
    //       {location.pathname === "/contact" ? (
    //         <Link to="/">Home</Link>
    //       ) : (
    //         <Link to="/contact">Contact</Link>
    //       )}
    //     </li>
    //   </ul>
    // </nav>
    <nav className="absolute top-0 z-30 flex w-full items-center justify-between px-4 py-4 md:px-10 md:py-10">
      <Link to={"/"}>
        <img src="/Logo 3.png" alt="logo" className="h-[40px] md:h-[60px]" />
      </Link>

      <ul className="flex flex-col gap-3 font-serif text-lg font-bold md:text-xl lg:flex-row">
        <li>
          {location.pathname === "/projects" ? (
            <LinkAnimation destination="/">Home</LinkAnimation>
          ) : (
            <LinkAnimation destination={"/projects"}>Projects</LinkAnimation>
          )}
        </li>
        <li className="hidden lg:block">|</li>
        <li>
          {" "}
          {location.pathname === "/projects" ? (
            <LinkAnimation destination="/">Home</LinkAnimation>
          ) : (
            <LinkAnimation destination={"/about"}>About</LinkAnimation>
          )}
        </li>
        <li className="hidden lg:block">|</li>
        <li>
          {" "}
          {location.pathname === "/projects" ? (
            <LinkAnimation destination="/">Home</LinkAnimation>
          ) : (
            <LinkAnimation destination={"/contact"}>Contact</LinkAnimation>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
