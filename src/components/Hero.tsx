import { Heart, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center justify-center px-6 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-8">
          <div className="glass rounded-full p-6 bg-gradient-to-br from-primary/20 to-secondary/20">
            <Heart className="h-16 w-16 text-primary" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
          Abditalita
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          Palabras que inspiran, reflexiones que transforman, versos que iluminan el camino
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Reflexiones diarias</span>
          </div>
          <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
            <Star className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-foreground">Versículos bíblicos</span>
          </div>
          <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
            <Heart className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Palabras motivadoras</span>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="#reflexiones" 
          className="glass-button inline-flex items-center space-x-2 text-lg"
        >
          <span>Explorar reflexiones</span>
          <Sparkles className="h-5 w-5" />
        </a>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 animate-bounce">
        <Heart className="h-6 w-6 text-primary/60" />
      </div>
      <div className="absolute top-1/3 right-12 animate-bounce delay-1000">
        <Star className="h-5 w-5 text-secondary/60" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-bounce delay-2000">
        <Sparkles className="h-7 w-7 text-accent/60" />
      </div>
    </section>
  );
};

export default Hero;