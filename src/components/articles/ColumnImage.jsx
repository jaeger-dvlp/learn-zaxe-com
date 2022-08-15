import React from 'react';
import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';

function ColumnImage({ children, image: imagePath }) {
  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <section className="w-full xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </section>
      <section
        className="relative p-0 !border-none w-full overflow-hidden shadow-xl shadow-black/30
      rounded-xl xl:min-h-[20rem] lg:min-h-[20rem] min-h-[12.5rem]"
      >
        <Image
          src={imagePath}
          layout="fill"
          className="object-cover p-0 !border-none object-center w-full h-full"
        />
        <a
          href={imagePath}
          target="_blank"
          className="absolute right-3 top-3 z-[3] text-2xl text-zinc-100 p-1 hover:bg-white/10 rounded-lg transition-all duration-200"
          rel="noreferrer"
        >
          <BiLinkExternal />
        </a>
      </section>
    </section>
  );
}

export default ColumnImage;
