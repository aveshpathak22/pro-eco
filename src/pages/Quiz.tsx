import { useState } from 'react';
import { motion } from 'framer-motion';
import { quizQuestions } from '../data/quizData';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setShowExplanation(true);
    
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
      setIsAnswered(false);
      setSelectedAnswer(null);
    }
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) return "bg-white";
    if (option === quizQuestions[currentQuestion].correctAnswer) {
      return "bg-green-500 text-white";
    }
    if (option === selectedAnswer && option !== quizQuestions[currentQuestion].correctAnswer) {
      return "bg-red-500 text-white";
    }
    return "bg-white";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-700">Eco Quiz Challenge</h1>
          <span className="text-lg font-semibold bg-green-100 px-4 py-2 rounded-full">
            Score: {score} / {quizQuestions.length}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </h2>
          <p className="text-lg mb-6">{quizQuestions[currentQuestion].question}</p>

          <div className="space-y-3">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: isAnswered ? 1 : 1.02 }}
                className={`w-full p-4 rounded-lg border-2 border-green-200 transition-colors ${getButtonClass(option)}`}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
              >
                {option}
              </motion.button>
            ))}
          </div>

          {showExplanation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 p-4 bg-green-50 rounded-lg"
            >
              <p className="text-green-800">
                {quizQuestions[currentQuestion].explanation}
              </p>
              {currentQuestion < quizQuestions.length - 1 && (
                <button
                  onClick={nextQuestion}
                  className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Next Question
                </button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}