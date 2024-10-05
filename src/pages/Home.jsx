import HeroPage from "../sections/hero/HeroPage";
import Navbar from "../ui/Navbar";
import Overlay from "../ui/Overlay";
import Works from "../sections/works/Works";
import About from "../sections/about/About";

function Home() {
  return (
    <>
      <Overlay />
      <Navbar />
      <HeroPage />
      <Works />
      <About />
    </>
  );
}

export default Home;
