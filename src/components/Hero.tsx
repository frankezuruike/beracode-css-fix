import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-[10%] animate-float">
          <Sparkles className="w-6 h-6 text-primary-foreground/30" />
        </div>
        <div className="absolute top-[20%] right-[15%] animate-float" style={{ animationDelay: "2s" }}>
          <Zap className="w-8 h-8 text-primary-foreground/20" />
        </div>
        <div className="absolute bottom-[30%] left-[20%] animate-float" style={{ animationDelay: "4s" }}>
          <Sparkles className="w-4 h-4 text-primary-foreground/40" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Fresh, Clean Clothes <br />
            <span className="text-white">Delivered to Your Doorstep</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience premium dry cleaning and laundry services with a touch of excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="group text-lg px-8 py-4 bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="default" // Changed from "outline"
              className="text-lg px-8 py-4" // Changed class names
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
