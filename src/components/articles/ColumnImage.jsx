import React from 'react';
import Image from 'next/image';
import { VscLinkExternal } from 'react-icons/vsc';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { useAppContext } from '../contexts/AppContext';

function ColumnImage({ children, image: { imageURL, imageALT } }) {
  const { activateFullScreenViewer } = useAppContext();
  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <section className="w-full xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </section>
      <section
        className="relative p-0 !border-none w-full overflow-hidden shadow-xl shadow-black/30
      rounded-xl xl:h-[20rem] lg:h-[20rem] md:h-[17rem] h-[13rem]"
      >
        <Image
          src={imageURL}
          alt={imageALT}
          layout="fill"
          className="object-cover p-0 !border-none object-center w-full h-full"
        />
        <div className="absolute flex items-center justify-center gap-3 right-3 top-3">
          <button
            type="button"
            onClick={() =>
              activateFullScreenViewer({ imageURL, viewMode: 'single' })
            }
            className="image-fullscreen-button z-[3] text-2xl text-zinc-100 p-1 hover:bg-white/30 bg-black/30 rounded-md transition-all duration-200"
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
    </section>
  );
}

export default ColumnImage;
