import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Droplets, Wind, Sparkles, Truck, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics and formal wear with expert care."
    },
    {
      icon: Droplets,
      title: "Laundry (Wash & Fold)",
      description: "Complete wash and fold services with premium detergents and fabric softeners."
    },
    {
      icon: Wind,
      title: "Pressing & Ironing",
      description: "Professional pressing and ironing services for crisp, wrinkle-free clothing."
    },
    {
      icon: Sparkles,
      title: "Stain Removal",
      description: "Expert stain removal techniques for even the toughest spots and stains."
    },
    {
      icon: Truck,
      title: "Pickup & Delivery",
      description: "Convenient pickup and delivery service right to your doorstep."
    },
    {
      icon: Shield,
      title: "Premium Care",
      description: "Special care for designer and delicate garments with quality guarantee."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional laundry and dry cleaning services delivered with care and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;