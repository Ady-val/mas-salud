import Image, { StaticImageData } from 'next/image';
import React from 'react';

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
      <Image src={img} alt={alt} fill style={{ objectFit: 'contain' }} />
    </div>
  );
};

export default ImageContainer;
