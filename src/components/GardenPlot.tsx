import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

interface GardenPlotProps {
  plant: string | null;
  onPlant: () => void;
  growth: number;
}

export default function GardenPlot({ plant, onPlant, growth }: GardenPlotProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-32 h-32 border-2 border-brown-400 rounded-lg bg-amber-100 flex items-center justify-center cursor-pointer"
      onClick={onPlant}
    >
      {plant ? (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          className="text-green-600"
        >
          <Flower2 
            className="w-12 h-12" 
            style={{ transform: `scale(${0.5 + growth * 0.5})` }}
          />
        </motion.div>
      ) : (
        <div className="text-gray-400">Empty Plot</div>
      )}
    </motion.div>
  );
}