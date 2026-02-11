import { useState } from "react";
import { Link } from "react-router-dom";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* todo: přidat logo obrázku */}
            <Link to="/" className="flex items-center gap-3">
              <div className="text-2xl font-bold leading-tight">
                <span className="text-black">RUPAS</span>
                <br />
                <span className="text-brand">METAL</span>
              </div>
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
