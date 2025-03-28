import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Images from '@/src/images/Images';
import Content from '@/src/content/Content';
import { i18n } from '@/next-i18next.config';
import Downloads from '@/src/components/productpage/downloads';
import ProductNav from '@/src/components/productpage/productNav';
import GetStarted from '@/src/components/productpage/getStarted';
import Categories from '@/src/components/productpage/categories';

function Product({ product: stringProduct }) {
  const [product] = React.useState(JSON.parse(stringProduct) || null);
  const { asPath } = useRouter();
  const { t } = useTranslation();

  return (
    product && (
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
          <meta property="og:url" content={`https://learn.zaxe.com${asPath}`} />
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
            content={`https://learn.zaxe.com${asPath}`}
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
          <meta
            property="twitter:description"
            content={t('meta.content.home')}
          />
          <meta property="twitter:image" content={Images.og.home.default.src} />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link
            rel="alternate"
            hrefLang="tr"
            href={`https://learn.zaxe.com/tr${asPath}`}
          />
          <link
            rel="alternate"
            hrefLang="en"
            href={`https://learn.zaxe.com/en${asPath}`}
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`https://learn.zaxe.com${asPath}`}
          />
          <meta
            name="google-site-verification"
            content="PqBnncgMb_K3JE-GhF9RqxgonMwX2dJwmOjYhmOJZew"
          />
        </Head>
        <div className="grid w-full font-zaxe pt-[15vh] grid-cols-1 place-content-start place-items-center">
          <ProductNav product={product} />
          <GetStarted product={product} />
          <Categories product={product} />
          <Downloads product={product} />
        </div>
      </>
    )
  );
}

const getProduct = (pSlug, cSlug) => {
  const foundProduct = Content.products.find(
    ({ slug, category }) => slug === pSlug && category.slug === cSlug
  );

  return foundProduct || null;
};

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
    ...(await serverSideTranslations(locale, Content.translations)),
  },
});

export default Product;
