import React from 'react';
import Image from 'next/future/image';
import ImageControls from './ImageControls';

function ColumnImage({ children, image: { imageURL, imageALT } }) {
  const { CDNURL } = process.env;
  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <figure
        className="relative bg-zinc-800 border border-zinc-300 p-0 w-full overflow-hidden shadow-2xl shadow-black/25
      rounded-xl xl:h-[20rem] lg:h-[20rem] md:h-[17rem] h-[13rem]"
      >
        <Image
          src={`${CDNURL}${imageURL}`}
          alt={imageALT}
          layout="fill"
          className="object-cover p-0 !border-none object-center w-full h-full"
        />
        <ImageControls props={{ type: 'single', imageURL }} />
      </figure>
      <article className="w-full -order-1 xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </article>
    </section>
  );
}

export default ColumnImage;
