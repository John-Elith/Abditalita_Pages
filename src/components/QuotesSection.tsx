import QuoteCard from './QuoteCard';

const quotesData = [
  // Reflexiones Motivadoras
  {
    quote: "Has tenido que cargar con muchas cosas, ¿verdad? Tu corazón ha estado llorando, ¿Verdad? No puedes abandonar el sueño que elegiste, ¿Verdad? Deseo que en tu vida las veces que sonrías y confíes sean más. Que las que sufras o desconfíes. Cuando te enfrentas con tu sueño déjalo estar en tu interior.",
    author: "Imamade Nandomo",
    category: "Reflexiones Motivadoras",
    bgImage: "/lovable-uploads/bba06b49-3d03-4135-b78b-dd53d58d4cf3.png"
  },
  {
    quote: "No estás a mi lado, ni detrás de mí, estás dentro de mí, como mis costillas están a mi corazón. Fui construido para protegerte, para amarte, para mantenerte a salvo en la fortaleza de mi amor. Y ninguna tormenta, sin fuerza, ningún tiempo se lo llevará nunca. Eres mis Costillas, los huesos que guardan mi corazón, el escudo que protege mi alma.",
    author: "Imamade Nandomo",
    category: "Reflexiones Motivadoras",
    bgImage: "/lovable-uploads/ce28fdcd-4258-4c1d-8a9e-1c35c0057f1c.png"
  },
  {
    quote: "Lo has intentado tantas veces, lo intentas todo para no abandonar. ¿Acaso no te has puesto en pie y has seguido adelante tantas veces? Confía más en ti mismo. Vuelve a los momentos donde ardía tu corazón.",
    author: "Imamade Nandomo",
    category: "Reflexiones Motivadoras",
    bgImage: "/lovable-uploads/0f27b5d5-0431-40e6-89cd-4221e45c19d8.png"
  }
];

const QuotesSection = () => {
  const categories = [...new Set(quotesData.map(quote => quote.category))];

  return (
    <section id="reflexiones" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Reflexiones que Inspiran
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre palabras que tocan el alma, versículos que fortalecen el espíritu y reflexiones que iluminan el camino hacia una vida plena.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category} className="mb-16">
            {/* Category Title */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                {category}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>

            {/* Quotes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {quotesData
                .filter(quote => quote.category === category)
                .map((quote, index) => (
                  <QuoteCard
                    key={`${category}-${index}`}
                    quote={quote.quote}
                    author={quote.author}
                    category={quote.category}
                    bgImage={quote.bgImage}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuotesSection;