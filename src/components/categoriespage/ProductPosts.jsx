/* eslint-disable no-nested-ternary */
import React from 'react';
import { useRouter } from 'next/router';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';
import PostBlock from '@/src/components/misc/PostBlock';
import NoContent from '@/src/components/misc/NoContent';
import VideoBlock from '@/src/components/misc/VideoBlock';
import { MdArticle, MdVideoLibrary } from 'react-icons/md';

function ProductPosts({ product }) {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    slug: productSlug,
    content: { posts: Posts, allVideos: Videos, categories: Categories },
  } = product;
  const {
    query: {
      c: queryCategory,
      product: queryProduct,
      category: queryPCategory,
    },
  } = router;
  return (
    product && (
      <div className="grid w-full grid-cols-1 gap-10 place-content-start place-items-center">
        <div className="grid min-h-[20rem] w-full grid-cols-1 p-5 gap-14 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 place-content-start place-items-center rounded-xl">
          <div className="flex items-center justify-center w-full col-span-full">
            <h2 className="flex items-center justify-center gap-2 p-1 px-4 text-xl font-semibold text-center text-white shadow-xl shadow-black/30 rounded-xl bg-zaxe">
              <MdArticle />
              <span>{t('common:search.articles')}</span>
            </h2>
          </div>
          {queryCategory ? (
            Posts.filter(({ category }) => category === queryCategory).length >
            0 ? (
              Posts.filter(({ category }) => category === queryCategory).map(
                ({
                  type,
                  category: postCategory,
                  title: postTitle,
                  title: { en: postKey },
                  thumbnail: postThumbnail,
                  slug: postSlug,
                }) => (
                  <PostBlock
                    key={`${postCategory}-${postKey}-${productSlug}`}
                    props={{
                      type,
                      postSlug,
                      postCategory,
                      postTitle,
                      postThumbnail,
                      queryProduct,
                      queryPCategory,
                      Categories,
                    }}
                  />
                )
              )
            ) : (
              <NoContent />
            )
          ) : (
            Posts.map(
              ({
                type,
                category: postCategory,
                title: postTitle,
                title: { en: postKey },
                thumbnail: postThumbnail,
                slug: postSlug,
              }) => (
                <PostBlock
                  key={`${postCategory}-${postKey}-${productSlug}`}
                  props={{
                    type,
                    postSlug,
                    postCategory,
                    postTitle,
                    postThumbnail,
                    queryProduct,
                    queryPCategory,
                    Categories,
                  }}
                />
              )
            )
          )}
        </div>
        <div className="grid min-h-[20rem] gap-14 w-full grid-cols-1 p-5 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 place-content-start place-items-center rounded-xl">
          <div className="flex items-center justify-center w-full col-span-full">
            <h2 className="flex items-center justify-center gap-2 p-1 px-4 text-xl font-semibold text-center text-white shadow-xl shadow-black/30 rounded-xl bg-zaxe">
              <MdVideoLibrary />
              <span>{t('common:search.videos')}</span>
            </h2>
          </div>
          {queryCategory ? (
            Videos.filter(({ category }) => category === queryCategory).length >
            0 ? (
              Videos.filter(({ category }) => category === queryCategory).map(
                ({
                  category: videoCategory,
                  label,
                  slug,
                  product: Product,
                  videoURL,
                  thumbnail: poster,
                }) =>
                  videoCategory === queryCategory && (
                    <VideoBlock
                      key={`${videoCategory}-${slug}-${productSlug}`}
                      props={{
                        label,
                        poster,
                        videoURL,
                        productName: Content.products.find(
                          ({ slug: pSlug }) => pSlug === Product
                        ).name,
                      }}
                    />
                  )
              )
            ) : (
              <NoContent />
            )
          ) : Videos.length > 0 ? (
            Videos.map(
              ({
                category: videoCategory,
                label,
                slug,
                product: Product,
                videoURL,
                thumbnail: poster,
              }) => (
                <VideoBlock
                  key={`${videoCategory}-${slug}-${productSlug}`}
                  props={{
                    label,
                    poster,
                    videoURL,
                    productName: Content.products.find(
                      ({ slug: pSlug }) => pSlug === Product
                    ).name,
                  }}
                />
              )
            )
          ) : (
            <NoContent />
          )}
        </div>
      </div>
    )
  );
}

export default ProductPosts;
