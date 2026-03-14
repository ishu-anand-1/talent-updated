import React, { createContext, useContext, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "../../utils/cn";
import { Button } from "./button";

const CarouselContext = createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used inside Carousel");
  return context;
}

export function Carousel({
  orientation = "horizontal",
  opts,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "flex-col -mt-4",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();

  return (
    <div
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
}

export function CarouselPrevious({ className, ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-10 -translate-y-1/2"
          : "-top-10 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft size={16} />
    </Button>
  );
}

export function CarouselNext({ className, ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-10 -translate-y-1/2"
          : "-bottom-10 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight size={16} />
    </Button>
  );
}