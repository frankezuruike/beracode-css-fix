import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Premium Laundry Services | TheUpperRoom Laundry - Dry Cleaning & Delivery</title>
        <meta name="description" content="Fresh, clean clothes delivered to your doorstep. Premium dry cleaning and laundry services in Old Karimu, FCT Abuja with pickup and delivery." />
        <meta name="keywords" content="laundry service, dry cleaning, wash and fold, stain removal, pickup delivery, Abuja laundry" />
      </Helmet>
      
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
