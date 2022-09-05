import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { useTranslation } from 'next-i18next';

function NoContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap items-start justify-center w-full py-5 anim-fade-up-f col-span-full font-zaxe">
      <article className="grid grid-cols-1 gap-2 place-content-start place-items-center">
        <BiInfoCircle className="w-10 h-10 p-2 rounded-full text-md text-zinc-400 bg-zinc-200" />
        <p className="font-semibold text-center text-md text-zinc-400">
          {t('common:search.no-query-content')}
        </p>
      </article>
    </div>
  );
}

export default NoContent;
