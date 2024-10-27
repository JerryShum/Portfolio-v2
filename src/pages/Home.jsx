import HeroPage from "../sections/hero/HeroPage.jsx";

import Works from "../sections/works/Works.jsx";
import About from "../sections/about/About.jsx";
import FooterComponent from "../ui/Layout/FooterComponent.jsx";

import { useEffect } from "react";
import PageWrapper from "../ui/Layout/PageWrapper.jsx";

// Function to disable scrolling
const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

// Function to enable scrolling
const enableScroll = () => {
  document.body.style.overflow = "auto";
};

function Home() {
  useEffect(() => {
    disableScroll();

    // Cleanup function to enable scrolling after the animation ends
    return () => enableScroll();
  }, []);
  return (
    <PageWrapper>
      <HeroPage />
      <About />
      <Works />
      <FooterComponent />
    </PageWrapper>
  );
}

export default Home;
