import { useState } from 'react';
import GardenPlot from '../components/GardenPlot';

export default function MyGarden() {
  const [plots, setPlots] = useState(Array(9).fill(null));
  const [growthLevels, setGrowthLevels] = useState(Array(9).fill(0));

  const handlePlant = (index: number) => {
    if (!plots[index]) {
      const newPlots = [...plots];
      newPlots[index] = 'flower';
      setPlots(newPlots);

      // Simulate growth over time
      setInterval(() => {
        setGrowthLevels(prev => {
          const newLevels = [...prev];
          if (newLevels[index] < 1) {
            newLevels[index] += 0.1;
          }
          return newLevels;
        });
      }, 5000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        My Virtual Garden
      </h1>
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {plots.map((plant, index) => (
          <GardenPlot
            key={index}
            plant={plant}
            growth={growthLevels[index]}
            onPlant={() => handlePlant(index)}
          />
        ))}
      </div>
    </div>
  );
}