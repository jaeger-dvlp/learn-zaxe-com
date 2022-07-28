import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  BiErrorCircle,
  BiInfoCircle,
  BiCheckCircle,
  BiLoaderAlt,
} from 'react-icons/bi';
import { useAppContext } from '../contexts/AppContext';

const Icons = {
  hint: (
    <BiInfoCircle className="w-12 h-12 p-2 text-lg rounded-full text-sky-500 bg-sky-100" />
  ),
  loading: (
    <BiLoaderAlt className="w-12 h-12 p-2 text-lg rounded-full text-sky-400 bg-sky-100 animate-spin" />
  ),
  success: (
    <BiCheckCircle className="w-12 h-12 p-2 text-lg text-green-500 bg-green-100 rounded-full" />
  ),
  error: (
    <BiErrorCircle className="w-12 h-12 p-2 text-lg text-red-500 bg-red-100 rounded-full" />
  ),
};

function NotificationPopup() {
  const { notificationPopup, deactivateNotificationPopup } = useAppContext();
  const { inHTML, isActive, message, icon } = notificationPopup;
  const { t } = useTranslation();

  return (
    inHTML && (
      <div
        onClick={() => {
          if (icon !== 'loading') {
            deactivateNotificationPopup();
          }
        }}
        className={`${
          isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition-all cursor-default font-zaxe duration-300 fixed top-0 left-0 grid w-screen h-screen z-[199] grid-cols-1 p-5 bg-black bg-opacity-70 place-content-center place-items-center`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`${
            isActive ? 'translate-y-0' : 'translate-y-1/2'
          } transition-all ease-in-out grid grid-cols-1 place-content-start gap-5 place-items-center duration-300 w-full max-w-md p-5 bg-white shadow-xl shadow-black/30 rounded-xl`}
        >
          <div className="flex items-center justify-center w-full">
            {Icons[icon]}
          </div>
          <div className="w-full my-5 font-medium text-center text-md text-slate-600">
            {typeof t(message) === typeof Object ? message : t(message)}
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={() =>
                icon !== 'loading' && deactivateNotificationPopup()
              }
              disabled={icon === 'loading'}
              type="button"
              className="w-full p-2 px-5 text-center text-white transition-all duration-200 rounded-md disabled:bg-zinc-500 disabled:active:ring-red-300 ring-2 ring-transparent active:ring-sky-300 hover:bg-sky-700 bg-zaxe"
            >
              {t('popups.buttons.ok')}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default NotificationPopup;
