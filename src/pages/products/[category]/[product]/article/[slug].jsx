import React from 'react';
import Head from 'next/head';
import { i18n } from '@/next.config';
import { useRouter } from 'next/router';
import Images from '@/src/images/Images';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';
import rehypeHighlight from 'rehype-highlight';
import { getPost } from '@/src/clients/post.client';
import Schema from '@/src/components/articles/Schema';
import { serialize } from 'next-mdx-remote/serialize';
import ArticleContent from '@/src/components/articles/ArticleContent';
import FullScreenViewer from '@/src/components/articles/FullScreenViewer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Post({ data, content }) {
  const { t } = useTranslation();
  const router = useRouter();

  const {
    slug: postSlug,
    product: queryProductSlug,
    category: queryCategorySlug,
  } = router.query;

  const Product = Content.products.find(
    ({ slug }) => slug === queryProductSlug
  );

  const {
    description,
    title: postTitle,
    thumbnail: postThumbnail,
    category: { slug: postCategorySlug, name: postCategory },
  } = data;

  const thumbnail = postThumbnail || Images.og.home.default.src;

  return (
    <>
      <Head>
        <title>{`${postTitle} - ${Product.name}${t(
          'meta.title.article'
        )}`}</title>
        <meta
          name="title"
          content={`${postTitle} - ${Product.name}${t('meta.title.article')}`}
        />
        <meta name="description" content={`${description}`} />
        <meta
          name="keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta name="description" content={`${description}`} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://learn.zaxe.com/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <meta
          property="og:title"
          content={`${postTitle} - ${Product.name}${t('meta.title.article')}`}
        />
        <meta property="og:description" content={`${description}`} />
        <meta
          property="og:keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta property="og:image" content={thumbnail} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://learn.zaxe.com/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <meta property="twitter:site" content="@Zaxe3D" />
        <meta property="twitter:site:id" content="@Zaxe3D" />
        <meta property="twitter:creator" content="@Zaxe3D" />
        <meta property="twitter:creator:id" content="@Zaxe3D" />
        <meta
          property="twitter:title"
          content={`${postTitle} - ${Product.name}${t('meta.title.article')}`}
        />
        <meta property="twitter:description" content={`${description}`} />
        <meta property="twitter:image" content={thumbnail} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link
          rel="alternate"
          hrefLang="tr"
          content={`https://learn.zaxe.com/tr/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          content={`https://learn.zaxe.com/en/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          content={`https://learn.zaxe.com/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <meta
          name="google-site-verification"
          content="PqBnncgMb_K3JE-GhF9RqxgonMwX2dJwmOjYhmOJZew"
        />
      </Head>
      <Schema
        props={{
          postTitle,
          postSlug,
          queryProductSlug,
          queryCategorySlug,
          productName: Product.name,
        }}
      />
      <ArticleContent
        props={{
          postTitle,
          postCategory,
          content,
          breadcrumbs: [
            {
              text: Product.name,
              url: `/products/${Product.category.slug}/${Product.slug}`,
            },
            {
              text: postCategory,
              url: `/products/${Product.category.slug}/${Product.slug}/categories?c=${postCategorySlug}`,
            },
            {
              text: postTitle,
              url: `/products/${Product.category.slug}/${Product.slug}/article/${postSlug}`,
            },
          ],
        }}
      />
      <FullScreenViewer />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = Content.products
    .map((product) =>
      i18n.locales
        .map((locale) =>
          product.content.posts.map((post) => {
            if (post.type !== 'global') {
              return {
                params: {
                  category: product.category.slug,
                  product: product.slug,
                  slug: post.slug,
                },
                locale,
              };
            }
            return null;
          })
        )
        .flat()
        .filter((path) => path !== null)
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const { product: productSlug, slug: postSlug } = params;
  const post = await getPost({ postSlug, productSlug, locale });
  const mdxSource = await serialize(post.content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });
  return {
    props: {
      data: post.data,
      content: mdxSource,
      ...(await serverSideTranslations(locale, Content.translations)),
    },
  };
};

export default Post;
