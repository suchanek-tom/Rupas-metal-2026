import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { employees } from "../../constants/employees";

export const TeamSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Náš tým</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <Card key={employee.id}>
            <CardContent className="text-center">
              <div className="mb-4">
                <div className="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-brand">
                    {employee.initials}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {employee.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{employee.position}</p>
              </div>
              <div className="space-y-2 text-sm">
                <a 
                  href={`tel:${employee.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-brand transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {employee.phone}
                </a>
                <a 
                  href={`mailto:${employee.email}`}
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-brand transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {employee.email}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
