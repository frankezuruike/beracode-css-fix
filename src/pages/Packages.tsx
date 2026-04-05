import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, ArrowRight, AlertTriangle, Crown } from "lucide-react";

const packages = [
  {
    name: "Bachelor / Spinster",
    price: "₦23,000",
    period: "/month",
    desc: "Perfect for individuals who want unlimited laundry without the hassle.",
    includes: ["Unlimited Shirts", "Unlimited Trousers", "Unlimited Skirts", "Unlimited Gowns", "Free Pickup & Delivery", "24hr Turnaround"],
    popular: false,
  },
  {
    name: "Family Package",
    price: "₦38,000",
    period: "/month",
    desc: "Designed for households. Unlimited clothes for the whole family — no limits, no stress.",
    includes: ["Everything in Bachelor", "Unlimited Family Members", "Priority Scheduling", "Dedicated Account Manager", "Free Pickup & Delivery", "24hr Turnaround"],
    popular: true,
  },
];

const exclusions = ["Duvets", "Curtains", "Bedsheets", "Agbada / Senator", "Kaftans"];

const PackagesPage = () => {
  return (
    <>
      <Helmet>
        <title>Unlimited Packages — TheUpperRoom Laundry</title>
        <meta name="description" content="Stop counting clothes. Unlimited monthly laundry packages from ₦23,000. Bachelor and Family plans available." />
      </Helmet>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            Unlimited Monthly Plans
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stop Counting <span className="gradient-text">Clothes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Subscribe to an unlimited package and never worry about laundry costs again. Wash freely, live fully.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <Card
                key={i}
                className={`relative overflow-hidden card-hover ${
                  pkg.popular ? "border-primary shadow-xl ring-1 ring-primary/20" : "glass border-border/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 hero-gradient text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.desc}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm">{pkg.period}</span>
                  </div>

                  <ul className="space-y-2.5">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/booking">
                    <Button
                      className={`w-full ${pkg.popular ? "hero-gradient text-primary-foreground shadow-md" : ""}`}
                      variant={pkg.popular ? "default" : "outline"}
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Exclusions */}
          <Card className="max-w-4xl mx-auto mt-8 border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">Not Included in Unlimited Packages</h4>
                  <div className="flex flex-wrap gap-2">
                    {exclusions.map((item, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
                        <X className="w-3 h-3" />
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    These items can be serviced at our standard per-item pricing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default PackagesPage;
