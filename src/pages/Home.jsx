import HeroPage from "../sections/hero/HeroPage.jsx";
import Navbar from "../ui/Navbar.jsx";
import Overlay from "../ui/Overlay.jsx";
import Works from "../sections/works/Works.jsx";
import About from "../sections/about/About.jsx";
import FooterComponent from "../ui/FooterComponent.jsx";
import { motion } from "framer-motion";
import { useEffect } from "react";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={enableScroll} // Re-enable scrolling after animation completes
    >
      <Overlay />
      <Navbar />
      <HeroPage />
      <Works />
      <About />
      <FooterComponent />
    </motion.div>
  );
}

export default Home;
