import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="text-xl font-bold gradient-text mb-1">TheUpperRoom Laundry</div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Fresh. Faithful. Flawless.</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium laundry and dry cleaning services. The luxury of clean, delivered to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Packages", path: "/packages" },
                { label: "Book Pickup", path: "/booking" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Dry Cleaning</li>
              <li>Wash & Fold</li>
              <li>Pressing & Ironing</li>
              <li>Stain Removal</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Lifecamp, FCT, Abuja</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:07041614618" className="hover:text-primary transition-colors">07041614618</a>
                  <a href="tel:09117354666" className="hover:text-primary transition-colors">09117354666</a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:Theupperroomlaundry@gmail.com" className="hover:text-primary transition-colors">
                  Theupperroomlaundry@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {year} TheUpperRoom Laundry Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
