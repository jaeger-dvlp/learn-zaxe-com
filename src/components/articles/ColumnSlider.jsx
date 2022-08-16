/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'next/image';
import {
  BsArrowsFullscreen,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
} from 'react-icons/bs';
import { VscLinkExternal } from 'react-icons/vsc';
import { useAppContext } from '../contexts/AppContext';

function ColumnSlider({ children, images: sliderImages, uniqueSubject }) {
  const [sliderSlides] = React.useState(sliderImages);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const { activateFullScreenViewer } = useAppContext();
  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <section className="w-full xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </section>
      <section
        className="relative bg-zinc-800 p-0 !border-none w-full shadow-xl shadow-black/30
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
            <div className="absolute flex items-center justify-center gap-3 right-3 top-3">
              <button
                type="button"
                onClick={() => activateFullScreenViewer({ imageURL })}
                className="image-fullscreen-button z-[3] text-2xl text-zinc-300 p-1 hover:bg-white/30 bg-black/30 rounded-md transition-all duration-200"
              >
                <BsArrowsFullscreen className="p-0.5" />
              </button>
              <a
                href={imageURL}
                target="_blank"
                className="image-external-link z-[3] text-2xl text-white p-1 hover:bg-white/30 bg-black/30 rounded-md transition-all duration-200"
                rel="noreferrer"
              >
                <VscLinkExternal className="p-0.5 m-0" />
              </a>
            </div>
          </section>
        ))}
        <div className="slider-button-container absolute top-full left-1/2 flex justify-center items-center gap-2 -translate-x-1/2 py-4 z-[6]">
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
        </div>
      </section>
    </section>
  );
}

export default ColumnSlider;
