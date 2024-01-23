'use client';

import * as React from 'react';
import clsx from 'clsx';
import useEmblaCardsCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

type CardsCarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCardsCarousel>;
type CardsCarouselOptions = UseCarouselParameters[0];
type CardsCarouselPlugin = UseCarouselParameters[1];

type CardsCarouselProps = {
  opts?: CardsCarouselOptions;
  plugins?: CardsCarouselPlugin[];
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CardsCarouselApi) => void;
};

type CardsCarouselContextProps = {
  CardsCarouselRef: ReturnType<typeof useEmblaCardsCarousel>[0];
  api: ReturnType<typeof useEmblaCardsCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CardsCarouselProps;

const CardsCarouselContext = React.createContext<CardsCarouselContextProps | null>(null);

const useCardsCarousel = (): CardsCarouselContextProps => {
  const context = React.useContext(CardsCarouselContext);

  if (!context) {
    throw new Error('useCardsCarousel must be used within a <CardsCarousel />');
  }

  return context;
};

const CardsCarousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardsCarouselProps
>(({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
  const [CardsCarouselRef, api] = useEmblaCardsCarousel({
    ...opts,
    axis: orientation === 'horizontal' ? 'x' : 'y',
  });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CardsCarouselApi) => {
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
    <CardsCarouselContext.Provider
      value={{
        CardsCarouselRef,
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
        aria-roledescription="CardsCarousel"
        {...props}
      >
        {children}
      </div>
    </CardsCarouselContext.Provider>
  );
});
CardsCarousel.displayName = 'CardsCarousel';

const CardsCarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { CardsCarouselRef, orientation } = useCardsCarousel();

    return (
      <div
        ref={CardsCarouselRef}
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
CardsCarouselContent.displayName = 'CardsCarouselContent';

const CardsCarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCardsCarousel();

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
CardsCarouselItem.displayName = 'CardsCarouselItem';

export { CardsCarousel, type CardsCarouselApi, CardsCarouselContent, CardsCarouselItem };
