import React from 'react';
import Icon from '@/src/images/Icons';
import { useRouter } from 'next/router';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';
import { BsApple, BsWindows } from 'react-icons/bs';
import Breadcrumbs from '@/src/components/articles/Breadcrumbs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const OSIcons = {
  win: ({ className }) => <BsWindows className={className} />,
  mac: ({ className }) => <BsApple className={className} />,
};

function Downloads() {
  const { Icon: DownloadIcon } = Content.components.quickNavigation[2];
  const { t } = useTranslation();
  const router = useRouter();

  const Downloadables = {
    zaxez3: [
      Content.downloadables.find(({ slug }) => slug === 'z3-user-manual'),
    ],
    zaxex3: [
      Content.downloadables.find(({ slug }) => slug === 'x3-user-manual'),
      Content.downloadables.find(({ slug }) => slug === 'x3-firmware'),
    ],
    xdesktop: [
      Content.downloadables.find(({ slug }) => slug === 'xdesktop-latest'),
      Content.downloadables.find(({ slug }) => slug === 'xdesktop-2-1-6'),
      Content.downloadables.find(({ slug }) => slug === 'xdesktop-2-1-5'),
      Content.downloadables.find(({ slug }) => slug === 'xdesktop-2-1-4'),
      Content.downloadables.find(({ slug }) => slug === 'xdesktop-2-0-0'),
    ],
  };

  const getDownloadComponent = (downloadable) => {
    if (downloadable.type === 'doc') {
      return <DocDownloadBlock key={downloadable.slug} props={downloadable} />;
    }
    if (downloadable.type === 'firmware') {
      return (
        <FirmwareDownloadBlock key={downloadable.slug} props={downloadable} />
      );
    }
    if (downloadable.type === 'app') {
      return <AppDownloadBlock key={downloadable.slug} props={downloadable} />;
    }
    return <span>Component Not Found</span>;
  };

  return (
    <div className="grid font-zaxe w-full grid-cols-1 p-0 m-0 place-content-start place-items-center py-[20vh]">
      <div className="grid w-full grid-cols-1 gap-10 p-5 max-w-app place-content-start place-items-start">
        <div className="flex items-center justify-center w-full">
          <Breadcrumbs
            links={[
              {
                text: t('downloads.heading'),
                url: `/${router.locale}/downloads`,
              },
            ]}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <h1 className="flex flex-wrap items-center justify-center gap-2 text-3xl font-bold xl:text-4xl lg:text-4xl text-zaxe">
            <DownloadIcon className="text-3xl xl:text-5xl lg:text-5xl" />
            <span>{t('downloads.heading')}</span>
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 place-items-center">
          <div className="grid w-full h-full grid-cols-1 gap-5 p-5 place-content-start place-items-center">
            <div className="w-full gap-2 grid grid-cols-1 place-content-end place-items-center h-[200px]">
              <Icon name="zaxez3" className="w-32 text-zaxe" />
              <h1 className="font-semibold text-md text-zaxe">Z3</h1>
            </div>
            <div className="grid w-full grid-cols-1 gap-10 place-content-start place-items-center">
              {Downloadables.zaxez3.map((downloadable) =>
                getDownloadComponent(downloadable)
              )}
            </div>
          </div>
          <div className="grid w-full h-full grid-cols-1 gap-5 p-5 place-content-start place-items-center">
            <div className="w-full gap-2 grid grid-cols-1 place-content-end place-items-center h-[200px]">
              <Icon name="zaxex3" className="w-24 text-zaxe" />
              <h1 className="font-semibold text-md text-zaxe">X3</h1>
            </div>
            <div className="grid w-full grid-cols-1 gap-10 place-content-start place-items-center">
              {Downloadables.zaxex3.map((downloadable) =>
                getDownloadComponent(downloadable)
              )}
            </div>
          </div>
          <div className="grid w-full h-full grid-cols-1 gap-5 p-5 place-content-start place-items-center">
            <div className="w-full gap-2 grid grid-cols-1 place-content-end place-items-center h-[200px]">
              <Icon name="zaxexdesktop" className="w-32 text-zaxe" />
              <h1 className="font-semibold text-md text-zaxe">xDesktop</h1>
            </div>
            <div className="grid w-full grid-cols-1 gap-10 place-content-start place-items-center">
              {Downloadables.xdesktop.map((downloadable) =>
                getDownloadComponent(downloadable)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocDownloadBlock({ props }) {
  const { title, link, showLastUpdate, updateDate } = props;
  const { t } = useTranslation();
  return (
    <div className="relative grid w-full grid-cols-1 p-5 border bg-zinc-100 rounded-xl place-content-start place-items-start border-zaxe">
      <span className="absolute top-0 p-1 px-2 text-sm -translate-y-1/2 border rounded-md left-5 border-zaxe bg-zinc-100 text-zaxe">
        {t('downloads.hints.doc')}
      </span>
      <h1 className="text-xl font-semibold text-zinc-600">{t(title)}</h1>
      {showLastUpdate && (
        <p className="text-sm text-zinc-500">Last updated at {updateDate}.</p>
      )}
      <div className="grid grid-cols-1 gap-1 mt-3 place-content-start place-items-start">
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="flex items-center justify-start gap-2 p-1 px-2 text-sm text-white rounded-md items bg-zaxe hover:bg-sky-700"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function FirmwareDownloadBlock({ props }) {
  const { title, link, showLastUpdate, updateDate } = props;
  const { t } = useTranslation();
  return (
    <div className="relative grid w-full grid-cols-1 p-5 border bg-zinc-100 rounded-xl place-content-start place-items-start border-zaxe">
      <span className="absolute top-0 p-1 px-2 text-sm -translate-y-1/2 border rounded-md left-5 border-zaxe bg-zinc-100 text-zaxe">
        {t('downloads.hints.firmware')}
      </span>
      <h1 className="text-xl font-semibold text-zinc-600">{t(title)}</h1>
      {showLastUpdate && (
        <p className="text-sm text-zinc-500">Last updated at {updateDate}.</p>
      )}
      <div className="grid grid-cols-1 gap-1 mt-3 place-content-start place-items-start">
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="flex items-center justify-start w-full gap-2 p-1 px-2 text-sm text-white rounded-md items bg-zaxe hover:bg-sky-700"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function AppDownloadBlock({ props }) {
  const { title, slug, platforms, links } = props;
  const { t } = useTranslation();
  return (
    <div className="relative grid w-full grid-cols-1 p-5 border bg-zinc-100 rounded-xl place-content-start place-items-start border-zaxe">
      <span className="absolute top-0 p-1 px-2 text-sm -translate-y-1/2 border rounded-md left-5 border-zaxe bg-zinc-100 text-zaxe">
        {t('downloads.hints.app')}
      </span>
      <h1 className="text-xl font-semibold text-zinc-600">{t(title)}</h1>
      <div className="grid grid-cols-1 gap-1 mt-3 place-content-start place-items-start">
        {platforms.map((platform) => {
          const DownloadIcon = OSIcons[platform];
          return (
            <a
              key={`${platform}-${slug}`}
              target="_blank"
              rel="noreferrer"
              href={links[platform]}
              className="flex items-center justify-start w-full gap-2 p-1 px-2 text-sm text-white rounded-md items bg-zaxe hover:bg-sky-700"
            >
              <span>Download for</span>
              <DownloadIcon />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, Content.translations)),
  },
});

export default Downloads;
