import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Overlay from "./Overlay";

function AppLayout() {
  return (
    <>
      <Overlay />
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
