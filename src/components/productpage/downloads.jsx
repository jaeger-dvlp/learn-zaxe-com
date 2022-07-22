/* eslint-disable no-alert */
import 'dayjs/locale/tr';
import React from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { BsDownload } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import relativeTime from 'dayjs/plugin/relativeTime';
import Content from '../../content/Content';

function Downloads({ product }) {
  const router = useRouter();
  dayjs.extend(relativeTime);
  dayjs.locale(router.locale);
  const { t } = useTranslation();
  const downloads = product.content.downloads || null;

  const [sdp, setSDP] = React.useState({});

  React.useEffect(() => {
    downloads.map((download) => {
      if (download.platforms) {
        return setSDP({
          ...sdp,
          [download.slug]: { selectedPlatform: null },
        });
      }
      return null;
    });
  }, []);

  return (
    downloads && (
      <div
        data-aos="fade"
        data-aos-delay={300}
        data-aos-duration={500}
        className="grid w-full grid-cols-1 p-0 m-0 bg-white place-content-start place-items-center"
      >
        <div className="grid w-full grid-cols-1 gap-20 p-5 py-20 max-w-app place-content-start place-items-center">
          <h1 className="text-4xl font-bold text-zaxe">
            {t('product-page-components.downloads.title')}
          </h1>
          <div className="relative flex flex-wrap justify-center w-full gap-16 xl:h-full lg:h-full">
            {downloads.map((download) => (
              <div className="relative h-full grid w-full rounded-2xl min-h-[195px] max-w-xs grid-cols-1 gap-8 p-5 m-0 bg-white border shadow-xl group place-content-between border-zinc-100 place-items-center">
                <div className="grid w-full h-full grid-cols-1 gap-2 place-content-start place-items-center">
                  <h1 className="text-center grid grid-cols-1 place-content-start place-items-center text-[#6F6F6F] font-medium text-2xl">
                    <span>{t(download.title)}</span>
                    {download.type && (
                      <span className="text-lg font-medium text-center text-zaxe">
                        ({download.type})
                      </span>
                    )}
                  </h1>
                  {download.showLastUpdate && (
                    <span className="text-md font-normal text-center text-[#6f6f6f7a]">
                      {router.locale === 'tr'
                        ? `En son ${dayjs(
                            download.updateDate
                          ).fromNow()} güncellendi`
                        : `Updated ${dayjs(download.updateDate).fromNow()}`}
                    </span>
                  )}
                  {download.platforms && (
                    <div className="grid w-full grid-cols-1 gap-1 place-content-start place-items-center">
                      <span className="text-sm font-normal text-center text-[#6f6f6f7a]">
                        {t('product-page-components.downloads.select-platform')}
                      </span>
                      <div className="flex flex-wrap items-center justify-center w-full gap-2">
                        {download.platforms.map((platform) => (
                          <button
                            type="button"
                            onClick={() => {
                              if (sdp[download.slug]) {
                                setSDP({
                                  ...sdp,
                                  [download.slug]: {
                                    selectedPlatform: platform,
                                  },
                                });
                              }
                            }}
                            className={`${
                              sdp[download.slug] &&
                              sdp[download.slug].selectedPlatform ===
                                platform &&
                              '!bg-zaxe !text-white'
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
                    if (download.platforms) {
                      if (
                        sdp[download.slug] &&
                        sdp[download.slug].selectedPlatform
                      ) {
                        alert(
                          `Download Event for ${
                            sdp[download.slug].selectedPlatform
                          }`
                        );
                      } else {
                        alert('Please select a platform');
                      }
                    }
                  }}
                  className="w-full gap-3 transition-all duration-200 flex justify-center items-center max-w-[14rem] p-2 text-sm text-white border-2 rounded-2xl bg-zaxe hover:bg-white hover:text-zaxe border-zaxe text-center"
                >
                  <BsDownload className="text-2xl" />
                  <span>{t('product-page-components.downloads.download')}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Downloads;
