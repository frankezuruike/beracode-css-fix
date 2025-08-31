import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Rocket } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "100+" },
    { icon: Award, label: "Projects Completed", value: "200+" },
    { icon: Rocket, label: "Years Experience", value: "5+" },
    { icon: CheckCircle, label: "Success Rate", value: "98%" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">BeraCode AI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a cutting-edge AI and software development company specializing in 
              transforming businesses through intelligent automation and custom solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of expert developers and AI specialists work together to deliver 
              innovative solutions that drive growth, efficiency, and competitive advantage 
              for our clients.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Custom AI Solutions",
                "Full-Stack Development",
                "24/7 Support & Maintenance",
                "Agile Development Process"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gradient-text">
              Learn More About Us
            </Button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;