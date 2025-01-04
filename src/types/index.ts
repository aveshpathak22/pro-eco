export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  readingTime: string;
  ageGroup: string;
}

export interface GameItem {
  id: string;
  name: string;
  type: 'recycle' | 'compost' | 'trash';
  imageUrl: string;
  fact: string;
}

export interface Plant {
  id: string;
  name: string;
  growthTime: number;
  waterNeeds: number;
  fact: string;
  imageUrl: string;
}