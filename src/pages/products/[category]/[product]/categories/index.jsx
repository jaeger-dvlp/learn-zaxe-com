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

function Categories({ product: stringProduct }) {
  const product = JSON.parse(stringProduct);
  const {
    category: productCategory,
    content: productContent,
    slug: productSlug,
  } = product;
  const { categories: postCategories } = productContent;
  const { t } = useTranslation();

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
          <div className="flex items-start justify-center w-full gap-10 max-w-app">
            <div className="grid w-full max-w-xs grid-cols-1 place-content-start place-items-start">
              <ul>
                {postCategories.map(
                  ({ slug: prodCategorySlug, label: prodCategoryLabel }) => (
                    <li key={`${productSlug}-${prodCategorySlug}`}>
                      {t(prodCategoryLabel)}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="grid w-full grid-cols-1 p-10 xl:grid-cols-3 lg:grid-cols-2 place-content-start place-items-start bg-zinc-100 rounded-xl">
              <span className="text-zinc-300">Content to go..</span>
            </div>
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
