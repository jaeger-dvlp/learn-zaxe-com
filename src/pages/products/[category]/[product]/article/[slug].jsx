import React from 'react';
import Head from 'next/head';
import { i18n } from '@/next.config';
import Images from '@/src/images/Images';
import { MDXRemote } from 'next-mdx-remote';
import Content from '@/src/content/Content';
import getPosts from '@/src/utils/getPosts';
import { serialize } from 'next-mdx-remote/serialize';
import ColumnImage from '@/src/components/articles/ColumnImage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Post({ data, content }) {
  const { category: postCategory, title: postTitle } = data;
  return (
    <>
      <Head>
        <title>{postTitle}</title>
      </Head>
      <main className="pt-[20vh] font-zaxe w-full grid grid-cols-1 place-content-start place-items-center">
        <section className="w-full max-w-app">
          <article className="p-5 zaxe-kb-post">
            <section className="grid w-full grid-cols-1 gap-2 article-heading place-content-start place-items-center">
              <h1>{postTitle}</h1>
              <h2>{postCategory}</h2>
            </section>
            <section>
              <MDXRemote {...content} components={{ Images, ColumnImage }} />
            </section>
          </article>
        </section>
      </main>
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
  const { product: productSlug, slug } = params;
  const post = await getPosts.getPost(slug, productSlug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
      ...(await serverSideTranslations(locale, Content.translations)),
    },
  };
};

export default Post;
