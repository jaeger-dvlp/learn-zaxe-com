import React from 'react';
import Head from 'next/head';
import Images from '@/src/images/Images';
import { useTranslation } from 'next-i18next';

function Schema({ props }) {
  const {
    postTitle,
    postSlug,
    queryProductSlug,
    queryCategorySlug,
    productName,
  } = props;
  const { t } = useTranslation();

  const getID = () => {
    if (productName) {
      return `https://knowledge-base.zaxe.com/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`;
    }
    return `https://knowledge-base.zaxe.com/articles/${postSlug}`;
  };

  const getHeadline = () => {
    if (productName) {
      return `${postTitle} - ${productName}${t('meta.title.article')}`;
    }
    return `${postTitle}${t('meta.title.article')}`;
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'Article',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': getID(),
          },
          headline: getHeadline(),
          image: {
            '@type': 'ImageObject',
            url: `https://knowledge-base.zaxe.com${Images.og.home.default.src}`,
          },
        })}
      </script>
    </Head>
  );
}

export default Schema;
