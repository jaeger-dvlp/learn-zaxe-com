/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

function ColumnSlider({ children, images: sliderImages, uniqueSubject }) {
  const [sliderSlides] = React.useState(sliderImages);
  const [activeSlide, setActiveSlide] = React.useState(0);
  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <section className="w-full xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </section>
      <section
        className="relative bg-zinc-800 p-0 !border-none w-full overflow-hidden shadow-xl shadow-black/30
      rounded-xl xl:min-h-[20rem] lg:min-h-[20rem] min-h-[12.5rem]"
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
          className="absolute w-8 flex justify-center items-center h-8 text-xl disabled:invisible disabled:opacity-0 text-zinc-100 active:scale-75 p-0
          hover:bg-white/30 bg-black/30 rounded-lg transition-all duration-200 z-[5] left-5 top-1/2 -translate-y-1/2 m-0"
        >
          <BsArrowLeft className="p-0 m-0 pointer-events-none" />
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
          className="absolute w-8 flex justify-center items-center h-8 text-xl disabled:invisible disabled:opacity-0 text-zinc-100 active:scale-75 p-0
          hover:bg-white/30 bg-black/30 rounded-lg transition-all duration-200 z-[5] right-5 top-1/2 -translate-y-1/2 m-0"
        >
          <BsArrowRight className="p-0 m-0 pointer-events-none" />
        </button>
        {sliderImages.map(({ imageURL, imageALT }, index) => (
          <section
            // eslint-disable-next-line react/no-array-index-key
            key={`${uniqueSubject}-slider-no-${index}`}
            className={`${
              index === activeSlide
                ? 'opacity-100 visible pointer-events-auto'
                : 'opacity-0 invisible pointer-events-none'
            } transition-all duration-700 absolute rounded-xl overflow-hidden left-0 top-0 flex items-center justify-center w-full h-full`}
          >
            <Image
              src={imageURL}
              layout="fill"
              alt={imageALT}
              className="object-cover slider-image absolute left-0 top-0 p-0 !border-none object-center w-full h-full"
            />
            <a
              href={imageURL}
              target="_blank"
              className="absolute image-external-link right-3 top-3 z-[3] text-2xl text-zinc-100 p-1 hover:bg-white/30 bg-black/30 rounded-lg transition-all duration-200"
              rel="noreferrer"
            >
              <BiLinkExternal />
            </a>
          </section>
        ))}
        <div className="slider-button-container absolute bottom-0 left-1/2 flex justify-center items-center gap-2 -translate-x-1/2 py-4 z-[6]">
          {sliderImages.map((image, slideIndex) => (
            <button
              key={`${uniqueSubject}-slider-button-no-${slideIndex}`}
              type="button"
              onClick={() => setActiveSlide(slideIndex)}
              className={`${
                slideIndex === activeSlide
                  ? 'bg-white scale-100'
                  : ' bg-white/60 hover:bg-white/80 scale-75'
              } w-4 h-4 slider-button transition-all duration-500 bg-white rounded-full border border-zinc-500`}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default ColumnSlider;
