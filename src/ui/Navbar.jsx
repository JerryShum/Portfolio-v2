import { Link } from "react-router-dom";

function Navbar() {
   return (
      <nav className="flex justify-between items-center px-10 py-10">
         <Link to={"/"}>
            <img
               src="../../public/Logo 3.png"
               alt="logo"
               className="h-[60px]"
            />
         </Link>

         <ul className="flex gap-3 font-serif font-bold text-xl">
            <li>
               <Link>Works</Link>
            </li>
            <li>|</li>
            <li>
               <Link>About</Link>
            </li>
            <li>|</li>
            <li>
               <Link>Contact</Link>
            </li>
            <li>|</li>
         </ul>
      </nav>
   );
}

export default Navbar;
