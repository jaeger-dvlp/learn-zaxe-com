import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Images from '@/src/images/Images';
import Products from '@/src/components/homepage/Products';
import WelcomeSection from '@/src/components/homepage/WelcomeSection';
import QuickNavigation from '@/src/components/homepage/QuickNavigation';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('meta.title.home')}</title>
        <meta name="description" content={t('meta.content.home')} />
        <meta name="title" content={t('meta.title.home')} />
        <meta
          name="keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta name="description" content={t('meta.content.home')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://knowledge-base.zaxe.com/" />
        <meta property="og:title" content={t('meta.title.home')} />
        <meta property="og:description" content={t('meta.content.home')} />
        <meta
          property="og:keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta property="og:image" content={Images.og.home.default.src} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://knowledge-base.zaxe.com/"
        />
        <meta property="twitter:site" content="@Zaxe3D" />
        <meta property="twitter:site:id" content="@Zaxe3D" />
        <meta property="twitter:creator" content="@Zaxe3D" />
        <meta property="twitter:creator:id" content="@Zaxe3D" />
        <meta property="twitter:title" content={t('meta.title.home')} />
        <meta property="twitter:description" content={t('meta.content.home')} />
        <meta property="twitter:image" content={Images.og.home.default.src} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://knowledge-base.zaxe.com/tr/"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://knowledge-base.zaxe.com/"
        />
      </Head>
      <WelcomeSection />
      <Products />
      <QuickNavigation />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
