import { Heart, BookOpen, Star, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sobre Abditalita
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
        </div>

        {/* Main Content */}
        <div className="glass-card text-center">
          {/* Avatar/Icon */}
          <div className="flex justify-center mb-8">
            <div className="glass rounded-full p-8 bg-gradient-to-br from-primary/20 to-secondary/20">
              <Heart className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 mb-12">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Bienvenido a <span className="font-semibold text-primary">Abditalita</span>, 
              un espacio dedicado a compartir palabras que nutren el alma y fortalecen el espíritu.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Aquí encontrarás una cuidadosa selección de reflexiones motivadoras, versículos bíblicos 
              y pensamientos que buscan inspirar, consolar y acompañar en el camino de la vida. 
              Cada palabra ha sido elegida con amor y la esperanza de que pueda iluminar tu día.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Creo firmemente en el poder transformador de las palabras y en la importancia 
              de encontrar momentos de reflexión en nuestro día a día. Este espacio es una 
              invitación a pausar, reflexionar y encontrar inspiración en cada mensaje.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <Heart className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-foreground mb-2">Con Amor</h4>
              <p className="text-sm text-muted-foreground">Cada reflexión compartida con amor genuino</p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <BookOpen className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-foreground mb-2">Sabiduría</h4>
              <p className="text-sm text-muted-foreground">Textos que aportan sabiduría y perspectiva</p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <Star className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-foreground mb-2">Esperanza</h4>
              <p className="text-sm text-muted-foreground">Mensajes que despiertan esperanza y fe</p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-foreground mb-2">Inspiración</h4>
              <p className="text-sm text-muted-foreground">Palabras que motivan y transforman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;