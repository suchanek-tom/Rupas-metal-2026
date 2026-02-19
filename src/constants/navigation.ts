import type { NavLink } from "../types/navigationTypes";

export const navLinks: NavLink[] = [
  { to: "/",               label: "O firmě",         i18nKey: "nav.about" },
  { to: "/production",     label: "Výroba",           i18nKey: "nav.production" },
  { to: "/equipment",      label: "Naše vybavení",   i18nKey: "nav.equipment" },
  { to: "/certifications", label: "Certifikace",      i18nKey: "nav.certifications" },
  // { to: "/kariera", label: "Kariéra", i18nKey: "nav.career" },
  { to: "/galerie",        label: "Galerie",           i18nKey: "nav.gallery" },
  { to: "/reference",      label: "Reference",         i18nKey: "nav.references" },
  { to: "/contact",        label: "Kontakt",           i18nKey: "nav.contact" },
];
