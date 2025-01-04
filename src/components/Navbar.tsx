import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Leaf className="h-8 w-8" />
          <span>EcoKids Learn</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/quiz" className="hover:text-yellow-200">Quiz</Link>
          <Link to="/game" className="hover:text-yellow-200">Game</Link>
          <Link to="/stories" className="hover:text-yellow-200">Stories</Link>
          <Link to="/my-garden" className="hover:text-yellow-200">My Garden</Link>
          <Link to="/resources" className="hover:text-yellow-200">Resources</Link>
        </div>
      </div>
    </nav>
  );
}