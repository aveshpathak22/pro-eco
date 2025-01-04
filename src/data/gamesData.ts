import { EcoGame, MemoryCard } from '../types/games';

export const availableGames: EcoGame[] = [
  {
    id: 'recycling',
    title: 'Recycling Hero',
    description: 'Learn to sort waste and save the planet!',
    thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80',
    difficulty: 'easy',
    ageGroup: '6-12'
  },
  {
    id: 'memory',
    title: 'Eco Memory Match',
    description: 'Match endangered animals and learn about them!',
    thumbnail: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80',
    difficulty: 'medium',
    ageGroup: '8-15'
  },
  {
    id: 'puzzle',
    title: 'Climate Puzzle',
    description: 'Solve puzzles about climate change!',
    thumbnail: 'https://images.unsplash.com/photo-1618355776464-8666794d2520?auto=format&fit=crop&q=80',
    difficulty: 'hard',
    ageGroup: '10-15'
  }
];

export const memoryCards: MemoryCard[] = [
  {
    id: '1',
    name: 'Polar Bear',
    imageUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80',
    fact: 'Polar bears are excellent swimmers and can swim for days at a time!'
  },
  {
    id: '2',
    name: 'Sea Turtle',
    imageUrl: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&q=80',
    fact: 'Sea turtles can live up to 100 years in the wild!'
  },
  {
    id: '3',
    name: 'Panda',
    imageUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80',
    fact: 'Giant pandas eat bamboo for about 12 hours every day!'
  }
];