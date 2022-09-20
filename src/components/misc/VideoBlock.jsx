import React from 'react';
import Image from 'next/future/image';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';
import { BsFillPlayFill } from 'react-icons/bs';
import { useAppContext } from '@/src/components/contexts/AppContext';

function VideoBlock({ props }) {
  const { label, videoURL, poster, productName } = props;
  const { activateVideoPopup } = useAppContext();
  const { t } = useTranslation();
  const playVideo = () => {
    activateVideoPopup({
      video: {
        title: `${t(label)} | ${productName}`,
        url: videoURL,
        poster,
      },
    });
  };

  return (
    <div
      onClick={() => playVideo()}
      onKeyPress={() => playVideo()}
      role="button"
      tabIndex={0}
      className="relative grid w-full max-w-xs grid-cols-1 gap-0 p-0 m-0 group place-content-start place-items-center"
    >
      <div className="w-full p-0 overflow-hidden cursor-pointer relative bg-white rounded-2xl h-[195px] shadow-xl grid grid-cols-1 place-content-center place-items-center gap-0">
        <span className="absolute pointer-events-none bottom-0 left-0 z-[4] m-3 p-1 px-2 text-white rounded-md bg-zaxe shadow-md text-xs">
          {Content.products.find(({ name }) => name === productName).name ||
            'Video'}
        </span>
        <div className="relative block w-full overflow-hidden z-[1]">
          <Image
            src={poster}
            alt={t(label)}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-full bg-black/40 group-hover:bg-black/10 group-focus-within:bg-black/10 transition-all duration-200 absolute left-0 top-0 z-[3]" />
        <BsFillPlayFill className="absolute group-hover:scale-125 z-[3] group-hover:text-zaxe group-focus-within:scale-125 group-focus-within:text-zaxe transition-all duration-200 text-zinc-200 text-6xl text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
      </div>
      <div className="w-full -mt-2 max-w-[80%] group-hover:bg-zaxe group-focus-within:bg-zaxe transition-all duration-200 bg-[#232323] p-3 pt-4 rounded-b-2xl text-center grid gridcols-1 place-content-center place-items-center">
        <span className="text-center transition-all duration-200 text-zinc-200 group-hover:text-white group-focus-within:text-white">
          {t(label)}
        </span>
        <span className="text-xs text-center transition-all duration-200 text-zinc-400 group-hover:text-zinc-300 group-focus-within:text-zinc-300">
          Video
        </span>
      </div>
    </div>
  );
}

export default VideoBlock;
