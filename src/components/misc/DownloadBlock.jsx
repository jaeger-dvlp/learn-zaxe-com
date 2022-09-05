import 'dayjs/locale/tr';
import dayjs from 'dayjs';
import React from 'react';
import { useRouter } from 'next/router';
import Content from '@/src/content/Content';
import { BsDownload } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useAppContext } from '@/src/components/contexts/AppContext';

function DownloadBlock({
  download: {
    slug,
    title,
    updateDate,
    type,
    links,
    link,
    platforms,
    showLastUpdate,
  },
}) {
  const router = useRouter();
  const { t } = useTranslation();
  const { activateNotificationPopup } = useAppContext();
  const [selectedPlatform, setSelectedPlatform] = React.useState(null);

  dayjs.extend(relativeTime);
  dayjs.locale(router.locale);

  return (
    <div
      key={slug}
      className="relative h-full grid w-full rounded-2xl min-h-[235px] max-w-xs grid-cols-1 gap-8 p-5 m-0 bg-white border shadow-xl group place-content-between border-zinc-100 place-items-center"
    >
      <div className="grid w-full h-full grid-cols-1 gap-2 place-content-start place-items-center">
        <h1 className="text-center grid grid-cols-1 place-content-start place-items-center text-[#6F6F6F] font-medium text-2xl">
          <span>{title.en ? title[router.locale] : t(title)}</span>
          {type === 'doc' && (
            <span className="text-lg font-medium text-center text-zaxe">
              (PDF)
            </span>
          )}
        </h1>
        {showLastUpdate && (
          <span className="text-md font-normal text-center text-[#6f6f6f7a]">
            {router.locale === 'tr'
              ? `En son ${dayjs(updateDate).fromNow()} güncellendi`
              : `Updated ${dayjs(updateDate).fromNow()}`}
          </span>
        )}
        {platforms && (
          <div className="grid w-full grid-cols-1 gap-1 place-content-start place-items-center">
            <span className="text-sm font-normal text-center text-[#6f6f6f7a]">
              {t('product-page-components.downloads.select-platform')}
            </span>
            <div className="flex flex-wrap items-center justify-center w-full gap-2">
              {platforms.map((platform) => (
                <button
                  key={`${slug}-${platform}-platform-btn`}
                  type="button"
                  onClick={() => setSelectedPlatform(platform)}
                  className={`${
                    selectedPlatform === platform && '!bg-zaxe !text-white'
                  } w-[50px] transition-all duration-150 hover:bg-zinc-50 text-2xl flex justify-center items-center rounded-lg shadow-lg bg-white border border-zinc-100 text-[#ABABAB] h-[50px]`}
                >
                  {Content.OSIcons[platform]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          if (platforms) {
            if (selectedPlatform) {
              activateNotificationPopup({
                message: 'popups.notification-popup.download-started',
                icon: 'success',
              });
              return window.open(links[selectedPlatform], '_blank');
            }
            return activateNotificationPopup({
              message: 'popups.notification-popup.select-platform',
              icon: 'error',
            });
          }
          activateNotificationPopup({
            message: 'popups.notification-popup.download-started',
            icon: 'success',
          });
          return window.open(links ? links[router.locale] : link, '_blank');
        }}
        className="w-full gap-3 transition-all duration-200 flex justify-center items-center max-w-[14rem] p-2 text-sm text-white border-2 rounded-2xl bg-zaxe hover:bg-white hover:text-zaxe border-zaxe text-center"
      >
        <BsDownload className="text-2xl" />
        <span>{t('product-page-components.downloads.download')}</span>
      </button>
    </div>
  );
}

export default DownloadBlock;
