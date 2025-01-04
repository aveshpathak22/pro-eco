import { GameItem } from '../types';

export const gameItems: GameItem[] = [
  {
    id: '1',
    name: 'Plastic Bottle',
    type: 'recycle',
    imageUrl: 'https://images.unsplash.com/photo-1618355776464-8666794d2520?auto=format&fit=crop&q=80',
    fact: 'It takes up to 450 years for a plastic bottle to decompose!'
  },
  {
    id: '2',
    name: 'Banana Peel',
    type: 'compost',
    imageUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80',
    fact: 'Banana peels make great fertilizer for plants!'
  },
  {
    id: '3',
    name: 'Paper',
    type: 'recycle',
    imageUrl: 'https://images.unsplash.com/photo-1589810264340-0ce27bfbf751?auto=format&fit=crop&q=80',
    fact: 'Recycling one ton of paper saves 17 trees!'
  }
];