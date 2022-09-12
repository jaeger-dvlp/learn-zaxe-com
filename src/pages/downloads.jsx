import React from 'react';
import Head from 'next/head';
import Icon from '@/src/images/Icons';
import { useRouter } from 'next/router';
import Images from '@/src/images/Images';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';
import { BsApple, BsWindows } from 'react-icons/bs';
import Breadcrumbs from '@/src/components/articles/Breadcrumbs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const OSIcons = {
  win: ({ className }) => <BsWindows className={className} />,
  mac: ({ className }) => <BsApple className={className} />,
};

const OSNames = {
  win: 'Windows',
  mac: 'MacOS',
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
    <>
      <Head>
        <title>{t('meta.title.downloads')}</title>
        <meta name="description" content={t('meta.content.downloads')} />
        <meta name="title" content={t('meta.title.downloads')} />
        <meta
          name="keywords"
          content="Zaxe, Zaxe Knowledge Base, Downloads, xDesktop, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta name="description" content={t('meta.content.downloads')} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://knowledge-base.zaxe.com/downloads"
        />
        <meta property="og:title" content={t('meta.title.downloads')} />
        <meta property="og:description" content={t('meta.content.downloads')} />
        <meta
          property="og:keywords"
          content="Zaxe, Zaxe Knowledge Base, Downloads, xDesktop Zaxe 3D, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta property="og:image" content={Images.og.home.default.src} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://knowledge-base.zaxe.com/downloads"
        />
        <meta property="twitter:site" content="@Zaxe3D" />
        <meta property="twitter:site:id" content="@Zaxe3D" />
        <meta property="twitter:creator" content="@Zaxe3D" />
        <meta property="twitter:creator:id" content="@Zaxe3D" />
        <meta property="twitter:title" content={t('meta.title.downloads')} />
        <meta
          property="twitter:description"
          content={t('meta.content.downloads')}
        />
        <meta property="twitter:image" content={Images.og.home.default.src} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://zaxe-knowledge-base.vercel.app/tr/downloads"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://zaxe-knowledge-base.vercel.app/en/downloads"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://zaxe-knowledge-base.vercel.app/downloads"
        />
      </Head>
      <main className="grid font-zaxe w-full grid-cols-1 p-0 m-0 place-content-start place-items-center py-[20vh]">
        <article className="grid w-full grid-cols-1 gap-10 p-5 max-w-app place-content-start place-items-start">
          <Breadcrumbs
            links={[
              {
                text: t('downloads.heading'),
                url: `/${router.locale}/downloads`,
              },
            ]}
          />
          <hroup className="flex items-center justify-center w-full">
            <h1 className="flex flex-wrap items-center justify-center gap-2 text-3xl font-bold xl:text-4xl lg:text-4xl text-zaxe">
              <DownloadIcon className="text-3xl xl:text-5xl lg:text-5xl" />
              <span>{t('downloads.heading')}</span>
            </h1>
          </hroup>
          <section className="grid w-full grid-cols-1 gap-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 place-items-center">
            <section className="grid w-full h-full grid-cols-1 gap-5 p-5 place-content-start place-items-center">
              <hroup className="w-full gap-2 grid grid-cols-1 place-content-end place-items-center h-[200px]">
                <Icon name="zaxez3" className="w-32 text-zaxe" />
                <h2 className="font-semibold text-md text-zaxe">Z3</h2>
              </hroup>
              <section className="grid w-full grid-cols-1 gap-10 place-content-start place-items-center">
                {Downloadables.zaxez3.map((downloadable) =>
                  getDownloadComponent(downloadable)
                )}
              </section>
            </section>
            <section className="grid w-full h-full grid-cols-1 gap-5 p-5 place-content-start place-items-center">
              <hroup className="w-full gap-2 grid grid-cols-1 place-content-end place-items-center h-[200px]">
                <Icon name="zaxex3" className="w-24 text-zaxe" />
                <h2 className="font-semibold text-md text-zaxe">X3</h2>
              </hroup>
              <section className="grid w-full grid-cols-1 gap-10 place-content-start place-items-center">
                {Downloadables.zaxex3.map((downloadable) =>
                  getDownloadComponent(downloadable)
                )}
              </section>
            </section>
            <section className="grid w-full h-full grid-cols-1 gap-5 p-5 place-content-start place-items-center">
              <hroup className="w-full gap-2 grid grid-cols-1 place-content-end place-items-center h-[200px]">
                <Icon name="zaxexdesktop" className="w-32 text-zaxe" />
                <h2 className="font-semibold text-md text-zaxe">xDesktop</h2>
              </hroup>
              <section className="grid w-full grid-cols-1 gap-10 place-content-start place-items-center">
                {Downloadables.xdesktop.map((downloadable) =>
                  getDownloadComponent(downloadable)
                )}
              </section>
            </section>
          </section>
        </article>
      </main>
    </>
  );
}

function DocDownloadBlock({ props }) {
  const { title, link, showLastUpdate, updateDate } = props;
  const { t } = useTranslation();
  return (
    <section className="relative grid w-full grid-cols-1 p-5 border bg-zinc-100 rounded-xl place-content-start place-items-start border-zaxe">
      <aside className="absolute top-0 p-1 px-2 text-sm -translate-y-1/2 border rounded-md left-5 border-zaxe bg-zinc-100 text-zaxe">
        {t('downloads.hints.doc')}
      </aside>
      <h3 className="text-xl font-semibold text-zinc-600">{t(title)}</h3>
      {showLastUpdate && (
        <p className="text-sm text-zinc-500">Last updated at {updateDate}.</p>
      )}
      <section className="grid grid-cols-1 gap-1 mt-3 place-content-start place-items-start">
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="flex min-w-[5rem] text-center items-center justify-center w-full gap-2 p-1 px-3 text-sm text-white rounded-md items bg-zaxe hover:bg-sky-700"
        >
          {t('downloads.buttons.download')}
        </a>
      </section>
    </section>
  );
}

function FirmwareDownloadBlock({ props }) {
  const { title, link, showLastUpdate, updateDate } = props;
  const { t } = useTranslation();
  return (
    <section className="relative grid w-full grid-cols-1 p-5 border bg-zinc-100 rounded-xl place-content-start place-items-start border-zaxe">
      <aside className="absolute top-0 p-1 px-2 text-sm -translate-y-1/2 border rounded-md left-5 border-zaxe bg-zinc-100 text-zaxe">
        {t('downloads.hints.firmware')}
      </aside>
      <h3 className="text-xl font-semibold text-zinc-600">{t(title)}</h3>
      {showLastUpdate && (
        <p className="text-sm text-zinc-500">Last updated at {updateDate}.</p>
      )}
      <section className="grid grid-cols-1 gap-1 mt-3 place-content-start place-items-start">
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="flex min-w-[5rem] text-center items-center justify-center w-full gap-2 p-1 px-3 text-sm text-white rounded-md items bg-zaxe hover:bg-sky-700"
        >
          {t('downloads.buttons.download')}
        </a>
      </section>
    </section>
  );
}

function AppDownloadBlock({ props }) {
  const { title, slug, platforms, links } = props;
  const { t } = useTranslation();
  return (
    <section className="relative grid w-full grid-cols-1 p-5 border bg-zinc-100 rounded-xl place-content-start place-items-start border-zaxe">
      <aside className="absolute top-0 p-1 px-2 text-sm -translate-y-1/2 border rounded-md left-5 border-zaxe bg-zinc-100 text-zaxe">
        {t('downloads.hints.app')}
      </aside>
      <h3 className="text-xl font-semibold text-zinc-600">{t(title)}</h3>
      <section className="grid grid-cols-1 gap-1 mt-3 place-content-start place-items-start">
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
              <DownloadIcon />
              <p>
                {t('downloads.buttons.download-for')}
                <b>{OSNames[platform]}</b>
              </p>
            </a>
          );
        })}
      </section>
    </section>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, Content.translations)),
  },
});

export default Downloads;
