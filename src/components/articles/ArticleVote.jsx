import { useTranslation } from 'next-i18next';
import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

function ArticleVote() {
  const [demoFeedback, setDemoFeedback] = React.useState(false);
  const { t } = useTranslation();
  return (
    <section className="relative grid w-full grid-cols-1 gap-0 my-20 mt-10 place-content-start place-items-center">
      <section
        className={`${
          demoFeedback
            ? 'scale-50 opacity-0 invisible'
            : 'scale-100 opacity-100 visible'
        } transition-all duration-500 grid grid-cols-1 place-content-start place-items-center gap-10`}
      >
        <h1 className="text-2xl font-semibold text-zaxe">
          {t('common:article.vote-area.header')}
        </h1>
        <section className="flex items-center justify-center w-full gap-7">
          <button
            type="button"
            onClick={() => setDemoFeedback(true)}
            className="py-1 hover:bg-zaxe hover:-translate-y-1 active:scale-75 hover:border-zaxe hover:text-white transition-all duration-200 px-4 min-w-[6rem] border border-zinc-100 shadow-xl shadow-black/20 rounded-2xl text-zinc-500"
          >
            {t('common:article.vote-area.vote-button-yes')}
          </button>
          <button
            type="button"
            onClick={() => setDemoFeedback(true)}
            className="py-1 hover:bg-zaxe hover:-translate-y-1 active:scale-75 hover:border-zaxe hover:text-white transition-all duration-200 px-4 min-w-[6rem] border border-zinc-100 shadow-xl shadow-black/20 rounded-2xl text-zinc-500"
          >
            {t('common:article.vote-area.vote-button-no')}
          </button>
        </section>
      </section>
      <section
        className={`${
          demoFeedback
            ? 'opacity-100 visible scale-100'
            : 'opacity-0 invisible scale-50'
        } transition-all absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none bg-white duration-500 grid grid-cols-1 gap-5 place-content-start place-items-center`}
      >
        <BsCheckLg className="text-lg text-zaxe" />
        <h1 className="text-lg font-semibold text-center text-zaxe">
          {t('common:article.vote-area.vote-message-thanks')}
        </h1>
      </section>
    </section>
  );
}

export default ArticleVote;
