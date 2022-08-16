import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

function ArticleVote() {
  const [demoFeedback, setDemoFeedback] = React.useState(false);
  return (
    <div className="relative grid w-full grid-cols-1 gap-0 my-20 mt-10 place-content-start place-items-center">
      <div
        className={`${
          demoFeedback
            ? 'scale-50 opacity-0 invisible'
            : 'scale-100 opacity-100 visible'
        } transition-all duration-500 grid grid-cols-1 place-content-start place-items-center gap-10`}
      >
        <h1 className="text-2xl font-semibold text-zaxe">
          Was this article helpful?
        </h1>
        <div className="flex items-center justify-center w-full gap-7">
          <button
            type="button"
            onClick={() => setDemoFeedback(true)}
            className="py-1 hover:bg-zaxe hover:-translate-y-1 active:scale-75 hover:border-zaxe hover:text-white transition-all duration-200 px-4 min-w-[6rem] border border-zinc-100 shadow-xl shadow-black/20 rounded-2xl text-zinc-500"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => setDemoFeedback(true)}
            className="py-1 hover:bg-zaxe hover:-translate-y-1 active:scale-75 hover:border-zaxe hover:text-white transition-all duration-200 px-4 min-w-[6rem] border border-zinc-100 shadow-xl shadow-black/20 rounded-2xl text-zinc-500"
          >
            No
          </button>
        </div>
      </div>
      <div
        className={`${
          demoFeedback
            ? 'opacity-100 visible scale-100'
            : 'opacity-0 invisible scale-50'
        } transition-all absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none bg-white duration-500 grid grid-cols-1 gap-5 place-content-start place-items-center`}
      >
        <BsCheckLg className="text-lg text-zaxe" />
        <h1 className="text-lg font-semibold text-center text-zaxe">
          Thank you for your feedback.
        </h1>
      </div>
    </div>
  );
}

export default ArticleVote;
