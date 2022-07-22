import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Images from '../../../images/Images';
import Content from '../../../content/Content';
import Header from '../../../components/main/Header';
import { i18n } from '../../../../next-i18next.config';
import TipsNTrips from '../../../components/main/TipsNTrips';
import ProductNav from '../../../components/productpage/productNav';
import GetStarted from '../../../components/productpage/getStarted';
import Categories from '../../../components/productpage/categories';
import Downloads from '../../../components/productpage/downloads';

function Product({ product: stringProduct }) {
  const product = JSON.parse(stringProduct);
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {t(`productmeta:${product.category.slug}.${product.slug}.title`)}
        </title>
        <meta name="description" content={t('meta.content.home')} />
        <meta
          name="title"
          content={t(
            `productmeta:${product.category.slug}.${product.slug}.title`
          )}
        />
        <meta
          name="keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta name="description" content={t('meta.content.home')} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://knowledge-base.zaxe.com${router.asPath}`}
        />
        <meta
          property="og:title"
          content={t(
            `productmeta:${product.category.slug}.${product.slug}.title`
          )}
        />
        <meta property="og:description" content={t('meta.content.home')} />
        <meta
          property="og:keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta property="og:image" content={Images.og.home.default.src} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://knowledge-base.zaxe.com${router.asPath}`}
        />
        <meta property="twitter:site" content="@Zaxe3D" />
        <meta property="twitter:site:id" content="@Zaxe3D" />
        <meta property="twitter:creator" content="@Zaxe3D" />
        <meta property="twitter:creator:id" content="@Zaxe3D" />
        <meta
          property="twitter:title"
          content={t(
            `productmeta:${product.category.slug}.${product.slug}.title`
          )}
        />
        <meta property="twitter:description" content={t('meta.content.home')} />
        <meta property="twitter:image" content={Images.og.home.default.src} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="alternate"
          hrefLang="tr"
          href={`https://knowledge-base.zaxe.com/tr${router.asPath}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://knowledge-base.zaxe.com${router.asPath}`}
        />
      </Head>
      <Header />
      {product && (
        <div className="grid w-full font-zaxe pt-[15vh] grid-cols-1 place-content-start place-items-center">
          <ProductNav product={product} />
          <GetStarted product={product} />
          <Categories product={product} />
          <Downloads product={product} />
          <TipsNTrips />
        </div>
      )}
    </>
  );
}

const getProduct = (pSlug, cSlug) =>
  Content.products.find(
    ({ slug, category }) => slug === pSlug && category.slug === cSlug
  ) || null;

export const getStaticPaths = async () => {
  const paths = Content.products
    .map((product) =>
      i18n.locales.map((locale) => ({
        params: {
          category: product.category.slug,
          product: product.slug,
        },
        locale,
      }))
    )
    .flat();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => ({
  props: {
    product: JSON.stringify(getProduct(params.product, params.category)),
    ...(await serverSideTranslations(locale, [
      'common',
      'productmeta',
      'content-zxz3',
      'content-zxx3',
      'content-zxxdesktop',
    ])),
  },
});

export default Product;
