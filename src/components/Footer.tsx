import { Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-card mt-20 mx-6 mb-6 rounded-3xl">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Abditalita
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Compartiendo palabras que inspiran, motivan y elevan el espíritu. 
              Encontrando luz en cada reflexión y esperanza en cada verso.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-accent" />
              <span>Hecho con amor para inspirar corazones</span>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Conectemos</h4>
            
            {/* Author Section */}
            <div className="mb-6 p-4 glass rounded-2xl">
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/d2023c33-88a6-4354-ad65-971a419e8a85.png" 
                  alt="John Elith"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h5 className="font-semibold text-foreground">John Elith</h5>
                  <p className="text-sm text-muted-foreground">Ingeniero de sistemas y desarrollador de software</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <a 
                href="mailto:abditalita@ejemplo.com" 
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>abditalita@ejemplo.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/abditalita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com/abditalita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Instagram</span>
              </a>
              
              {/* PayPal Donation Button */}
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="pt-4">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="tu_correo@paypal.com" />
                <input type="hidden" name="item_name" value="Donación" />
                <input type="hidden" name="currency_code" value="USD" />
                <button 
                  type="submit"
                  className="w-full glass-button hover:shadow-2xl hover:-translate-y-1 text-center"
                >
                  Apoyar con una donación
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Abditalita. Inspirando con amor y esperanza.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-primary transition-colors duration-300">
              Inicio
            </a>
            <a href="#reflexiones" className="hover:text-primary transition-colors duration-300">
              Reflexiones
            </a>
            <a href="#sobre-mi" className="hover:text-primary transition-colors duration-300">
              Sobre mí
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;