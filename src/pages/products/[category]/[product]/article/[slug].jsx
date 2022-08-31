import React from 'react';
import Head from 'next/head';
import { i18n } from '@/next.config';
import { getPost } from '@/src/clients';
import { useRouter } from 'next/router';
import Images from '@/src/images/Images';
import { MDXRemote } from 'next-mdx-remote';
import Content from '@/src/content/Content';
import rehypeHighlight from 'rehype-highlight';
import { serialize } from 'next-mdx-remote/serialize';
import FullCode from '@/src/components/articles/FullCode';
import AlertBox from '@/src/components/articles/AlertBox';
import ColumnCode from '@/src/components/articles/ColumnCode';
import ArticleVote from '@/src/components/articles/ArticleVote';
import ColumnImage from '@/src/components/articles/ColumnImage';
import Breadcrumbs from '@/src/components/articles/Breadcrumbs';
import ColumnSlider from '@/src/components/articles/ColumnSlider';
import RelatedPosts from '@/src/components/articles/RelatedPosts';
import FullScreenViewer from '@/src/components/articles/FullScreenViewer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Post({ data, content }) {
  const router = useRouter();
  const {
    title: postTitle,
    category: postCategory,
    'category-slug': postCategorySlug,
  } = data;
  const {
    slug: postSlug,
    product: queryProductSlug,
    category: queryCategorySlug,
  } = router.query;
  const Product = Content.products.find(
    ({ slug }) => slug === queryProductSlug
  );
  return (
    <>
      <Head>
        <title>{`${postTitle} - ${Product.name}`}</title>
        <meta name="description" content={`${postTitle} - ${Product.name}`} />
        <meta name="title" content={`${postTitle} - ${Product.name}`} />
        <meta
          name="keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta name="description" content={`${postTitle} - ${Product.name}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://knowledge-base.zaxe.com/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <meta property="og:title" content={`${postTitle} - ${Product.name}`} />
        <meta
          property="og:description"
          content={`${postTitle} - ${Product.name}`}
        />
        <meta
          property="og:keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta property="og:image" content={Images.og.home.default.src} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://knowledge-base.zaxe.com/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <meta property="twitter:site" content="@Zaxe3D" />
        <meta property="twitter:site:id" content="@Zaxe3D" />
        <meta property="twitter:creator" content="@Zaxe3D" />
        <meta property="twitter:creator:id" content="@Zaxe3D" />
        <meta
          property="twitter:title"
          content={`${postTitle} - ${Product.name}`}
        />
        <meta
          property="twitter:description"
          content={`${postTitle} - ${Product.name}`}
        />
        <meta property="twitter:image" content={Images.og.home.default.src} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="alternate"
          hrefLang="tr"
          content={`https://knowledge-base.zaxe.com/tr/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          content={`https://knowledge-base.zaxe.com/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
      </Head>
      <main className="pt-[20vh] font-zaxe w-full grid grid-cols-1 place-items-center place-content-center">
        <Breadcrumbs
          links={[
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
          ]}
        />
        <section className="w-full max-w-xl p-5 xl:max-w-app lg:max-w-app zaxe-kb-post">
          <section className="grid w-full grid-cols-1 gap-2 article-heading place-content-start place-items-center">
            <h1>{postTitle}</h1>
            <h2>{postCategory}</h2>
          </section>
          <article>
            <MDXRemote
              {...content}
              components={{
                Images,
                ColumnImage,
                ColumnSlider,
                ColumnCode,
                AlertBox,
                FullCode,
              }}
            />
          </article>
          <ArticleVote />
          <RelatedPosts relatedData={{ Product, postCategorySlug }} />
        </section>
      </main>
      <FullScreenViewer />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = Content.products
    .map((product) =>
      i18n.locales
        .map((locale) =>
          product.content.posts.map((post) => ({
            params: {
              category: product.category.slug,
              product: product.slug,
              slug: post.slug,
            },
            locale,
          }))
        )
        .flat()
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
