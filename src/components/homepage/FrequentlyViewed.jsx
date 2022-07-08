import React from 'react';
import { useTranslation } from 'next-i18next';

export default function FrequentlyViewed() {
  const { t } = useTranslation();
  return (
    <div className="grid w-full grid-cols-1 bg-white font-zaxe place-content-start place-items-center">
      <div className="grid w-full grid-cols-1 px-5 py-16 gap-7 max-w-zaxe place-content-start place-items-center">
        <h1 className="text-2xl font-bold text-center text-zaxe xl:text-4xl lg:text-4xl">
          {t('homepage.frequently-viewed-manuals.heading')}
        </h1>
        <p className="text-[#6F6F6F] text-center xl:text-3xl lg:text-3xl text-xl font-medium w-full">
          {t('homepage.frequently-viewed-manuals.description')}
        </p>
      </div>
    </div>
  );
}
