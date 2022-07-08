import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { i18n } from '../../next-i18next.config';
import Header from '../components/main/Header';
import SearchBar from '../components/misc/SearchBar';

function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Zaxe | 404</title>
      </Head>
      <Header />
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
            <SearchBar />
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
