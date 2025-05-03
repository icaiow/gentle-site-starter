
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
              SC
            </div>
            <span className="ml-2 text-lg font-bold">StopCyber</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Início</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Recursos</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contato</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex border-white text-white hover:bg-white/10">
              Entrar
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Denunciar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
