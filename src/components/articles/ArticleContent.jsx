import React from 'react';
import Images from '@/src/images/Images';
import { MDXRemote } from 'next-mdx-remote';
import AlertBox from '@/src/components/articles/AlertBox';
import FullCode from '@/src/components/articles/FullCode';
import ColumnCode from '@/src/components/articles/ColumnCode';
import Breadcrumbs from '@/src/components/articles/Breadcrumbs';
import ColumnImage from '@/src/components/articles/ColumnImage';
import ColumnSlider from '@/src/components/articles/ColumnSlider';
import ArticleVote from '@/src/components/articles/ArticleVote';

function ArticleContent({ props }) {
  const { postTitle, postCategory, content, breadcrumbs } = props;
  return (
    <main className="pt-[20vh] font-zaxe w-full grid grid-cols-1 place-items-center place-content-center">
      <Breadcrumbs links={breadcrumbs} />
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
  );
}

export default ArticleContent;
