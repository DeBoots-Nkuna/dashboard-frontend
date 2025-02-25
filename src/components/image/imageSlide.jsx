'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import agricultureImg from '@/assets/agriculture.png';
import biodiversityImg from '@/assets/biodiversity.png';
import climateImg from '@/assets/climate-change.png';
import fisheriesImg from '@/assets/fisheries.png';
import genderBVImg from '@/assets/gender-based-violence.png';
import LeadershipImg from '@/assets/leadership.png';
import nutritionImg from '@/assets/nutrition.png';
import oceanImg from '@/assets/ocean.png';

const images = [
  {
    image: agricultureImg,
    alt: 'A farm picture',
  },
  {
    image: biodiversityImg,
    alt: 'A picture of forest with animals of all kinds',
  },
  {
    image: climateImg,
    alt: 'A planet earth picture with different climate zones',
  },
  {
    image: fisheriesImg,
    alt: 'A picture of a fisherman fishing in the sea',
  },
  {
    image: genderBVImg,
    alt: 'A picture of a woman hiding from being abused',
  },
  {
    image: LeadershipImg,
    alt: 'A female leader addressing a crowd',
  },
  {
    image: nutritionImg,
    alt: 'A picture of table full of nutritious food',
  },
  {
    image: oceanImg,
    alt: 'A picture of a calm ocean with sea turtles',
  },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          // Position absolutely, full container, fade transition
          className={`
            absolute inset-0 
            transition-opacity duration-1000 ease-in-out
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {/* Next/Image with fill to cover the container */}
          <Image
            src={image.image}
            alt={image.alt}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  );
}
