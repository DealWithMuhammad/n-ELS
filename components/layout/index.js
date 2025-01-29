import { useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import CallAction from "../call-action";
import Facebook from "../facebook";
import Footer from "../footer";
import Navbar from "../navbar";
import { TopBar } from "../navbar/topBar";

export default function Layout({ children, navigations = [], className }) {
  const { isMobile } = useScreenSize();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleClickMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <TopBar />
      <Navbar
        navigations={navigations}
        className={className}
        showMobileMenu={showMobileMenu}
        handleClickMobileMenu={handleClickMobileMenu}
      />
      <main className={isMobile && showMobileMenu ? `hidden` : ""}>
        {children}
      </main>
      <CallAction />
      <Facebook />
      <Footer />
    </>
  );
}
