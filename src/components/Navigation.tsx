import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className={`transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              Parklin Creation
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors duration-300 hover:text-secondary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors duration-300 hover:text-secondary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className={`transition-colors duration-300 hover:text-secondary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors duration-300 hover:text-secondary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-secondary hover:bg-secondary-dark text-primary px-6 py-2 rounded-full font-semibold transition-all duration-300"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-foreground hover:text-secondary transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-foreground hover:text-secondary transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left text-foreground hover:text-secondary transition-colors duration-300"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-foreground hover:text-secondary transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-secondary hover:bg-secondary-dark text-primary px-6 py-3 rounded-full font-semibold transition-all duration-300 mt-4"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;