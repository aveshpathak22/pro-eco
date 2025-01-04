import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { memoryCards } from '../../data/gamesData';

interface Card extends MemoryCard {
  isFlipped: boolean;
  isMatched: boolean;
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    const duplicatedCards = [...memoryCards, ...memoryCards].map((card, index) => ({
      ...card,
      id: `${card.id}-${index}`,
      isFlipped: false,
      isMatched: false,
    }));
    
    setCards(shuffleCards(duplicatedCards));
  }, []);

  const shuffleCards = (array: Card[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].isMatched || cards[index].isFlipped) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlippedCards;
      
      if (cards[firstIndex].name === cards[secondIndex].name) {
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].isMatched = true;
          matchedCards[secondIndex].isMatched = true;
          setCards(matchedCards);
          setMatches(matches + 1);
          setFlippedCards([]);
        }, 1000);
      } else {
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex].isFlipped = false;
          resetCards[secondIndex].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-700">Eco Memory Match</h1>
        <div className="flex space-x-4">
          <span className="bg-green-100 px-4 py-2 rounded-full">
            Moves: {moves}
          </span>
          <span className="bg-yellow-100 px-4 py-2 rounded-full">
            Matches: {matches}/{memoryCards.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: card.isFlipped ? 1 : 1.05 }}
            whileTap={{ scale: card.isFlipped ? 1 : 0.95 }}
            className={`aspect-square cursor-pointer ${
              card.isFlipped ? 'pointer-events-none' : ''
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-gpu ${
                card.isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              <div className="absolute w-full h-full bg-green-500 rounded-lg flex items-center justify-center text-white">
                <span className="text-2xl">?</span>
              </div>
              {card.isFlipped && (
                <div className="absolute w-full h-full rounded-lg overflow-hidden transform rotate-y-180">
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}