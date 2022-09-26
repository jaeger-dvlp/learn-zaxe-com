import React from 'react';
import { useRouter } from 'next/router';
import { BsCheckLg } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import { useAppContext } from '@/src/components/contexts/AppContext';
import { VoteYes, VoteNo, sendForm } from '@/src/clients/vote.client';

const defaultZaxeInput = `w-full p-2 py-3 h-[3.5rem] peer transition-all duration-150 font-semibold bg-white border-2 rounded-md !outline-none !ring-2 ring-transparent focus:valid:ring-zaxe focus:invalid:ring-pink-400 text-zinc-600 !border-slate-200`;
const defaultZaxeLabel = `absolute flex gap-1 pointer-events-none top-0 px-2 py-0.5 font-semibold duration-150 scale-75 -translate-y-1/2 border rounded-md tranisition-all peer-placeholder-shown:border-transparent border-slate-200 peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-focus:border-slate-200 text-slate-500 peer-focus:peer-valid:text-zaxe peer-focus:peer-invalid:text-pink-400 peer-focus:top-0 peer-placeholder-shown:top-7 peer-focus:-translate-x-[10%] -translate-x-[10%] peer-placeholder-shown:-translate-x-0 !left-2 placeholder-shown:bg-transparent peer-focus:bg-white bg-white`;

function ArticleVote({ postTitle }) {
  const { activateNotificationPopup } = useAppContext();
  const { t } = useTranslation();
  const router = useRouter();
  const [helpForm, setHelpForm] = React.useState({
    fullName: null,
    emailAddress: null,
    description: null,
    post: {
      title: postTitle,
      language: router.locale === 'tr' ? 'Turkish' : 'English',
      url: null,
    },
  });
  const [feedback, setFeedBack] = React.useState({
    vote: {
      yes: false,
      no: false,
    },
    voteActive: true,
    formActive: false,
    formStart: false,
    formSubmitted: false,
  });

  React.useEffect(() => {
    const Form = document.querySelector('form.zaxe-help-form');

    const HandleHelpForm = async (e) => {
      e.preventDefault();
      activateNotificationPopup({
        message: t('popups.notification-popup.feedback-sending'),
        icon: 'loading',
      });

      setTimeout(
        () =>
          sendForm(helpForm, setFeedBack)
            .then(() =>
              activateNotificationPopup({
                message: t('popups.notification-popup.feedback-sent'),
                icon: 'success',
              })
            )
            .catch(() =>
              activateNotificationPopup({
                message: t('popups.notification-popup.something-went-wrong'),
                icon: 'error',
              })
            ),
        1000
      );
    };

    if (Form) {
      Form.addEventListener('submit', HandleHelpForm);
    }

    return () => {
      if (Form) {
        return Form.removeEventListener('submit', HandleHelpForm);
      }
      return null;
    };
  }, [helpForm]);

  const upperFullName = (string) => {
    const split = string.split(' ');
    const upper = split.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return upper.join(' ');
  };

  React.useEffect(
    () =>
      window &&
      setHelpForm({
        ...helpForm,
        post: {
          ...helpForm.post,
          url: window.location.href,
        },
      }),
    []
  );

  return (
    <div className="relative min-h-[10rem] grid w-full grid-cols-1 gap-0 my-20 mt-10 place-content-start place-items-center">
      {feedback.voteActive && (
        <div
          className={`${
            feedback.vote.yes || feedback.vote.no
              ? 'scale-50 opacity-0 invisible'
              : 'scale-100 opacity-100 visible'
          } transition-all duration-300 grid grid-cols-1 place-content-start place-items-center gap-10`}
        >
          <h2 className="text-2xl font-semibold text-zaxe">
            {t('common:article.vote-area.header')}
          </h2>
          <div className="flex items-center justify-center w-full gap-7">
            <button
              type="button"
              onClick={() => VoteYes(setFeedBack)}
              className="py-1 hover:bg-zaxe hover:-translate-y-1 active:scale-75 hover:border-zaxe hover:text-white transition-all duration-200 px-4 min-w-[6rem] border border-zinc-100 shadow-xl shadow-black/20 rounded-2xl text-zinc-500"
            >
              {t('common:article.vote-area.vote-button-yes')}
            </button>
            <button
              type="button"
              onClick={() => VoteNo(setFeedBack)}
              className="py-1 hover:bg-zaxe hover:-translate-y-1 active:scale-75 hover:border-zaxe hover:text-white transition-all duration-200 px-4 min-w-[6rem] border border-zinc-100 shadow-xl shadow-black/20 rounded-2xl text-zinc-500"
            >
              {t('common:article.vote-area.vote-button-no')}
            </button>
          </div>
        </div>
      )}
      {((feedback.voteActive !== true && feedback.formActive !== true) ||
        feedback.formSubmitted) && (
        <div
          className={`${
            feedback.thanks
              ? 'opacity-100 visible scale-100'
              : 'opacity-0 invisible scale-50'
          } transition-all absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none bg-white duration-500 grid grid-cols-1 gap-5 place-content-start place-items-center`}
        >
          <BsCheckLg className="text-lg text-zaxe" />
          <h2 className="text-lg font-semibold text-center text-zaxe">
            {t('common:article.vote-area.vote-message-thanks')}
          </h2>
        </div>
      )}
      {feedback.voteActive !== true && feedback.formActive && (
        <div
          className={`${
            feedback.formStart
              ? 'opacity-100 max-h-[100rem] visible scale-100'
              : 'opacity-0 max-h-0 invisible scale-50'
          } transition-all p-5 pb-10 bg-white overflow-hidden duration-500 grid grid-cols-1 gap-5 place-content-start place-items-center w-full`}
        >
          <div className="grid w-full grid-cols-1 gap-2 place-content-start place-items-center">
            <h2 className="text-lg font-semibold text-center text-zaxe">
              <span>{t('forms.feedback.header')}</span>
            </h2>
            <p className="font-normal text-center text-md text-zaxe">
              <span>{t('forms.feedback.description')}</span>
            </p>
          </div>
          <form className="grid w-full max-w-lg grid-cols-1 gap-5 p-5 bg-white border shadow-xl zaxe-help-form place-content-start place-items-center rounded-xl border-zinc-100">
            <div className="relative w-full">
              <input
                placeholder=" "
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
                id="help-form-email"
                onChange={(e) => {
                  setHelpForm({
                    ...helpForm,
                    emailAddress: e.target.value,
                  });
                }}
                className={defaultZaxeInput}
              />
              <label htmlFor="help-form-email" className={defaultZaxeLabel}>
                <span>{t('forms.feedback.inputs.emailaddress')}</span>
                <span className="!text-red-300">*</span>
              </label>
            </div>
            <div className="relative w-full">
              <input
                placeholder=" "
                type="text"
                required
                id="help-form-fullname"
                onChange={(e) => {
                  setHelpForm({
                    ...helpForm,
                    fullName: upperFullName(e.target.value),
                  });
                }}
                className={defaultZaxeInput}
              />
              <label htmlFor="help-form-fullname" className={defaultZaxeLabel}>
                <span>{t('forms.feedback.inputs.fullname')}</span>
                <span className="!text-red-300">*</span>
              </label>
            </div>
            <div className="relative w-full">
              <textarea
                placeholder=" "
                required
                minLength="10"
                id="help-form-description"
                onChange={(e) => {
                  setHelpForm({
                    ...helpForm,
                    description: e.target.value,
                  });
                }}
                className={`${defaultZaxeInput} min-h-[10rem]`}
              />
              <label htmlFor="help-form-email" className={defaultZaxeLabel}>
                <span>{t('forms.feedback.inputs.description')}</span>
                <span className="!text-red-300">*</span>
              </label>
            </div>
            <div className="flex items-center justify-end w-full">
              <button
                type="submit"
                className="p-2 px-4 w-full max-w-[7rem] font-normal text-white transition-all duration-200 rounded-md ring-2 ring-transparent active:ring-sky-300 hover:bg-sky-700 text-md bg-zaxe"
              >
                <span>{t('forms.feedback.inputs.send')}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ArticleVote;
