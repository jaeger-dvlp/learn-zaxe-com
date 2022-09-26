import React from 'react';
import { useRouter } from 'next/router';
import { BsDownload } from 'react-icons/bs';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';
import { AiOutlineHistory } from 'react-icons/ai';
import { useAppContext } from '@/src/components/contexts/AppContext';

function DownloadListPopup() {
  const { downloadListPopup, deactivateDownloadListPopup } = useAppContext();

  const { inHTML, isActive, downloads } = downloadListPopup;
  const { t } = useTranslation();
  const router = useRouter();

  return (
    inHTML && (
      <div
        onClick={() => deactivateDownloadListPopup()}
        className={`${
          isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition-all download-list-popup cursor-default font-zaxe duration-300 fixed top-0 left-0 grid w-screen h-screen z-[199] grid-cols-1 p-5 bg-black bg-opacity-70 place-content-center place-items-center`}
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
            <AiOutlineHistory className="w-12 h-12 p-2 text-lg rounded-full text-sky-500 bg-sky-100" />
          </div>
          {downloads && downloads.length > 0 && (
            <div className="w-full h-full max-h-[60vh] grid grid-cols-1 place-content-start place-items-center overflow-y-auto">
              <div className="flex items-center justify-between w-full p-2 border-b border-zinc-200">
                <p className="flex items-end justify-start w-full gap-2 font-medium text-center text-md text-slate-600">
                  <span className="text-xs">Name</span>
                </p>
                <div className="text-xs text-slate-600">Links</div>
              </div>
              {downloads.map((download) => (
                <div
                  key={download.slug}
                  className="flex items-center justify-between w-full p-2 transition-all duration-150 border-b group hover:bg-zinc-100 border-zinc-200"
                >
                  <p className="flex items-end justify-start w-full gap-2 font-medium text-center text-md text-slate-600">
                    <span className="transition-all duration-150 text-md group-hover:text-zaxe">
                      {download.title.en
                        ? download.title[router.locale]
                        : t(download.title)}
                    </span>
                  </p>
                  <div className="flex items-center justify-end">
                    <DownloadButton download={download} />
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center justify-center">
            <button
              onClick={() => deactivateDownloadListPopup()}
              type="button"
              className="w-full p-2 px-5 text-center text-white transition-all duration-200 rounded-md disabled:bg-zinc-500 disabled:active:ring-red-300 ring-2 ring-transparent active:ring-sky-300 hover:bg-sky-700 bg-zaxe"
            >
              {t('popups.buttons.close')}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

function DownloadButton({ download }) {
  const { OSIcons } = Content;
  const { platforms, links, link, slug } = download;
  if (platforms && links) {
    return (
      <div className="flex items-center justify-center gap-2">
        {platforms.map((platform) => (
          <a
            key={`${slug}-${platform}`}
            className="p-2 text-white transition-all duration-150 rounded-md hover:bg-black bg-zaxe"
            target="_blank"
            download
            href={links[platform]}
            rel="noreferrer"
          >
            {OSIcons[platform]}
          </a>
        ))}
      </div>
    );
  }
  if (links && links.en) {
    return (
      <div className="flex items-center justify-center gap-2">
        <a
          key={`${slug}-${links.en}`}
          className="p-2 text-sm text-white transition-all duration-150 rounded-md hover:bg-black bg-zaxe"
          target="_blank"
          download
          href={links.en}
          rel="noreferrer"
        >
          EN
        </a>
        <a
          key={`${slug}-${links.tr}`}
          className="p-2 text-sm text-white transition-all duration-150 rounded-md hover:bg-black bg-zaxe"
          target="_blank"
          download
          href={links.tr}
          rel="noreferrer"
        >
          TR
        </a>
      </div>
    );
  }
  return (
    <a
      key={`${slug}-downloadbtn`}
      className="p-2 text-white transition-all duration-150 rounded-md hover:bg-black bg-zaxe"
      target="_blank"
      download
      href={link}
      rel="noreferrer"
    >
      <BsDownload className="w-4 h-4" />
    </a>
  );
}

export default DownloadListPopup;
