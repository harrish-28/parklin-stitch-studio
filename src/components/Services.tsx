import { Scissors, Shirt, Palette, Users, Clock, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Custom Stitching",
      description: "Bespoke garments tailored to your exact measurements and style preferences."
    },
    {
      icon: Shirt,
      title: "Alterations",
      description: "Professional alterations to ensure your existing garments fit perfectly."
    },
    {
      icon: Palette,
      title: "Ready-made Garments",
      description: "Beautiful ready-to-wear pieces crafted with premium fabrics and attention to detail."
    },
    {
      icon: Users,
      title: "Wedding Attire",
      description: "Special occasion wear including bridal and groom outfits for your big day."
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Rush orders available for urgent alterations and custom pieces."
    },
    {
      icon: Star,
      title: "Premium Fabrics",
      description: "Access to high-quality fabrics and materials for luxury garment creation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From custom creations to expert alterations, we offer comprehensive garment services 
            to meet all your fashion needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover-lift group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary-light transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6">
                <span className="text-secondary font-semibold hover:text-secondary-dark transition-colors duration-300 cursor-pointer">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find exactly what you're looking for? We specialize in custom solutions 
              tailored to your unique requirements.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-glow">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;