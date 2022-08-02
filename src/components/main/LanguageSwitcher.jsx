import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaChevronDown } from 'react-icons/fa';

function LanguageSwitcher() {
  const { locale, locales, asPath } = useRouter();

  return (
    <div className="absolute group grid grid-cols-1 place-content-start place-items-start min-w-[60px] font-zaxe right-5 top-1/2 -translate-y-1/2 text-[#585858]">
      <div className="w-full grid grid-cols-2 place-items-center border border-[#585858] px-2 p-0 rounded-sm">
        <div className="w-full text-sm transition-all duration-300">
          {locale.toUpperCase()}
        </div>
        <div className="flex justify-end w-full">
          <FaChevronDown className="text-xs transition-all duration-300 group-hover:rotate-180" />
        </div>
      </div>
      <div className="absolute left-0 grid invisible w-full grid-cols-1 gap-1 p-0 pt-2 m-0 transition-all duration-300 scale-75 -translate-y-2 opacity-0 place-content-start place-items-center group-hover:visible group-hover:opacity-100 group-hover:-translate-y-0 group-hover:scale-100 top-full">
        {locales.map(
          (loc) =>
            loc !== locale && (
              <Link href={asPath} locale={loc} key={`languageSwitchFor${loc}`}>
                <a className="w-full hover:underline text-sm px-2 p-0 grid grid-cols-1 place-content-start place-items-center text-center border border-[#585858] rounded-sm">
                  {loc.toUpperCase()}
                </a>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
