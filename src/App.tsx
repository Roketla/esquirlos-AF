import { useState } from 'react';
import { squirrels, Squirrel } from './data/squirrels';
import SquirrelCard from './components/SquirrelCard';
import SquirrelDetail from './components/SquirrelDetail';

function App() {
  const [selectedSquirrel, setSelectedSquirrel] = useState<Squirrel | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-orange-900">
      {/* Decorative leaves */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-float">🍂</div>
        <div className="absolute top-40 right-20 text-5xl animate-float-slow">🍁</div>
        <div className="absolute bottom-20 left-1/4 text-4xl animate-float">🍂</div>
        <div className="absolute bottom-40 right-1/3 text-6xl animate-float-slow">🍁</div>
        <div className="absolute top-1/2 left-1/2 text-5xl animate-float">🌰</div>
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-8 px-4">
        <div className="animate-bounce-slow">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-100 drop-shadow-lg">
            🐿️ Els Esquirols del Món 🐿️
          </h1>
        </div>
        <p className="text-amber-200 text-lg sm:text-xl mt-3 animate-fadeIn">
          Classe dels Esquirols · Descobreix tots els esquirols!
        </p>
        <div className="flex justify-center gap-2 mt-4 text-2xl sm:text-3xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌰</span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🌲</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍂</span>
          <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🌳</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌰</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 pb-12 max-w-7xl mx-auto">
        {selectedSquirrel ? (
          <SquirrelDetail
            squirrel={selectedSquirrel}
            onBack={() => setSelectedSquirrel(null)}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {squirrels.map((squirrel, index) => (
              <div
                key={squirrel.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SquirrelCard
                  squirrel={squirrel}
                  onClick={() => setSelectedSquirrel(squirrel)}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 bg-amber-950/50 border-t border-amber-700/50">
        <p className="text-amber-300 text-sm sm:text-base">
          🐿️ Web feta per Andreu Casals 🐿️
        </p>
        <p className="text-amber-500 text-xs mt-1">
          Per la classe dels Esquirols ❤️
        </p>
      </footer>
    </div>
  );
}

export default App;
