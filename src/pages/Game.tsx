import { useState } from 'react';
import { motion } from 'framer-motion';
import { availableGames } from '../data/gamesData';
import RecyclingGame from '../components/games/RecyclingGame';
import MemoryGame from '../components/games/MemoryGame';
import ClimatePuzzle from '../components/games/ClimatePuzzle';

export default function Game() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const renderGame = () => {
    switch (selectedGame) {
      case 'recycling':
        return <RecyclingGame />;
      case 'memory':
        return <MemoryGame />;
      case 'puzzle':
        return <ClimatePuzzle />;
      default:
        return null;
    }
  };

  if (selectedGame) {
    return (
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => setSelectedGame(null)}
          className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Back to Games
        </button>
        {renderGame()}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Eco Games
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableGames.map((game) => (
          <motion.div
            key={game.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedGame(game.id)}
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="flex justify-between text-sm">
                <span className="bg-green-100 px-3 py-1 rounded-full">
                  {game.difficulty}
                </span>
                <span className="bg-blue-100 px-3 py-1 rounded-full">
                  Ages {game.ageGroup}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}