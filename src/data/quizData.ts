import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: "What is the main cause of climate change?",
    options: [
      "Greenhouse gas emissions",
      "Volcanic eruptions",
      "Solar flares",
      "Ocean currents"
    ],
    correctAnswer: "Greenhouse gas emissions",
    explanation: "Greenhouse gas emissions from human activities are the leading cause of climate change. These gases trap heat in Earth's atmosphere, causing global temperatures to rise."
  },
  {
    id: '2',
    question: "Which of these actions helps reduce your carbon footprint?",
    options: [
      "Using reusable bags",
      "Leaving lights on",
      "Taking long showers",
      "Using disposable items"
    ],
    correctAnswer: "Using reusable bags",
    explanation: "Using reusable bags helps reduce plastic waste and the energy needed to produce new bags, lowering your carbon footprint."
  },
  {
    id: '3',
    question: "What can you do to save water?",
    options: [
      "Take shorter showers",
      "Leave the tap running",
      "Water plants at noon",
      "Use a broken hose"
    ],
    correctAnswer: "Take shorter showers",
    explanation: "Taking shorter showers is an effective way to save water. A typical shower uses 2.5 gallons of water per minute!"
  },
  {
    id: '4',
    question: "Which animal is endangered due to climate change?",
    options: [
      "Polar Bears",
      "House Cats",
      "Pigeons",
      "Squirrels"
    ],
    correctAnswer: "Polar Bears",
    explanation: "Polar bears are endangered because climate change is causing Arctic ice to melt, making it harder for them to hunt and survive."
  },
  {
    id: '5',
    question: "What is renewable energy?",
    options: [
      "Energy from natural sources that can be replenished",
      "Energy from burning coal",
      "Energy from plastic",
      "Energy from cutting trees"
    ],
    correctAnswer: "Energy from natural sources that can be replenished",
    explanation: "Renewable energy comes from natural sources like sun, wind, and water that can be naturally replenished."
  }
];