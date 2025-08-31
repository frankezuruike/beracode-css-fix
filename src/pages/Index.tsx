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
        <title>AI-Powered Solutions | BeracodeAI - Custom Software Development</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions and custom software development by BeracodeAI." />
        <meta name="keywords" content="AI development, custom software, machine learning, automation, web development" />
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
