import React from 'react';
import Images from '@/src/images/Images';
import { MDXRemote } from 'next-mdx-remote';
import AlertBox from '@/src/components/articles/AlertBox';
import FullCode from '@/src/components/articles/FullCode';
import ColumnCode from '@/src/components/articles/ColumnCode';
import Breadcrumbs from '@/src/components/articles/Breadcrumbs';
import ColumnImage from '@/src/components/articles/ColumnImage';
import ColumnVideo from '@/src/components/articles/ColumnVideo';
import ArticleVote from '@/src/components/articles/ArticleVote';
import ColumnSlider from '@/src/components/articles/ColumnSlider';

function ArticleContent({ props }) {
  const { postTitle, postCategory, content, breadcrumbs } = props;
  return (
    <main className="pt-[20vh] font-zaxe w-full grid grid-cols-1 place-items-center place-content-start">
      <Breadcrumbs links={breadcrumbs} />
      <section
        id="post"
        className="w-full max-w-xl p-5 post xl:max-w-app lg:max-w-app zaxe-kb-post"
      >
        <hgroup className="grid w-full grid-cols-1 gap-2 article-heading place-content-start place-items-center">
          <h1 id="post-title">{postTitle}</h1>
          <h2 id="post-category">{postCategory}</h2>
        </hgroup>
        <article id="post-content" className="w-full">
          <MDXRemote
            {...content}
            components={{
              Images,
              FullCode,
              AlertBox,
              ColumnCode,
              ColumnImage,
              ColumnVideo,
              ColumnSlider,
            }}
          />
        </article>
      </section>
      <ArticleVote />
    </main>
  );
}

export default ArticleContent;
