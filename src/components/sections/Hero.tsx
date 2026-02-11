import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/images/img11.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-0 left-0 right-0 h-24 from-black/40 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 my-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Specialisté na strojirenskou technologii, svařování kovů a slitin
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Naše dodávky se nikdy nezpozdují. Váš požadovaný termín je pro nás nejvyšší priorita. V případě potřeby pro nás pracovní doba neplatí a jsme schopni pro splnění vašich požadavků udělat nemožné.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-brand hover:bg-brand-dark font-semibold text-lg"
            >
              <Link to="/about">
                O firmě
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}