import React from 'react';
import Image from 'next/image';
import { BsX, BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { useAppContext } from '@/src/components/contexts/AppContext';

function FullScreenViewer() {
  const { CDNURL } = process.env;
  const {
    fullScreenViewer: {
      viewMode,
      imageURL,
      visibility,
      inHTML,
      sliderSlides,
      activeSlide,
    },
    deactivateFullScreenViewer,
  } = useAppContext();
  const [currentSlide, setCurrentSlide] = React.useState(null);

  React.useEffect(() => setCurrentSlide(activeSlide), [activeSlide]);

  return (
    inHTML && (
      <div
        className={`${
          visibility && '!opacity-100 !visible'
        } zx-full-screen-viewer p-5 z-[20] opacity-0 invisible overflow-hidden transition-all
		duration-300 fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black/90`}
      >
        <button
          type="button"
          className="absolute hover:bg-white transition-all duration-150 top-2 z-[3]
		  right-2 shadow-xl rounded-lg p-1 text-5xl text-white bg-zaxe hover:text-black"
          onClick={() => {
            deactivateFullScreenViewer();
          }}
        >
          <BsX />
        </button>
        <div className="w-full relative flex items-center justify-center h-full max-h-[90vh] z-[2]">
          {viewMode === 'slider' && sliderSlides ? (
            sliderSlides.map(({ imageURL: slideImage, uniqueId }, index) => (
              <Image
                className={`${
                  currentSlide === index
                    ? 'opacity-100 visible '
                    : 'opacity-0 invisible '
                } object-contain transition-all duration-300 absolute left-0 top-0 border bg-transparent !border-none object-center`}
                layout="fill"
                alt="ZX Full Screen Viewer"
                key={`fullscreen-slide-${uniqueId}`}
                src={`${CDNURL}${slideImage}`}
                placeholder="blur"
                blurDataURL="https://cdn.zaxe.com/knowledge-base/img/zaxe-placeholder.webp"
              />
            ))
          ) : (
            <Image
              src={`${
                imageURL
                  ? `${CDNURL}${imageURL}`
                  : 'https://cdn.zaxe.com/knowledge-base/img/zaxe-placeholder.webp'
              }`}
              layout="fill"
              alt="ZX Full Screen Viewer"
              className="object-contain border bg-transparent !border-none object-center"
              placeholder="blur"
              blurDataURL="https://cdn.zaxe.com/knowledge-base/img/zaxe-placeholder.webp"
            />
          )}
        </div>
        {viewMode === 'slider' && (
          <>
            <button
              type="button"
              onClick={() => {
                if (currentSlide < sliderSlides.length - 1) {
                  setCurrentSlide(currentSlide + 1);
                }
              }}
              disabled={currentSlide === sliderSlides.length - 1}
              className="absolute rounded-lg z-[3] pointer-events-auto disabled:!pointer-events-none disabled:!bg-gray-600 disabled:!text-white right-2 p-1 text-3xl text-white transition-all duration-150 -translate-y-1/2 top-1/2 bg-zaxe hover:bg-white hover:text-black"
            >
              <BsChevronRight />
            </button>
            <button
              type="button"
              onClick={() => {
                if (currentSlide > 0) {
                  setCurrentSlide(currentSlide - 1);
                }
              }}
              disabled={currentSlide === 0}
              className="absolute rounded-lg z-[3] pointer-events-auto disabled:!pointer-events-none disabled:!bg-gray-600 disabled:!text-white left-2 p-1 text-3xl text-white transition-all duration-150 -translate-y-1/2 top-1/2 bg-zaxe hover:bg-white hover:text-black"
            >
              <BsChevronLeft />
            </button>
          </>
        )}
      </div>
    )
  );
}

export default FullScreenViewer;
