import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Zaxe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="w-full !font-zaxe grid grid-cols-1 place-content-start place-items-center pt-[90px] bg-zinc-50">
        <div className="w-full max-w-zaxe p-5 pt-7 pb-10 grid grid-cols-1 place-content-start place-items-center">
          <div className="grid grid-cols-1 place-content-center place-items-center gap-2">
            <h1 className="text-4xl text-center font-semibold text-[#515151]">
              {t('homepage.banner.heading')}
            </h1>
            <h1 className="text-4xl text-center font-semibold text-zaxe">
              {t('homepage.banner.second-heading')}
            </h1>
            <p className="text-[18px] mt-2 w-full max-w-[550px] text-center font-medium text-[#666666]">
              {t('homepage.banner.description')}
            </p>
          </div>
          <div className="grid relative w-full grid-cols-1 place-content-center place-items-center mt-7">
            <SearchBar />
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

export default Home;
