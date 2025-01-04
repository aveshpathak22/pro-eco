import { motion } from 'framer-motion';

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export default function QuizCard({ question, options, correctAnswer, onAnswer }: QuizCardProps) {
  const handleAnswer = (selected: string) => {
    onAnswer(selected === correctAnswer);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h3 className="text-xl font-semibold mb-4 text-green-700">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full p-3 text-left rounded-md hover:bg-green-100 transition-colors border border-green-200"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}