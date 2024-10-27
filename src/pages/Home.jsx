import HeroPage from "../sections/hero/HeroPage.jsx";

import Works from "../sections/works/Works.jsx";
import About from "../sections/about/About.jsx";
import FooterComponent from "../ui/Layout/FooterComponent.jsx";

function Home() {
  return (
    <>
      <HeroPage />
      <About />
      <Works />
      <FooterComponent />
    </>
  );
}

export default Home;
