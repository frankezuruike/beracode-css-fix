import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Truck, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const serviceOptions = [
  "Wash & Iron",
  "Iron Only",
  "Dry Cleaning",
  "Stain Removal",
  "Home Textiles",
  "Bachelor Package (Monthly)",
  "Family Package (Monthly)",
];

const BookingPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    services: [] as string[],
    notes: "",
  });

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || form.services.length === 0) {
      toast.error("Please fill in all required fields and select at least one service.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/meeppvle", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          address: form.address,
          services: form.services.join(", "),
          notes: form.notes,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      toast.success("Pickup request submitted! We'll contact you shortly to confirm.");
      setForm({ name: "", phone: "", email: "", address: "", services: [], notes: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Pickup — TheUpperRoom Laundry</title>
        <meta name="description" content="Schedule a free pickup and delivery for your laundry. Fill out the form and we'll handle the rest." />
      </Helmet>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-6">
            <Truck className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book a <span className="gradient-text">Pickup</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tell us where and when — we'll pick up your clothes and deliver them back fresh and clean.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="glass border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle>Pickup Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                    <Input
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
                    <Input
                      placeholder="e.g., 08012345678"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email (Optional)</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Pickup Address *</label>
                  <Input
                    placeholder="House number, street, area"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Services Needed *</label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                          form.services.includes(s)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted text-muted-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Special Instructions</label>
                  <Textarea
                    placeholder="Any special care instructions or preferred pickup time..."
                    className="min-h-[100px]"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" disabled={submitting} className="w-full hero-gradient text-primary-foreground shadow-md">
                  <Send className="w-4 h-4 mr-2" />
                  {submitting ? "Submitting…" : "Submit Pickup Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
