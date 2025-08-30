interface QuoteCardProps {
  quote: string;
  author: string;
  category: string;
  bgImage: string;
}

const QuoteCard = ({ quote, author, category, bgImage }: QuoteCardProps) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block glass rounded-full px-3 py-1 text-xs font-medium text-primary">
          {category}
        </span>
      </div>

      {/* Quote Image - The image now contains the text */}
      <div className="relative overflow-hidden rounded-2xl mb-4 group-hover:shadow-2xl transition-all duration-500">
        <img 
          src={bgImage} 
          alt={`${quote} - ${author}`}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-primary via-secondary to-accent pointer-events-none" />
      </div>

      {/* Author - Now below the image */}
      <div className="text-center">
        <cite className="text-muted-foreground font-medium not-italic">
          — {author}
        </cite>
      </div>
    </div>
  );
};

export default QuoteCard;