import { Factory, Settings2, Flame, Layers, Boxes, Trash2, Package, Wrench } from "lucide-react";

export const productions = [
  { icon: Factory,   labelKey: "productions.structures",  label: "Výroba nosných konstrukcí" },
  { icon: Settings2, labelKey: "productions.agricultural", label: "Výroba zemědělských strojů" },
  { icon: Flame,     labelKey: "productions.energy",       label: "Výroba energetických částí – výměníky, trubkovnice, potrubí" },
  { icon: Layers,    labelKey: "productions.parts",        label: "Výroba strojních součástí" },
  { icon: Boxes,     labelKey: "productions.gearboxes",    label: "Výroba převodových skříní" },
  { icon: Trash2,    labelKey: "productions.buckets",      label: "Výroba výklopných lžic, lopat, hardoxových drtičů a násypek" },
  { icon: Package,   labelKey: "productions.assembly",     label: "Výroba a montáž technologických celků" },
  { icon: Wrench,    labelKey: "productions.disassembly",  label: "Montáž a demontáž dílů" },
];