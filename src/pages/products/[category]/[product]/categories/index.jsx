import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Content from '../../../../../content/Content';
import { i18n } from '../../../../../../next-i18next.config';

function Categories({ product: stringProduct }) {
  const [product] = React.useState(JSON.parse(stringProduct));
  const { t } = useTranslation();

  return (
    product && (
      <>
        <Head>
          <title>
            {t(
              `productmeta:${product.category.slug}.${product.slug}.categories-title`
            )}
          </title>
        </Head>
        <div className="grid w-full grid-cols-1 place-content-start place-items-center pt-[15vh]">
          categories for {product.name}
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
