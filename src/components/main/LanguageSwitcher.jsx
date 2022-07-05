import { i18n } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

import { FaChevronDown } from 'react-icons/fa';

export default function LanguageSwitcher() {
  const currentLanguage = i18n.language;
  const router = useRouter();

  return (
    <div className="absolute group grid grid-cols-1 place-content-start place-items-start min-w-[60px] font-zaxe right-5 top-1/2 -translate-y-1/2 text-[#585858]">
      <div className="w-full grid grid-cols-2 items-center border border-[#585858] px-2 p-0 rounded-sm">
        <div className="w-full transition-all duration-150 text-sm">
          {currentLanguage.toUpperCase()}
        </div>
        <div className="w-full flex justify-end">
          <FaChevronDown className="group-hover:rotate-180 transition-all duration-150 text-xs" />
        </div>
      </div>
      <div className="p-0 m-0 pt-2 grid grid-cols-1 place-content-start place-items-center transition-all duration-150 invisible opacity-0 group-hover:visible group-hover:opacity-100 -translate-y-4 group-hover:-translate-y-0 absolute top-full left-0 w-full gap-1">
        {router.locales.map(
          (locale) =>
            locale !== currentLanguage && (
              <button
                key={`languageSwitchFor${locale}`}
                type="button"
                onClick={() => {
                  router.push(
                    `/${locale.toLowerCase()}${router.pathname}`,
                    `/${locale.toLowerCase()}${router.pathname}`,
                    { locale: locale.toLowerCase() }
                  );
                }}
                className="w-full hover:underline text-sm px-2 p-0 grid grid-cols-1 place-content-start border border-[#585858] rounded-sm"
              >
                {locale.toUpperCase()}
              </button>
            )
        )}
      </div>
    </div>
  );
}
