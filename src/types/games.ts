export interface EcoGame {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  difficulty: 'easy' | 'medium' | 'hard';
  ageGroup: string;
}

export interface MemoryCard {
  id: string;
  name: string;
  imageUrl: string;
  fact: string;
}

export interface PuzzlePiece {
  id: string;
  question: string;
  answer: string;
  hint: string;
}