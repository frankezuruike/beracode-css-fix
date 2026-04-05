import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shirt, Sparkles, Truck, Clock, Shield, Star } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Pickup & Delivery", desc: "We come to you — no trips to the laundromat." },
  { icon: Clock, title: "24-Hour Turnaround", desc: "Get your garments back fresh and fast." },
  { icon: Shield, title: "Garment Care Guarantee", desc: "Expert handling for your finest fabrics." },
  { icon: Star, title: "Unlimited Packages", desc: "Stop counting clothes. Wash without limits." },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TheUpperRoom Laundry — The Luxury of Clean</title>
        <meta name="description" content="Premium dry cleaning and laundry services in Lifecamp, Abuja. Unlimited monthly packages, free pickup & delivery. 10% off your first wash!" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-[0.03]" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              10% OFF Your First Wash
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              The Luxury of{" "}
              <span className="gradient-text">Clean</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop counting clothes. Enjoy unlimited monthly laundry packages with premium care, 
              free pickup & delivery across Lifecamp, Abuja.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/booking">
                <Button size="lg" className="hero-gradient text-primary-foreground shadow-lg hover:shadow-xl transition-all px-8">
                  Book a Pickup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/packages">
                <Button size="lg" variant="outline" className="px-8">
                  View Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <Card key={i} className="card-hover glass border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unlimited CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="hero-gradient p-10 md:p-16 text-center text-primary-foreground">
              <Shirt className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Counting Clothes</h2>
              <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
                Our unlimited monthly packages start at just ₦23,000. Wash as many clothes as you want, every single month.
              </p>
              <Link to="/packages">
                <Button size="lg" variant="secondary" className="shadow-lg px-8">
                  Explore Packages
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Home;
