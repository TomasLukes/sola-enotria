'use client';

import { ReactElement } from 'react';

import {
  ImageCarousel,
  ImageCarouselContent,
  ImageCarouselItem,
} from '@/app/components/ImageGallery/ImageCarousel/ImageCarousel';
import ImageModal from '@/app/components/ImageGallery/ImageCarousel/ImageModal/ImageModal';
import { useWindowSize } from '@/app/lib/hooks/useWindowSize';
import ImageParallax from '@/app/components/ImageGallery/ImageParallax/ImageParallax';

const ImageGallery = (): ReactElement => {
  const numberOfImages = Array.from({ length: 8 });
  const { width } = useWindowSize();

  return (
    <>
      {width > 768 ? (
        <ImageParallax />
      ) : (
        <ImageCarousel className="lg:container-base w-full">
          <ImageCarouselContent>
            {numberOfImages.map((_, index) => {
              return (
                <ImageCarouselItem key={`ImageCarousel-Image-${index}`}>
                  <ImageModal
                    imgSrc={`/assets/restaurant/interier-0${index + 1}.jpg`}
                    variant="mobile"
                  />
                </ImageCarouselItem>
              );
            })}
          </ImageCarouselContent>
        </ImageCarousel>
      )}
    </>
  );
};

export default ImageGallery;
