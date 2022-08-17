import React from 'react';
import Image from 'next/image';
import ImageControl from './ImageControls';

function ColumnImage({ children, image: { imageURL, imageALT } }) {
  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <section className="w-full xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </section>
      <section
        className="relative bg-zinc-800 border border-zinc-300 p-0 w-full overflow-hidden shadow-2xl shadow-black/25
      rounded-xl xl:h-[20rem] lg:h-[20rem] md:h-[17rem] h-[13rem]"
      >
        <Image
          src={imageURL}
          alt={imageALT}
          layout="fill"
          className="object-cover p-0 !border-none object-center w-full h-full"
        />
        <ImageControl props={{ type: 'single', imageURL }} />
      </section>
    </section>
  );
}

export default ColumnImage;
