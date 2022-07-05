import Image from 'next/image';
import React from 'react';
import Images from '../images/Images';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <div className="w-full bg-transparent p-0 flex flex-wrap justify-center items-center absolute left-0 top-0">
      <div className="w-full relative bg-white max-w-zaxe flex flex-wrap justify-center items-center p-5">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="w-full max-w-[125px] block">
          <Image
            alt="Zaxe Knowledge Base Logo"
            src={Images.logo.zxkb}
            className="w-full h-full hover:scale-90 transition-all duration-150"
            layout="responsive"
          />
        </a>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
