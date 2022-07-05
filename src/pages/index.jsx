import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';

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
      <div className="w-screen bg-gray-900 h-screen flex flex-wrap justify-center items-center">
        <div className="bg-zaxe/5 rounded-lg p-5 w-full grid grid-cols-1 place-content-start place-items-center max-w-zaxe">
          <p className="text-zaxe text-3xl font-zaxe  font-bold">
            {t('hello')}
          </p>
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
