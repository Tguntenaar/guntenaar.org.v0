import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FamilyCardProps {
  name: string;
  subdomain: string;
  image: string;
  role: string;
  expertise: string[];
  icon: LucideIcon;
}

const FamilyCard: React.FC<FamilyCardProps> = ({
  name,
  subdomain,
  image,
  role,
  expertise,
  icon: Icon,
}) => {
  return (
    <div className="flex-none w-80 bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-sm opacity-90">{subdomain}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon className="w-5 h-5 text-gray-700" />
          <span className="font-medium text-gray-900">{role}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyCard;