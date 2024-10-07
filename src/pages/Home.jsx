import HeroPage from "../sections/hero/HeroPage";
import Navbar from "../ui/Navbar";
import Overlay from "../ui/Overlay";
import Works from "../sections/works/Works";
import About from "../sections/about/About";
import Footer from "../ui/Footer";

function Home() {
  return (
    <>
      <Overlay />
      <Navbar />
      <HeroPage />
      <Works />
      <About />
      <Footer />
    </>
  );
}

export default Home;
