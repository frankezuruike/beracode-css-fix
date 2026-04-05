import { X, Sparkles } from "lucide-react";
import { useState } from "react";

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-medium z-[60]">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 shrink-0" />
        <span>Opening Promo: <strong>10% OFF</strong> Your First Wash! Limited Time Only.</span>
        <Sparkles className="w-4 h-4 shrink-0" />
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PromoBanner;
