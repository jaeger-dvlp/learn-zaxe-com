import React from 'react';
import { useTranslation } from 'next-i18next';
import SearchBar from '@/src/components/misc/SearchBar';

function WelcomeSection() {
  const { t } = useTranslation();
  return (
    <div className="w-full !font-zaxe grid grid-cols-1 place-content-start place-items-center pt-[15vh] bg-white">
      <div
        data-aos="fade"
        data-aos-delay={200}
        data-aos-duration={500}
        className="grid w-full grid-cols-1 p-5 pb-10 max-w-app pt-7 place-content-start place-items-center"
      >
        <div className="grid grid-cols-1 gap-0 place-content-center place-items-center">
          <h1 className="xl:text-6xl lg:text-6xl text-xl text-center font-bold text-[#515151]">
            {t('homepage.banner.heading')}
          </h1>
          <h1 className="text-xl font-bold text-center xl:text-6xl lg:text-6xl text-zaxe">
            {t('homepage.banner.second-heading')}
          </h1>
        </div>
        <div className="relative grid w-full grid-cols-1 my-5 xl:my-10 lg:my-10 place-content-center place-items-center">
          <p className="xl:text-lg lg:text-lg text-xs w-full max-w-[550px] text-center font-medium text-[#666666]">
            {t('homepage.banner.description')}
          </p>
        </div>
        <div className="relative grid w-full grid-cols-1 place-content-center place-items-center">
          <SearchBar className="homepage-search-bar" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
