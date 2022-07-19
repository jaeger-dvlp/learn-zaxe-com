import React from 'react';
import Link from 'next/link';
import { i18n, useTranslation } from 'next-i18next';

function TipsNTrips() {
  const [tips] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const { t } = useTranslation();
  return (
    <div className="w-full font-zaxe grid grid-cols-1 place-content-start place-items-center p-0 m-0 bg-[#232323]">
      <div className="grid w-full grid-cols-1 p-5 py-28 max-w-app place-content-start place-items-center gap-7">
        <h1 className="text-2xl font-bold text-center text-zaxe xl:text-4xl lg:text-4xl">
          {t('components.tips-n-tricks.heading')}
        </h1>
        <p className="text-[#DEDEDE] text-center xl:text-3xl lg:text-3xl text-xl font-medium w-full">
          {t('components.tips-n-tricks.description')}
        </p>
        <div className="flex flex-wrap items-center justify-center xl:gap-14 lg:gap-14 gap-7">
          {tips.map((value, index) => (
            <Link
              key={Math.floor(Math.random() * 9999)}
              href="/element"
              locale={i18n.language}
            >
              <a className="xl:min-w-[200px] lg:min-w-[200px] xl:min-h-[200px] lg:min-h-[200px] min-w-[100px] min-h-[100px] rounded-2xl bg-[#F5F5F5] hover:bg-zinc-300 transition-all duration-150 text-[#6F6F6F] grid grid-cols-1 place-content-center place-items-center">
                <p className="w-full text-xl font-medium text-center xl:text-3xl lg:text-3xl">
                  {t(`components.tips-n-tricks.values.${index}`)}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TipsNTrips;
