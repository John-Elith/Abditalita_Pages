import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 px-6 py-4 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/20 backdrop-blur-3xl border-b border-white/20' 
        : 'glass-header'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Abditalita
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#inicio" 
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Inicio
          </a>
          <a 
            href="#reflexiones" 
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Reflexiones
          </a>
          <a 
            href="#sobre-mi" 
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Sobre mí
          </a>
          <a 
            href="#contactos" 
            className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
          >
            Contactos
          </a>
          
          {/* PayPal Donation Button */}
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="tu_correo@paypal.com" />
            <input type="hidden" name="item_name" value="Donación" />
            <input type="hidden" name="currency_code" value="USD" />
            <button 
              type="submit"
              className="glass-button hover:shadow-2xl hover:-translate-y-1 text-sm"
            >
              Donar
            </button>
          </form>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden glass rounded-lg p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card m-4 rounded-2xl">
          <nav className="flex flex-col space-y-4 p-6">
            <a 
              href="#inicio" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#reflexiones" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reflexiones
            </a>
            <a 
              href="#sobre-mi" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mí
            </a>
            <a 
              href="#contactos" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactos
            </a>
            
            {/* Mobile PayPal Donation Button */}
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="pt-2">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="tu_correo@paypal.com" />
              <input type="hidden" name="item_name" value="Donación" />
              <input type="hidden" name="currency_code" value="USD" />
              <button 
                type="submit"
                className="w-full glass-button hover:shadow-2xl hover:-translate-y-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Donar con PayPal
              </button>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;