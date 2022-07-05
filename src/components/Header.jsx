import Image from 'next/image';
import React from 'react';
import Images from '../images/Images';

export default function Header() {
  return (
    <div className="w-full bg-transparent p-5 flex flex-wrap justify-center items-center absolute left-0 top-0">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="w-full max-w-[200px] block h-full max-h-[87px]">
        <Image
          alt="Zaxe Knowledge Base Logo"
          src={Images.logo.zxkb}
          className="w-full h-full hover:scale-90 transition-all duration-150"
          layout="responsive"
        />
      </a>
    </div>
  );
}
