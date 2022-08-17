/* eslint-disable no-nested-ternary */
import React from 'react';
import { useRouter } from 'next/router';
import PostBlock from '@/src/components/misc/PostBlock';

function ProductPosts({ product }) {
  const router = useRouter();
  const {
    slug: productSlug,
    content: { posts: Posts, categories: Categories },
  } = product;
  const {
    query: {
      product: queryProduct,
      category: queryPCategory,
      c: queryCategory,
    },
  } = router;

  return (
    product && (
      <div className="grid min-h-[35rem] gap-14 w-full grid-cols-1 p-5 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 place-content-start place-items-center rounded-xl">
        {Posts.map(
          ({
            category: postCategory,
            title: postTitle,
            title: { en: postKey },
            thumbnail: postThumbnail,
            slug: postSlug,
          }) =>
            queryCategory ? (
              postCategory === queryCategory ? (
                <PostBlock
                  key={`${postCategory}-${postKey}-${productSlug}`}
                  props={{
                    postSlug,
                    postCategory,
                    postTitle,
                    postThumbnail,
                    queryProduct,
                    queryPCategory,
                    Categories,
                  }}
                />
              ) : null
            ) : (
              <PostBlock
                key={`${postCategory}-${postKey}-${productSlug}`}
                props={{
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
        )}
      </div>
    )
  );
}

export default ProductPosts;
