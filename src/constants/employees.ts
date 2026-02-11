import type { Employee } from "../types/employeeType";

export const employees: Employee[] = [
  {
    id: "emp-1",
    name: "Ing. Lukáš Pastuszek",
    position: "Jednatel společnosti",
    initials: "LP",
    phone: "+420 733 122 557",
    email: "Pastuszek@rupas-metal.cz",
  },
  {
    id: "emp-2",
    name: "Veronika Růčková",
    position: "Administrativa",
    initials: "VR",
    phone: "+420 773 304 281",
    email: "Ruckova@rupas-metal.cz",
  },
  {
    id: "emp-3",
    name: "Dominik Růčka",
    position: "Ředitel výroby",
    initials: "DR",
    phone: "+420 736 285 507",
    email: "Rucka@rupas-metal.cz",
  },
];
