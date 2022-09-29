import React from 'react';
import Image from 'next/future/image';
import Images from '@/src/images/Images';
import ImageControls from '@/src/components/articles/ImageControls';

function ArticleImage({ className, image: { imageURL, imageALT } }) {
  const { CDNURL } = process.env;
  const ImageSourceURL = imageURL.includes('http')
    ? imageURL
    : `${CDNURL}${imageURL}`;
  return (
    <figure
      className={`${className} bg-zinc-300 relative border border-zinc-300 p-0 w-full overflow-hidden shadow-lg rounded-xl xl:h-[20rem] lg:h-[20rem] md:h-[17rem] h-[13rem]`}
    >
      <Image
        src={ImageSourceURL}
        alt={imageALT}
        placeholder={Images.placeholder}
        layout="fill"
        className="object-cover p-0 !border-none object-center w-full h-full"
      />
      <ImageControls props={{ type: 'single', imageURL }} />
    </figure>
  );
}

export default ArticleImage;
