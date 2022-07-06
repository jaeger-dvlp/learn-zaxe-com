import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../components/main/Header';
import WelcomeSection from '../components/homepage/WelcomeSection';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('meta.title.home')}</title>
        <meta name="description" content={t('meta.content.home')} />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header />
      <WelcomeSection />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
