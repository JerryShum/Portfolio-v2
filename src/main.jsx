import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/Layout/AppLayout.jsx";
import Error404 from "./pages/Error404.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./sections/projectsgrid/ProjectDetail.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectID",
        element: <ProjectDetail />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
      <AnimatePresence mode="wait"></AnimatePresence>
    </ReactLenis>
  </StrictMode>,
);
