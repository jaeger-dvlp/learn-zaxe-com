import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import 'swiper/css';
import 'swiper/css/effect-fade';

import Content from '@/src/content/Content';
import { i18n } from '@/next-i18next.config';
import SearchBar from '@/src/components/categoriespage/SearchBar';
import ProductSlider from '@/src/components/categoriespage/ProductSlider';
import CategoryBar from '@/src/components/categoriespage/CategoryBar';
import ProductPosts from '@/src/components/categoriespage/ProductPosts';

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
        </Head>
        <div className="grid font-zaxe w-full grid-cols-1 place-content-start place-items-center pt-[20vh]">
          <div className="grid w-full grid-cols-1 p-5 gap-14 max-w-app place-content-start place-items-center">
            <SearchBar />
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
