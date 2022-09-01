import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import PostBlock from '../misc/PostBlock';

function RelatedPosts({ relatedData }) {
  const { Product, postCategorySlug: PostCategory } = relatedData;
  const {
    slug: productSlug,
    content: { categories: Categories },
  } = Product;
  const [relatedPosts] = React.useState(
    Product.content.posts
      .filter(({ category }) => category === PostCategory.toLowerCase())
      .slice(0, 4)
  );
  const router = useRouter();
  const {
    query: { product: queryProduct, category: queryPCategory },
  } = router;
  const { t } = useTranslation();

  return (
    <div className="grid w-full max-w-lg grid-cols-1 gap-10 p-3 place-content-start place-items-center my-14 xl:max-w-app lg:max-w-app">
      <h1 className=" text-2xl font-bold text-center text-[#666666] ">
        {t('common:article.related-posts.header')}
      </h1>
      <nav className="flex flex-wrap items-center justify-center w-full gap-14">
        {relatedPosts ? (
          relatedPosts.map(
            ({
              slug: postSlug,
              title: postTitle,
              title: { en: postKey },
              category: postCategory,
              thumbnail: postThumbnail,
            }) => (
              <PostBlock
                key={`${postCategory}-${postKey}-${productSlug}`}
                props={{
                  postSlug,
                  postCategory,
                  postTitle,
                  postKey,
                  postThumbnail,
                  productSlug,
                  queryProduct,
                  queryPCategory,
                  Categories,
                }}
              />
            )
          )
        ) : (
          <h1 className="text-lg font-semibold text-center text-zaxe">
            {t('common:article.related-posts.no-posts')}
          </h1>
        )}
      </nav>
    </div>
  );
}

export default RelatedPosts;
