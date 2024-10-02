import HeroPage from "../sections/hero/HeroPage";
import Navbar from "../ui/Navbar";
import Overlay from "../ui/Overlay";
import Works from "../sections/works/Works";

function Home() {
   return (
      <>
         <Overlay />
         <Navbar />
         <HeroPage />
         <Works />
      </>
   );
}

export default Home;
