import Image from 'next/image';
import { ReactElement } from 'react';
import ImageModal from '../ImageCarousel/ImageModal/ImageModal';

const ImageParallax = (): ReactElement => {
  return (
    <div className="h-[800px] mt-20 relative">
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
      <div className="absolute bottom-[50px] right-[250px]">
        <ImageModal
          imgSrc={`/assets/restaurant/interier-03.jpg`}
          variant="desktop"
          className="absolute h-[300px] w-[300px]"
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
      <div className="absolute bottom-[-10px] right-[10px] ">
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
