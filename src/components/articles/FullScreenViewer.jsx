import React from 'react';
import Image from 'next/image';
import { BsX } from 'react-icons/bs';
import { useAppContext } from '../contexts/AppContext';

function FullScreenViewer() {
  const {
    fullScreenViewer: { /* viewMode, */ imageURL, visibility, inHTML },
    deactivateFullScreenViewer,
  } = useAppContext();

  // TODO - add viewMode to fullScreenViewer for Sliders

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
          className="absolute hover:bg-white transition-all duration-150 top-0 z-[3]
		  right-0 p-1 text-5xl text-white bg-zaxe hover:text-black"
          onClick={() => {
            deactivateFullScreenViewer();
          }}
        >
          <BsX />
        </button>
        <div className="w-full relative flex items-center justify-center h-full max-h-[90vh] z-[2]">
          <Image
            src={imageURL || '/kb-img/placeholder.png'}
            layout="fill"
            alt="ZX Full Screen Viewer"
            className="object-contain border bg-transparent !border-none object-center"
          />
        </div>
      </div>
    )
  );
}

export default FullScreenViewer;
