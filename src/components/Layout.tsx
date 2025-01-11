import { Hero } from "./Hero";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
      {children}
    </>
  );
};

export default Layout;