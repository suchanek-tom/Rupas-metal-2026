import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { navLinks } from "../../../constants/navigation";

interface MobileNavProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export const MobileNav = ({ isMenuOpen, onToggleMenu, onCloseMenu }: MobileNavProps) => {
  return (
    <>
      <button
        onClick={onToggleMenu}
        className="lg:hidden text-black hover:text-brand transition-colors p-2"
        aria-label="Toggle menu"
      >
        <Menu className="w-8 h-8" />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-60 lg:hidden"
              onClick={onCloseMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-70 overflow-y-auto lg:hidden shadow-2xl"
            >
              <div className="flex flex-col min-h-full">
                <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200 sticky top-0 bg-white z-10">
                  <Link to="/" onClick={onCloseMenu} className="text-2xl font-bold leading-tight">
                    <span className="text-black">RUPAS</span>
                    <br />
                    <span className="text-brand">METAL</span>
                  </Link>
                  <button
                    onClick={onCloseMenu}
                    className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                    aria-label="Close menu"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>

                <nav className="px-6 py-8 flex-1">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.to}
                          onClick={onCloseMenu}
                          className="block py-3 text-lg text-black hover:text-brand transition-colors font-medium"
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <LanguageSwitcher onLanguageChange={onCloseMenu} />
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};