import { useState } from 'react';
import { motion } from 'framer-motion';

const puzzlePieces = [
  {
    id: '1',
    question: "What gas do plants absorb from the air?",
    answer: "Carbon Dioxide",
    hint: "It's what we breathe out"
  },
  {
    id: '2',
    question: "What do plants release into the air?",
    answer: "Oxygen",
    hint: "It's what we need to breathe"
  },
  {
    id: '3',
    question: "What is the process called when plants make their own food?",
    answer: "Photosynthesis",
    hint: "Photo means light, synthesis means making"
  }
];

export default function ClimatePuzzle() {
  const [currentPiece, setCurrentPiece] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (answer.toLowerCase() === puzzlePieces[currentPiece].answer.toLowerCase()) {
      setScore(score + 1);
      setFeedback('Correct! 🌟');
      if (currentPiece < puzzlePieces.length - 1) {
        setTimeout(() => {
          setCurrentPiece(currentPiece + 1);
          setAnswer('');
          setShowHint(false);
          setFeedback('');
        }, 1500);
      }
    } else {
      setFeedback('Try again! 🤔');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-700">Climate Puzzle</h1>
        <span className="bg-green-100 px-4 py-2 rounded-full">
          Score: {score}/{puzzlePieces.length}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-xl mb-6">
          Question {currentPiece + 1} of {puzzlePieces.length}
        </h2>
        <p className="text-lg mb-4">{puzzlePieces[currentPiece].question}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            placeholder="Your answer..."
          />
          
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setShowHint(true)}
              className="px-4 py-2 text-green-600 hover:text-green-700"
            >
              Need a hint?
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>

        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-4 bg-yellow-50 rounded-lg"
          >
            <p className="text-yellow-800">Hint: {puzzlePieces[currentPiece].hint}</p>
          </motion.div>
        )}

        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 p-4 rounded-lg ${
              feedback.includes('Correct') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}
          >
            {feedback}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}