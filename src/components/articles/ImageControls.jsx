import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import { BsArrowsFullscreen } from 'react-icons/bs';
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
        className="image-fullscreen-button backdrop-blur-sm z-[3] text-2xl text-zinc-100 p-1 hover:bg-zaxe bg-black/50 rounded-md transition-all duration-200"
      >
        <BsArrowsFullscreen className="p-0.5" />
      </button>
      <a
        href={`${CDNURL}${imageURL}`}
        target="_blank"
        className="image-button backdrop-blur-sm z-[3] text-2xl text-zinc-100 p-1 hover:bg-zaxe bg-black/50 rounded-md transition-all duration-200"
        rel="noreferrer"
      >
        <VscLinkExternal className="p-0.5 m-0" />
      </a>
    </div>
  );
}

export default ImageButtons;
