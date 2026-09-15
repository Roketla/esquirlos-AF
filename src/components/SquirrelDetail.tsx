import { Squirrel } from '../data/squirrels';
import SquirrelMap from './SquirrelMap';

interface SquirrelDetailProps {
  squirrel: Squirrel;
  onBack: () => void;
}

export default function SquirrelDetail({ squirrel, onBack }: SquirrelDetailProps) {
  const dangerStars = '⭐'.repeat(squirrel.dangerLevel) + '☆'.repeat(5 - squirrel.dangerLevel);

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
      >
        <span>🔙</span>
        <span className="font-medium">Tornar als esquirols</span>
      </button>

      {/* Header with Image */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-300">
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={squirrel.image}
            alt={squirrel.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-amber-200', 'to-orange-300');
              const emoji = document.createElement('div');
              emoji.className = 'text-8xl animate-float';
              emoji.textContent = squirrel.emoji;
              target.parentElement!.appendChild(emoji);
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              {squirrel.emoji} {squirrel.name}
            </h1>
            <p className="text-amber-200 italic text-sm sm:text-base">
              {squirrel.scientificName}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6">
          {/* Description */}
          <div className="bg-white/70 rounded-2xl p-4 sm:p-6 shadow-inner">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              📖 Qui és?
            </h2>
            <p className="text-amber-800 text-base sm:text-lg leading-relaxed">
              {squirrel.fullDescription}
            </p>
          </div>

          {/* Fun Fact */}
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl p-4 sm:p-6 shadow-inner border-2 border-yellow-300 animate-wiggle-slow">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-2 flex items-center gap-2">
              💡 Sabies que...?
            </h2>
            <p className="text-amber-800 text-base sm:text-lg leading-relaxed">
              {squirrel.funFact}
            </p>
          </div>

          {/* Characteristics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/70 rounded-2xl p-4 shadow-inner">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                📏 Mida
              </h3>
              <p className="text-amber-800">{squirrel.size}</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-4 shadow-inner">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                🎂 Edat
              </h3>
              <p className="text-amber-800">{squirrel.lifespan}</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-4 shadow-inner">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                🍽️ Menjar
              </h3>
              <p className="text-amber-800">{squirrel.diet}</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-4 shadow-inner">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                🏠 Casa seva
              </h3>
              <p className="text-amber-800">{squirrel.habitat}</p>
            </div>
          </div>

          {/* Danger Level */}
          <div className="bg-white/70 rounded-2xl p-4 sm:p-6 shadow-inner">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              ⚠️ Perillositat
            </h2>
            <div className="text-2xl mb-2">{dangerStars}</div>
            <p className="text-amber-800 text-base sm:text-lg">
              {squirrel.dangerDescription}
            </p>
          </div>

          {/* Predators */}
          <div className="bg-gradient-to-r from-red-50 to-orange-100 rounded-2xl p-4 sm:p-6 shadow-inner border-2 border-red-200">
            <h2 className="text-xl sm:text-2xl font-bold text-red-900 mb-3 flex items-center gap-2">
              🦁 Qui el vol menjar? (Depredadors)
            </h2>
            <div className="flex flex-wrap gap-2">
              {squirrel.predators.map((predator, index) => (
                <span
                  key={index}
                  className="bg-white/80 px-3 py-2 rounded-full text-sm sm:text-base text-red-800 shadow-sm border border-red-200"
                >
                  {predator}
                </span>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="bg-white/70 rounded-2xl p-4 sm:p-6 shadow-inner">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              🗺️ On viu al món?
            </h2>
            <p className="text-amber-700 mb-4 text-sm sm:text-base">
              Mira on viuen els esquirols {squirrel.name.toLowerCase()}! 👇
            </p>
            <SquirrelMap squirrel={squirrel} />
            <div className="mt-3 flex flex-wrap gap-2">
              {squirrel.regions.map((region, index) => (
                <span
                  key={index}
                  className="bg-green-100 px-2 py-1 rounded-full text-xs sm:text-sm text-green-800 border border-green-300"
                >
                  📍 {region.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
