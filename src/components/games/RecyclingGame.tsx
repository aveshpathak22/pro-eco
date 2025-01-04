import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Recycle, Leaf } from 'lucide-react';
import { gameItems } from '../../data/gameData';

export default function RecyclingGame() {
  const [score, setScore] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('ecoGameHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  const handleDrop = (binType: string) => {
    const isCorrect = gameItems[currentItem].type === binType;
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      if (streak + 1 > highScore) {
        setHighScore(streak + 1);
        localStorage.setItem('ecoGameHighScore', (streak + 1).toString());
      }
    } else {
      setStreak(0);
    }

    setShowFact(true);
    
    setTimeout(() => {
      setShowFact(false);
      if (currentItem < gameItems.length - 1) {
        setCurrentItem(currentItem + 1);
      } else {
        setCurrentItem(0);
      }
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-700">Recycling Hero</h1>
        <div className="flex space-x-4">
          <span className="bg-green-100 px-4 py-2 rounded-full">
            Score: {score}
          </span>
          <span className="bg-yellow-100 px-4 py-2 rounded-full">
            Streak: {streak}
          </span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">
            High Score: {highScore}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-8 p-6 bg-white rounded-lg shadow-lg w-full"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={gameItems[currentItem].imageUrl}
                alt={gameItems[currentItem].name}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl text-center">{gameItems[currentItem].name}</h3>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-3 gap-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-blue-500 rounded-lg text-white flex flex-col items-center"
            onClick={() => handleDrop('recycle')}
          >
            <Recycle className="w-12 h-12 mb-2" />
            <span>Recycle</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-green-500 rounded-lg text-white flex flex-col items-center"
            onClick={() => handleDrop('compost')}
          >
            <Leaf className="w-12 h-12 mb-2" />
            <span>Compost</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-gray-500 rounded-lg text-white flex flex-col items-center"
            onClick={() => handleDrop('trash')}
          >
            <Trash2 className="w-12 h-12 mb-2" />
            <span>Trash</span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showFact && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-4 bg-green-50 rounded-lg text-center"
            >
              <p className="text-green-800">{gameItems[currentItem].fact}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}