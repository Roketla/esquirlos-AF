import { Squirrel } from '../data/squirrels';

interface SquirrelCardProps {
  squirrel: Squirrel;
  onClick: () => void;
}

export default function SquirrelCard({ squirrel, onClick }: SquirrelCardProps) {
  const dangerStars = '⭐'.repeat(squirrel.dangerLevel) + '☆'.repeat(5 - squirrel.dangerLevel);

  return (
    <div
      onClick={onClick}
      className="squirrel-card group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200 hover:border-amber-400"
    >
      {/* Emoji Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 text-center">
        <span className="text-6xl block animate-bounce-slow group-hover:animate-wiggle">
          {squirrel.emoji}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-amber-900 text-center group-hover:text-amber-700 transition-colors">
          {squirrel.name}
        </h3>
        <p className="text-xs text-amber-600 italic text-center mt-1">
          {squirrel.scientificName}
        </p>
        <p className="text-sm text-amber-800 text-center mt-2 leading-relaxed">
          {squirrel.shortDescription}
        </p>

        {/* Danger Level */}
        <div className="mt-3 text-center">
          <span className="text-xs text-amber-700">Perillositat:</span>
          <div className="text-sm mt-1">{dangerStars}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-amber-200/50 px-4 py-2 text-center">
        <span className="text-xs text-amber-700 font-medium">
          👆 Toca per saber-ne més!
        </span>
      </div>
    </div>
  );
}
