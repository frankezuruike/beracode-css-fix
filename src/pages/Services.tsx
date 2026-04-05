import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Wind, SprayCan, Gem, Scissors, Home as HomeIcon } from "lucide-react";

const services = [
  { icon: Gem, title: "Dry Cleaning", desc: "Professional solvent cleaning for delicate and premium fabrics. Suits, gowns, and specialty garments handled with precision." },
  { icon: Shirt, title: "Wash & Fold", desc: "Full-service laundry — we wash, dry, and neatly fold your everyday wear so you don't have to." },
  { icon: Wind, title: "Pressing & Ironing", desc: "Crisp, wrinkle-free results. Perfect for office wear, natives, and special occasion outfits." },
  { icon: SprayCan, title: "Stain Removal", desc: "Advanced stain treatment for stubborn marks. We tackle oil, ink, wine, and more with expert care." },
  { icon: Scissors, title: "Minor Repairs", desc: "Quick fixes like button replacement, small tears, and hem adjustments while we clean." },
  { icon: HomeIcon, title: "Home Textiles", desc: "Curtains, bedsheets, duvets, and comforters — professionally cleaned and returned fresh." },
];

const pricing = [
  { category: "Shirts", items: [{ name: "Iron Only", price: "₦500" }, { name: "Wash & Iron", price: "₦700" }] },
  { category: "Natives", items: [{ name: "2-Piece", price: "₦1,200" }, { name: "Agbada", price: "₦1,700" }] },
  { category: "Suits", items: [{ name: "2-Piece Suit", price: "₦1,500" }] },
  { category: "Home Textiles", items: [{ name: "Bedsheet", price: "₦900" }, { name: "Duvet / Comforter", price: "₦2,200" }, { name: "Curtains", price: "₦600/yard" }] },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services & Pricing — TheUpperRoom Laundry</title>
        <meta name="description" content="Dry cleaning, wash & fold, pressing, stain removal and more. View our full service list and transparent pricing." />
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From everyday laundry to premium dry cleaning — every garment gets the royal treatment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Card key={i} className="card-hover glass border-border/50">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-lg hero-gradient flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-muted-foreground">No hidden fees. What you see is what you pay.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {pricing.map((cat, i) => (
              <Card key={i} className="glass border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">{cat.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
