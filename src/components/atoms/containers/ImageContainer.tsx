import Image, { StaticImageData } from 'next/image';
import React from 'react';
import imga from '@mas-salud/public/massalud.png';

interface ImageContainerProps {
  img: StaticImageData;
  alt: string;
  className?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  img,
  alt,
  className = '',
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image src={imga} alt={alt} fill style={{ objectFit: 'contain' }} />
    </div>
  );
};

export default ImageContainer;
