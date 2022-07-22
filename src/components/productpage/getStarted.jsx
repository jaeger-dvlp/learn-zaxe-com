import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { BsFillPlayFill } from 'react-icons/bs';

function GetStarted({ product }) {
  const { t } = useTranslation();
  const { starterVideos } = product.content || null;
  const playVideo = ({ label, videoURL }) => alert(`${t(label)} - ${videoURL}`);

  return (
    <div
      data-aos="fade"
      data-aos-delay={400}
      data-aos-duration={500}
      className="grid w-full grid-cols-1 p-0 m-0 bg-white place-content-start place-items-center"
    >
      <div className="grid w-full grid-cols-1 gap-20 p-5 py-20 max-w-app place-content-start place-items-center">
        <h1 className="text-4xl font-bold text-zaxe">
          {t('product-page-components.get-started.title')}
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-16">
          {starterVideos &&
            starterVideos.map(({ label, thumbnail, videoURL }) => (
              <div
                key={`${label}Video`}
                onClick={() => playVideo({ label, videoURL })}
                onKeyPress={() => playVideo({ label, videoURL })}
                role="button"
                tabIndex={0}
                className="relative grid w-full max-w-xs grid-cols-1 gap-0 p-0 m-0 group place-content-start place-items-center"
              >
                <div className="w-full p-0 overflow-hidden cursor-pointer relative bg-white rounded-2xl h-[195px] shadow-xl grid grid-cols-1 place-content-center place-items-center gap-0">
                  <div className="relative block w-full overflow-hidden z-[1]">
                    <Image
                      src={thumbnail}
                      alt={label}
                      layout="responsive"
                      objectFit="contain"
                      objectPosition="center"
                      height="100%"
                      width="100%"
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
            ))}
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
