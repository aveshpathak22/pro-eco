import StoryCard from '../components/StoryCard';

const stories = [
  {
    title: "The Last Rainforest",
    description: "Join Maya on her adventure to save the Amazon rainforest and its wonderful creatures.",
    imageUrl: "https://images.unsplash.com/photo-1516822264827-4d89c71b4a39?auto=format&fit=crop&q=80"
  },
  {
    title: "Ocean Heroes",
    description: "Discover how a group of young friends helped clean their local beach and save marine life.",
    imageUrl: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80"
  },
  {
    title: "The Recycling Revolution",
    description: "Learn how one small town transformed their waste management and inspired a nation.",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
  }
];

export default function Stories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Eco Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            {...story}
            onClick={() => alert('Story coming soon!')}
          />
        ))}
      </div>
    </div>
  );
}