import React from 'react';

import { BsArrowsFullscreen, BsLink45Deg } from 'react-icons/bs';
import { useAppContext } from '../contexts/AppContext';

function ImageButtons({ props }) {
  const { type, imageURL, sliderSlides, activeSlide } = props;
  const { CDNURL } = process.env;
  const { activateFullScreenViewer } = useAppContext();

  return (
    <div className="absolute flex items-center justify-center gap-3 image-controls right-3 top-3">
      <button
        type="button"
        onClick={() => {
          if (type === 'slider') {
            return activateFullScreenViewer({
              sliderSlides,
              activeSlide,
              viewMode: 'slider',
            });
          }
          return activateFullScreenViewer({
            imageURL,
          });
        }}
        className="image-fullscreen-button backdrop-blur-sm z-[3] flex justify-center items-center text-zinc-100 p-2 hover:bg-zaxe bg-black/50 shadow-md shadow-black/25 rounded-md transition-all duration-200"
      >
        <BsArrowsFullscreen className="w-5 h-5" />
      </button>
      <a
        href={`${CDNURL}${imageURL}`}
        target="_blank"
        className="image-button backdrop-blur-sm z-[3] flex justify-center items-center text-zinc-100 p-2 hover:bg-zaxe bg-black/50 rounded-md shadow-md shadow-black/25 transition-all duration-200"
        rel="noreferrer"
      >
        <BsLink45Deg className="w-5 h-5" />
      </a>
    </div>
  );
}

export default ImageButtons;
