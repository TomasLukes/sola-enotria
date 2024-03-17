import Image from 'next/image';
import { ReactElement } from 'react';
import ImageModal from '../ImageCarousel/ImageModal/ImageModal';

const ImageParallax = (): ReactElement => {
  return (
    <div className="w-full mx-auto px-4 lg:px-8 mt-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-4 gap-2 overflow-hidden rounded-3xl">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-01.jpg`}
          variant="desktop"
          className="h-[300px] w-full"
        />
        <ImageModal
          imgSrc={`/assets/restaurant/interier-02.jpg`}
          variant="desktop"
          className="h-[300px] w-full"
        />
        <ImageModal
          imgSrc={`/assets/restaurant/interier-03.jpg`}
          variant="desktop"
          className="h-[300px] w-full"
        />
        <ImageModal
          imgSrc={`/assets/restaurant/interier-04.jpg`}
          variant="desktop"
          className="h-[300px] w-full"
        />
        <ImageModal
          imgSrc={`/assets/restaurant/interier-05.jpg`}
          variant="desktop"
          className="h-[300px] w-full"
        />
        <ImageModal
          imgSrc={`/assets/restaurant/interier-06.jpg`}
          variant="desktop"
          className="h-[300px] w-full"
        />
        <ImageModal
          imgSrc={`/assets/restaurant/interier-07.jpg`}
          variant="desktop"
          className="h-[300px] w-full"
        />
        <ImageModal
          imgSrc={`/assets/restaurant/interier-08.jpg`}
          variant="desktop"
          className="h-[300px] w-full"
        />
      </div>
    </div>
  );
};

export default ImageParallax;
