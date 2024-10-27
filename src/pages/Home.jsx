import HeroPage from "../sections/hero/HeroPage.jsx";

import Works from "../sections/works/Works.jsx";
import About from "../sections/about/About.jsx";
import FooterComponent from "../ui/Layout/FooterComponent.jsx";

import { useEffect } from "react";
import PageWrapper from "../ui/Layout/PageWrapper.jsx";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Home() {
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
