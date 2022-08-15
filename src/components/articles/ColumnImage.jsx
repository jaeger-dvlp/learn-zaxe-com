import React from 'react';
import Image from 'next/image';

function ColumnImage({ children, image }) {
  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <section className="w-full xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </section>
      <section className="relative p-0 !border-none w-full overflow-hidden shadow-xl rounded-xl min-h-[20rem]">
        <Image
          src={image}
          layout="fill"
          className="object-cover p-0 !border-none object-center w-full h-full"
        />
      </section>
    </section>
  );
}

export default ColumnImage;
