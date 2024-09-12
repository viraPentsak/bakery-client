import React, {useCallback} from "react";
import {EmblaOptionsType} from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react";
import {CgChevronLeftO, CgChevronRightO} from "react-icons/cg";
import {twMerge} from "tw-merge";
import clsx from "clsx";

interface ArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    next?: boolean,
}

const Arrow: React.FC<ArrowProps> = ({children, next, ...rest}) => {
    const className: string = next ? "right-0" : "left-0";

    return (
        <button
            className={`text-4xl md:text-2xl hover:text-straw-700 flex flex-col justify-center transition-colors absolute top-0 bottom-0 disabled:opacity-50 ${className}`}
            {...rest}>
            {children}
        </button>
    )
}


interface CarouselProps {
    options?: EmblaOptionsType,
    slides: React.ReactNode[],
    slideClassName?: string
    // containerClassName?: string
}

const Carousel: React.FC<CarouselProps> = (props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(props.options);

    const slideCN = twMerge(clsx("flex-grow-0 flex-shrink-0 basis-full max-w-full px-3.5", props.slideClassName));

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    const nextArrowDisabled = !(emblaApi && emblaApi.canScrollNext());
    const prevArrowDisabled = !(emblaApi && emblaApi.canScrollPrev());

    return (
        <div className="px-6 relative">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {props.slides.map((slide, index) => {
                        return <div className={slideCN}
                                    key={`slide-${index}`}>
                            {slide}
                        </div>
                    })}
                </div>
            </div>

            <Arrow aria-description="previous slide" onClick={scrollPrev} disabled={prevArrowDisabled}>
                <CgChevronLeftO/>
            </Arrow>
            <Arrow aria-description="next slide" onClick={scrollNext} next disabled={nextArrowDisabled}>
                <CgChevronRightO/>
            </Arrow>
        </div>
    );
};

export default Carousel;