import { Book, Video, Link as LinkIcon } from 'lucide-react';

const resources = [
  {
    title: "Save Our Planet Guide",
    type: "book",
    description: "A comprehensive guide for young environmentalists",
    link: "#"
  },
  {
    title: "Earth Heroes",
    type: "video",
    description: "Stories of young people making a difference",
    link: "#"
  },
  {
    title: "Green Activities",
    type: "link",
    description: "Fun eco-friendly activities to try at home",
    link: "#"
  }
];

export default function Resources() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'book': return <Book className="w-6 h-6" />;
      case 'video': return <Video className="w-6 h-6" />;
      default: return <LinkIcon className="w-6 h-6" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Eco Resources
      </h1>
      <div className="max-w-2xl mx-auto">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-4 flex items-center"
          >
            <div className="text-green-600 mr-4">
              {getIcon(resource.type)}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}