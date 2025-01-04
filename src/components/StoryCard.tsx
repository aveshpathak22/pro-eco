import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface StoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export default function StoryCard({ title, description, imageUrl, onClick }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-green-700">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onClick}
          className="flex items-center text-green-600 hover:text-green-700"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          Read Story
        </button>
      </div>
    </motion.div>
  );
}