import React from 'react';
import { i18n } from '@/next.config';
import Content from '@/src/content/Content';
import rehypeHighlight from 'rehype-highlight';
import { serialize } from 'next-mdx-remote/serialize';
import { getGlobalPost } from '@/src/clients/post.client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import FullScreenViewer from '@/src/components/articles/FullScreenViewer';
import ArticleVote from '@/src/components/articles/ArticleVote';
import { MDXRemote } from 'next-mdx-remote';
import Breadcrumbs from '@/src/components/articles/Breadcrumbs';
import Images from '@/src/images/Images';
import ColumnImage from '@/src/components/articles/ColumnImage';
import ColumnSlider from '@/src/components/articles/ColumnSlider';
import ColumnCode from '@/src/components/articles/ColumnCode';
import AlertBox from '@/src/components/articles/AlertBox';
import FullCode from '@/src/components/articles/FullCode';
import { useRouter } from 'next/router';

function Article({ data, content }) {
  const router = useRouter();
  const {
    title: postTitle,
    category: { slug: postCategorySlug, name: postCategory },
  } = data;
  const {
    slug: postSlug,
    product: queryProductSlug,
    category: queryCategorySlug,
  } = router.query;
  return (
    <>
      <Head>
        <title>{`${postTitle}`}</title>
        <meta name="description" content={`${postTitle}`} />
        <meta name="title" content={`${postTitle}`} />
        <meta
          name="keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta name="description" content={`${postTitle}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://knowledge-base.zaxe.com/products/${queryCategorySlug}/${queryProductSlug}/article/${postSlug}`}
        />
        <meta property="og:title" content={`${postTitle}`} />
        <meta property="og:description" content={`${postTitle}`} />
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
        <meta property="twitter:title" content={`${postTitle}`} />
        <meta property="twitter:description" content={`${postTitle}`} />
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
              text: postTitle,
              url: `/${router.locale}/articles/${postSlug}/`,
            },
          ]}
        />
        <section className="w-full max-w-xl p-5 xl:max-w-app lg:max-w-app zaxe-kb-post">
          <section className="grid w-full grid-cols-1 gap-2 article-heading place-content-start place-items-center">
            <h1>{postTitle}</h1>
            <h2>{postCategory}</h2>
          </section>
          <div>
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
          </div>
        </section>
        <ArticleVote />
      </main>
      <FullScreenViewer />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = Content.globalPosts
    .map((post) =>
      i18n.locales.map((locale) => ({
        params: { slug: post.slug },
        locale,
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const { slug: postSlug } = params;

  const post = await getGlobalPost({ postSlug, locale });
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

export default Article;
