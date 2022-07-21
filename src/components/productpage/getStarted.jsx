import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

function GetStarted({ product }) {
  const { starterVideos } = product.content || null;
  const { t } = useTranslation();
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
            starterVideos.map(({ label }) => (
              <div className="relative grid w-full max-w-xs grid-cols-1 gap-0 p-0 m-0 group place-content-start place-items-center">
                <div className="w-full overflow-hidden cursor-pointer relative bg-white border border-zinc-100 rounded-2xl h-[195px] shadow-xl flex justify-center items-center">
                  <BsFillPlayFill className="absolute group-hover:scale-125 group-hover:text-zaxe transition-all duration-150 text-[#232323] text-6xl text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                </div>
                <div className="w-full max-w-[80%] group-hover:bg-zaxe transition-all duration-150 bg-[#232323] p-3 rounded-b-2xl text-center grid gridcols-1 place-content-center place-items-center">
                  <span className="text-center text-white">{t(label)}</span>
                  <span className="text-xs text-center text-zinc-400 ">
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
