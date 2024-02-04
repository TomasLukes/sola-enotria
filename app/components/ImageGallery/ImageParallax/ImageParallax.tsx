import Image from 'next/image';
import { ReactElement } from 'react';
import ImageModal from '../ImageCarousel/ImageModal/ImageModal';

const ImageParallax = (): ReactElement => {
  return (
    <div className="container-full h-[800px] mt-20 relative">
      <h3 className="absolute text-7xl font-bold text-accent bg-transaprent text-nowrap shadow-lg top-[200px] left-[800px] z-10">
        SOLA ENOTRIA
      </h3>
      <div className="absolute top-0 left-4">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-01.jpg`}
          variant="desktop"
          className="h-[300px] w-[350px]"
        />
      </div>
      <div className="absolute bottom-[-100px] left-[500px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-02.jpg`}
          variant="desktop"
          className="h-[400px] w-[200px]"
        />
      </div>
      <div className="absolute bottom-0 left-[200px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-04.jpg`}
          variant="desktop"
          className="absolute h-[200px] w-[200px]"
        />
      </div>
      <div className="absolute bottom-[-200px] left-[900px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-05.jpg`}
          variant="desktop"
          className="absolute h-[400px] w-[400px]"
        />
      </div>
      <div className="absolute top-[-20px] left-[1200px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-06.jpg`}
          variant="desktop"
          className="absolute h-[400px] w-[300px]"
        />
      </div>
      <div className="absolute top-[50px] left-[650px] -z-10">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-07.jpg`}
          variant="desktop"
          className="absolute h-[300px] w-[300px]"
        />
      </div>
      <div className="absolute bottom-[-100px] left-[1450px] -z-10">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-08.jpg`}
          variant="desktop"
          className="absolute h-[300px] w-[300px]"
        />
      </div>
    </div>
  );
};

export default ImageParallax;
