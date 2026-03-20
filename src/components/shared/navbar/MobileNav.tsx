import { Link, NavLink } from "react-router-dom";
import { Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Button } from "../../ui/button";
import { navLinks } from "../../../constants/navigation";

interface MobileNavProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

export const MobileNav = ({ isMenuOpen, onToggleMenu, onCloseMenu }: MobileNavProps) => {
  const { t } = useTranslation();
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
                        <NavLink
                          to={link.to}
                          onClick={onCloseMenu}
                          className={({ isActive }) =>
                            `block py-3 text-lg transition-colors font-medium ${
                              isActive ? "text-brand" : "text-black hover:text-brand"
                            }`
                          }
                        >
                          {t(link.i18nKey)}
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                    <a
                      href="https://www.contranet-we.cz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onCloseMenu}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full gap-2 text-black border-gray-300 hover:bg-brand hover:text-white hover:border-brand transition-all"
                      >
                        {t("nav.contranet")}
                        <img src="images/contra-net-transparent-black.png" alt="ContraNet Logo" className="h-6" />
                      </Button>
                    </a>
                    <div className="pt-2">
                      <LanguageSwitcher onLanguageChange={onCloseMenu} />
                    </div>
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