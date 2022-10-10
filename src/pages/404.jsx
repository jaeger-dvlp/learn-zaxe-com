import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { i18n } from '@/next-i18next.config';
import { useTranslation } from 'next-i18next';
import SearchBar from '@/src/components/misc/SearchBar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Images from '../images/Images';

function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Zaxe | 404</title>
        <meta name="description" content={t('meta.content.home')} />
        <meta name="title" content="Zaxe | 404" />
        <meta
          name="keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta name="description" content={t('meta.content.home')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://learn.zaxe.com/404" />
        <meta property="og:title" content="Zaxe | 404" />
        <meta property="og:description" content={t('meta.content.home')} />
        <meta
          property="og:keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta property="og:image" content={Images.og.home.default.src} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://learn.zaxe.com/" />
        <meta property="twitter:site" content="@Zaxe3D" />
        <meta property="twitter:site:id" content="@Zaxe3D" />
        <meta property="twitter:creator" content="@Zaxe3D" />
        <meta property="twitter:creator:id" content="@Zaxe3D" />
        <meta property="twitter:title" content="Zaxe | 404" />
        <meta property="twitter:description" content={t('meta.content.home')} />
        <meta property="twitter:image" content={Images.og.home.default.src} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://learn.zaxe.com/tr/404"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://learn.zaxe.com/en/404"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://learn.zaxe.com/404"
        />
        <meta
          name="google-site-verification"
          content="PqBnncgMb_K3JE-GhF9RqxgonMwX2dJwmOjYhmOJZew"
        />
      </Head>
      <div className="grid w-full min-h-screen grid-cols-1 bg-white font-zaxe place-content-center place-items-center">
        <div
          data-aos="zoom-in"
          data-aos-delay={200}
          data-aos-duration={500}
          className="grid w-full grid-cols-1 p-5 gap-7 max-w-app place-content-start place-items-center"
        >
          <div className="grid w-full grid-cols-1 gap-1 xl:gap-3 lg:gap-3 place-content-start place-items-center">
            <h1 className="xl:text-6xl lg:text-6xl text-2xl text-center font-bold text-[#515151]">
              {t('404.heading')}
            </h1>
            <h2 className="text-lg font-bold text-center xl:text-3xl lg:text-3xl text-zaxe">
              {t('404.message')}
            </h2>
            <p className="mt-5 text-md text-zinc-500">{t('404.try-search')}</p>
            <SearchBar className="error-search-bar" />
          </div>
          <div className="flex !text-sm flex-wrap items-center justify-center w-full gap-4 place-content-start place-items-center">
            <Link href="/" locale={i18n.language}>
              <a className="transition-all duration-200 hover:underline text-zaxe text-md hover:text-black">
                {t('links.home')}
              </a>
            </Link>
            <span className="w-px h-3 bg-zaxe" />
            <Link href="/products/3dprinter" locale={i18n.language}>
              <a className="transition-all duration-200 hover:underline text-zaxe text-md hover:text-black">
                {t('links.3d-printers')}
              </a>
            </Link>
            <span className="w-px h-3 bg-zaxe" />
            <Link href="/products/software" locale={i18n.language}>
              <a className="transition-all duration-200 hover:underline text-zaxe text-md hover:text-black">
                {t('links.softwares')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default NotFound;
