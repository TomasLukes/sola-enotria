'use client';

import * as React from 'react';
import clsx from 'clsx';
import useEmblaImageCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

type ImageCarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaImageCarousel>;
type ImageCarouselOptions = UseCarouselParameters[0];
type ImageCarouselPlugin = UseCarouselParameters[1];

type ImageCarouselProps = {
  opts?: ImageCarouselOptions;
  plugins?: ImageCarouselPlugin[];
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: ImageCarouselApi) => void;
};

type ImageCarouselContextProps = {
  ImageCarouselRef: ReturnType<typeof useEmblaImageCarousel>[0];
  api: ReturnType<typeof useEmblaImageCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & ImageCarouselProps;

const ImageCarouselContext = React.createContext<ImageCarouselContextProps | null>(null);

const useImageCarousel = (): ImageCarouselContextProps => {
  const context = React.useContext(ImageCarouselContext);

  if (!context) {
    throw new Error('useImageCarousel must be used within a <ImageCarousel />');
  }

  return context;
};

const ImageCarousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & ImageCarouselProps
>(({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
  const [ImageCarouselRef, api] = useEmblaImageCarousel({
    ...opts,
    axis: orientation === 'horizontal' ? 'x' : 'y',
  });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: ImageCarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return (): void => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <ImageCarouselContext.Provider
      value={{
        ImageCarouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={clsx('relative', className)}
        role="region"
        aria-roledescription="ImageCarousel"
        {...props}
      >
        {children}
      </div>
    </ImageCarouselContext.Provider>
  );
});
ImageCarousel.displayName = 'ImageCarousel';

const ImageCarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { ImageCarouselRef, orientation } = useImageCarousel();

    return (
      <div
        ref={ImageCarouselRef}
        className="overflow-x-hidden overflow-y-visible lg:overflow-visible"
      >
        <div
          ref={ref}
          className={clsx('flex', orientation === 'horizontal' ? '' : 'flex-col', className)}
          {...props}
        />
      </div>
    );
  }
);
ImageCarouselContent.displayName = 'ImageCarouselContent';

const ImageCarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useImageCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={clsx(
          '',
          orientation === 'horizontal' ? 'first:pl-4 first:lg:pl-0 pr-4 lg:pr-10' : 'pt-4',
          className
        )}
        {...props}
      />
    );
  }
);
ImageCarouselItem.displayName = 'ImageCarouselItem';

export { ImageCarousel, type ImageCarouselApi, ImageCarouselContent, ImageCarouselItem };
