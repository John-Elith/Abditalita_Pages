import { Mail, Linkedin, Instagram, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contactos" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Conectemos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Te gustaría compartir una reflexión o simplemente conversar? 
            Me encantaría conocerte y escuchar tus pensamientos.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-8" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a 
            href="mailto:abditalita@ejemplo.com"
            className="glass-card text-center group hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="glass rounded-full p-4 bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <Mail className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Correo Electrónico</h3>
            <p className="text-muted-foreground mb-4">
              Escríbeme directamente para compartir tus reflexiones
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary font-medium">
              <span>abditalita@ejemplo.com</span>
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/abditalita" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card text-center group hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="glass rounded-full p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300">
                <Linkedin className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-muted-foreground mb-4">
              Conectemos profesionalmente y compartamos ideas
            </p>
            <div className="flex items-center justify-center space-x-2 text-secondary font-medium">
              <span>Sígueme en LinkedIn</span>
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/abditalita" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card text-center group hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="glass rounded-full p-4 bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                <Instagram className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Instagram</h3>
            <p className="text-muted-foreground mb-4">
              Reflexiones diarias en imágenes inspiradoras
            </p>
            <div className="flex items-center justify-center space-x-2 text-accent font-medium">
              <span>@abditalita</span>
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>
        </div>

        {/* Additional Message */}
        <div className="glass-card text-center">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Tu Voz Importa
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Cada mensaje, cada reflexión compartida es valiosa. Si alguna de estas palabras 
            ha tocado tu corazón o si tienes una reflexión que te gustaría compartir, 
            no dudes en contactarme. Juntos podemos crear un espacio de inspiración y esperanza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;