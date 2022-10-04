import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import 'swiper/css';
import 'swiper/css/effect-fade';
import Images from '@/src/images/Images';
import Content from '@/src/content/Content';
import { i18n } from '@/next-i18next.config';
import SearchBar from '@/src/components/categoriespage/SearchBar';
import CategoryBar from '@/src/components/categoriespage/CategoryBar';
import ProductPosts from '@/src/components/categoriespage/ProductPosts';
import ProductSlider from '@/src/components/categoriespage/ProductSlider';

function Categories({ product: stringProduct }) {
  const { t } = useTranslation();
  const product = JSON.parse(stringProduct);
  const { category: productCategory, slug: productSlug } = product;

  return (
    product && (
      <>
        <Head>
          <title>
            {t(
              `productmeta:${productCategory.slug}.${productSlug}.categories-title`
            )}
          </title>
          <meta
            name="keywords"
            content="Zaxe, Zaxe Knowledge Base, Downloads, xDesktop, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
          />
          <meta
            name="description"
            content={t(
              `productmeta:${productCategory.slug}.${productSlug}.categories-description`
            )}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://learn.zaxe.com/products/${productCategory}/${productSlug}/categories`}
          />
          <meta
            property="og:title"
            content={t(
              `productmeta:${productCategory.slug}.${productSlug}.categories-title`
            )}
          />
          <meta
            property="og:description"
            content={t(
              `productmeta:${productCategory.slug}.${productSlug}.categories-description`
            )}
          />
          <meta
            property="og:keywords"
            content="Zaxe, Zaxe Knowledge Base, Downloads, xDesktop Zaxe 3D, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
          />
          <meta property="og:image" content={Images.og.home.default.src} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://learn.zaxe.com/downloads"
          />
          <meta property="twitter:site" content="@Zaxe3D" />
          <meta property="twitter:site:id" content="@Zaxe3D" />
          <meta property="twitter:creator" content="@Zaxe3D" />
          <meta property="twitter:creator:id" content="@Zaxe3D" />
          <meta
            property="twitter:title"
            content={t(
              `productmeta:${productCategory.slug}.${productSlug}.categories-title`
            )}
          />
          <meta
            property="twitter:description"
            content={t(
              `productmeta:${productCategory.slug}.${productSlug}.categories-description`
            )}
          />
          <meta property="twitter:image" content={Images.og.home.default.src} />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link
            rel="alternate"
            hrefLang="tr"
            href={`https://learn.zaxe.com/tr/products/${productCategory.slug}/${productSlug}/categories`}
          />
          <link
            rel="alternate"
            hrefLang="en"
            href={`https://learn.zaxe.com/en/products/${productCategory.slug}/${productSlug}/categories`}
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`https://learn.zaxe.com/products/${productCategory.slug}/${productSlug}/categories`}
          />
          <meta
            name="google-site-verification"
            content="PqBnncgMb_K3JE-GhF9RqxgonMwX2dJwmOjYhmOJZew"
          />
        </Head>
        <div className="grid font-zaxe w-full grid-cols-1 place-content-start place-items-center pt-[20vh]">
          <div className="grid w-full grid-cols-1 p-5 gap-14 max-w-app place-content-start place-items-center">
            <SearchBar className="category-search-bar" />
            <ProductSlider />
          </div>
          <div className="flex flex-wrap items-start justify-center w-full gap-10 p-5 xl:flex-nowrap lg:flex-nowrap max-w-app">
            <CategoryBar product={product} />
            <ProductPosts product={product} />
          </div>
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

export default Categories;
