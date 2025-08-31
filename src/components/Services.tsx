import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap, Bot, Database, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "Custom AI strategies tailored to your business goals and requirements."
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Full-stack development with modern technologies and best practices."
    },
    {
      icon: Bot,
      title: "AI Chatbots & Automation",
      description: "Intelligent chatbots and workflow automation to streamline operations."
    },
    {
      icon: Database,
      title: "Data Analytics & ML",
      description: "Transform your data into actionable insights with machine learning."
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs."
    },
    {
      icon: Shield,
      title: "Enterprise Solutions",
      description: "Scalable, secure solutions built for enterprise requirements."
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
            Comprehensive AI and software development services to transform your business
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