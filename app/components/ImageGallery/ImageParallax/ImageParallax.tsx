import Image from 'next/image';
import { ReactElement } from 'react';
import ImageModal from '../ImageCarousel/ImageModal/ImageModal';

const ImageParallax = (): ReactElement => {
  return (
    <div className="container-base h-[600px] mt-20 relative">
      <h3 className="absolute text-7xl font-bold text-accent bg-transaprent text-nowrap top-[100px] left-[300px] z-20 drop-shadow-xl">
        SOLA ENOTRIA
      </h3>
      <div className="absolute top-[-50px] left-[-100px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-01.jpg`}
          variant="desktop"
          className="h-[300px] w-[350px]"
        />
      </div>
      <div className="absolute top-[0px] left-[400px] z-10">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-02.jpg`}
          variant="desktop"
          className="h-[400px] w-[200px]"
        />
      </div>
      <div className="absolute bottom-[200px] left-[100px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-04.jpg`}
          variant="desktop"
          className="absolute h-[200px] w-[200px]"
        />
      </div>
      <div className="absolute top-[50px] left-[450px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-05.jpg`}
          variant="desktop"
          className="absolute h-[400px] w-[400px]"
        />
      </div>
      <div className="absolute top-[0px] right-[-50px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-06.jpg`}
          variant="desktop"
          className="absolute h-[400px] w-[300px]"
        />
      </div>
      <div className="absolute bottom-[50px] right-[0px]">
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
