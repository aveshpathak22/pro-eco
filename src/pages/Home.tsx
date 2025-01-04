import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TreePine, Brain, Gamepad2, Book, Flower2, Library } from 'lucide-react';

export default function Home() {
  const features = [
    { title: 'Take a Quiz', icon: Brain, link: '/quiz' },
    { title: 'Play Eco Game', icon: Gamepad2, link: '/game' },
    { title: 'Read Eco Stories', icon: Book, link: '/stories' },
    { title: 'Tend Your Garden', icon: Flower2, link: '/my-garden' },
    { title: 'Eco Resources', icon: Library, link: '/resources' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <TreePine className="h-12 w-12 text-green-600 mr-4" />
        <h1 className="text-4xl font-bold text-green-600">EcoKids Learn</h1>
      </div>
      
      <h2 className="text-2xl mb-8">Welcome to EcoKids Learn! Explore, play, and learn about our amazing planet!</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={feature.link}>
              <div className="bg-green-500 text-white rounded-lg p-8 h-full flex flex-col items-center justify-center text-center hover:bg-green-600 transition-colors">
                <feature.icon className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}