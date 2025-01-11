import { Hero } from "./Hero";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? (
        <Hero />
      ) : (
        <div className="relative h-20">
          <Hero />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Layout;