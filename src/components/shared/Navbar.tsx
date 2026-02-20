import { useState } from "react";
import { Link } from "react-router-dom";
import logoRupasMetal from "@/assets/images/logo_rupas_metal.jpg";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-3 py-1">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logoRupasMetal} alt="Rupas Metal logo" className="h-24 w-auto" />
            </Link>

            <DesktopNav />
            <MobileNav
              isMenuOpen={isMenuOpen}
              onToggleMenu={toggleMenu}
              onCloseMenu={closeMenu}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
