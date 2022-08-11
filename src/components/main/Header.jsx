import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Images from '@/src/images/Images';
import LanguageSwitcher from '@/src/components/main/LanguageSwitcher';

function Header() {
  return (
    <div className="absolute top-0 left-0 flex flex-wrap items-center justify-center w-full p-0 bg-transparent">
      <div className="relative flex flex-wrap items-center justify-center w-full p-5 bg-transparent max-w-app">
        <Link href="/" locale={useRouter().locale}>
          <a className="w-full xl:max-w-[200px] lg:max-w-[200px] max-w-[100px] block">
            <Image
              placeholder="blur"
              alt="Zaxe Knowledge Base Logo"
              src={Images.logo.zxkb}
              className="w-full h-full transition-all duration-150 hover:scale-90"
              layout="responsive"
            />
          </a>
        </Link>
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Header;
