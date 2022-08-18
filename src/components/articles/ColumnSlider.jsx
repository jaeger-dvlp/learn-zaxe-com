/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'next/future/image';
import ImageControls from '@/src/components/articles/ImageControls';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

function ColumnSlider({ children, images: sliderImages, uniqueSubject }) {
  const { CDNURL } = process.env;
  const [sliderSlides] = React.useState(sliderImages);
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <section
        className="relative bg-zinc-800 border border-zinc-300 p-0 w-full shadow-2xl shadow-black/25
      rounded-xl xl:h-[20rem] lg:h-[20rem] md:h-[17rem] h-[13rem]"
      >
        <button
          type="button"
          onClick={() => {
            if (activeSlide !== 0) {
              return setActiveSlide(activeSlide - 1);
            }
            return false;
          }}
          disabled={activeSlide === 0}
          className="absolute w-8 flex justify-center ring-0 active:ring-2 ring-sky-500/50 items-center h-8 text-xl disabled:invisible disabled:opacity-0 text-zinc-100 p-0 py-10
          hover:bg-zaxe hover:text-white bg-black rounded-lg transition-all duration-200 z-[5] left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 m-0"
        >
          <BsFillCaretLeftFill className="p-0 m-0 pointer-events-none" />
        </button>
        <button
          type="button"
          onClick={() => {
            if (activeSlide !== sliderSlides.length - 1) {
              return setActiveSlide(activeSlide + 1);
            }
            return false;
          }}
          disabled={activeSlide === sliderSlides.length - 1}
          className="absolute w-8 flex justify-center ring-0 active:ring-2 ring-sky-500/50 items-center h-8 text-xl disabled:invisible disabled:opacity-0 text-zinc-100 p-0 py-10
          hover:bg-zaxe hover:text-white bg-black rounded-lg transition-all duration-200 z-[5] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 m-0"
        >
          <BsFillCaretRightFill className="p-0 m-0 pointer-events-none" />
        </button>
        {sliderImages.map(({ imageURL, imageALT }, index) => (
          <figure
            className={`${
              index === activeSlide
                ? 'opacity-100 visible pointer-events-auto'
                : 'opacity-0 invisible pointer-events-none'
            } transition-all duration-700 absolute rounded-xl overflow-hidden left-0 top-0 flex items-center justify-center w-full h-full`}
          >
            <Image
              key={`${uniqueSubject}-slider-no-${index}`}
              src={`${CDNURL}${imageURL}`}
              layout="fill"
              alt={imageALT}
              className={` ${
                index === activeSlide
                  ? 'opacity-100 visible pointer-events-auto'
                  : 'opacity-0 invisible pointer-events-none'
              } object-cover transition-all duration-700 rounded-xl overflow-hidden slider-image absolute left-0 top-0 p-0 !border-none object-center w-full h-full`}
            />
            <ImageControls
              props={{ type: 'slider', sliderImages, activeSlide, imageURL }}
            />
          </figure>
        ))}
        <section className="slider-button-container absolute top-full left-1/2 flex justify-center items-center gap-2 -translate-x-1/2 py-4 z-[6]">
          {sliderImages.map((image, slideIndex) => (
            <button
              key={`${uniqueSubject}-slider-button-no-${slideIndex}`}
              type="button"
              onClick={() => setActiveSlide(slideIndex)}
              className={`${
                slideIndex === activeSlide
                  ? 'bg-zaxe scale-100'
                  : ' bg-zaxe/60 hover:bg-zaxe/80 scale-75'
              } w-4 h-4 slider-button transition-all duration-500 bg-zaxe rounded-full border border-zaxe`}
            />
          ))}
        </section>
      </section>
      <article className="w-full -order-2 xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </article>
    </section>
  );
}

export default ColumnSlider;
