import React from 'react';
import Image from 'next/future/image';
import ImageControls from './ImageControls';

function ColumnImage({ children, image: { imageURL, imageALT } }) {
  const { CDNURL } = process.env;
  const ImageSourceURL = imageURL.includes('http')
    ? imageURL
    : `${CDNURL}${imageURL}`;

  return (
    <section className="flex flex-wrap-reverse items-center w-full h-full gap-5 xl:gap-10 lg:gap-10 xl:flex-nowrap lg:flex-nowrap post-column">
      <figure className="bg-zinc-300 relative border border-zinc-300 p-0 w-full overflow-hidden shadow-lg  rounded-xl xl:h-[20rem] lg:h-[20rem] md:h-[17rem] h-[13rem]">
        <Image
          src={ImageSourceURL}
          alt={imageALT}
          layout="fill"
          className="object-cover p-0 !border-none object-center w-full h-full"
        />
        <ImageControls props={{ type: 'single', imageURL }} />
      </figure>
      <aside className="w-full text-justify -order-1 xl:max-w-[45%] lg:max-w-[45%] max-w-full">
        {children}
      </aside>
    </section>
  );
}

export default ColumnImage;
