import React from 'react';
import { BsX } from 'react-icons/bs';
import { VscLinkExternal } from 'react-icons/vsc';
import { useAppContext } from '../contexts/AppContext';

function VideoPopup() {
  const {
    videoPopup: {
      inHTML,
      isActive,
      video: { url: videoUrl, poster: videoPoster, title: videoTitle },
    },
    deactivateVideoPopup,
  } = useAppContext();

  return (
    inHTML && (
      <div
        className={`${
          isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
        } video-popup font-zaxe transition-all duration-300 z-[200] fixed top-0 left-0 flex items-center justify-center w-full h-full p-5 bg-black/50`}
      >
        <div className="relative w-full p-3 bg-white shadow-xl max-w-app rounded-xl">
          <div className="absolute left-0 flex flex-wrap items-center justify-between w-full gap-2 p-0 m-0 -translate-y-full -top-1">
            <h1 className="p-2 px-3 font-semibold bg-white rounded-lg text-zaxe">
              {videoTitle}
            </h1>
            <div className="flex items-center justify-center gap-2 p-0 min-w-fit">
              <a
                className="flex items-center justify-center w-10 h-10 p-2 text-3xl text-center transition-all duration-200 bg-white rounded-lg hover:bg-zaxe hover:text-white text-zaxe"
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <VscLinkExternal />
              </a>
              <button
                type="button"
                onClick={() => deactivateVideoPopup()}
                className="flex items-center justify-center w-10 h-10 p-0 text-3xl text-center transition-all duration-200 bg-white rounded-lg hover:bg-zaxe hover:text-white text-zaxe"
              >
                <BsX />
              </button>
            </div>
          </div>
          <video
            className="relative max-h-[70vh] bg-zinc-800 object-cover z-[201] w-full h-full"
            poster={videoPoster}
            playsInline
            controls
          >
            <track kind="captions" />
            {videoUrl && <source src={videoUrl} type="video/mp4" />}
          </video>
        </div>
      </div>
    )
  );
}

export default VideoPopup;
