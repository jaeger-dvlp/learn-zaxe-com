/* eslint-disable no-nested-ternary */
import React from 'react';
import Image from 'next/image';
import { i18n, useTranslation } from 'next-i18next';
import { BiLinkExternal } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
    locale: lang,
  } = router;
  const { t } = useTranslation();

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
                    lang,
                    postSlug,
                    postCategory,
                    postTitle,
                    postKey,
                    postThumbnail,
                    productSlug,
                    queryProduct,
                    queryPCategory,
                    t,
                    Categories,
                  }}
                />
              ) : null
            ) : (
              <PostBlock
                key={`${postCategory}-${postKey}-${productSlug}`}
                props={{
                  lang,
                  postSlug,
                  postCategory,
                  postTitle,
                  postKey,
                  postThumbnail,
                  productSlug,
                  queryProduct,
                  queryPCategory,
                  t,
                  Categories,
                }}
              />
            )
        )}
      </div>
    )
  );
}
function PostBlock({ props }) {
  const {
    lang,
    postSlug,
    postCategory,
    postTitle,
    postThumbnail,
    queryProduct,
    queryPCategory,
    t,
    Categories,
  } = props;
  return (
    <Link
      href={`/products/${queryPCategory}/${queryProduct}/article/${postSlug}`}
      locale={lang}
    >
      <a className="relative grid w-full h-full max-w-xs grid-cols-1 overflow-hidden transition-all duration-200 bg-white shadow-xl cursor-pointer hover:-translate-y-3 hover:shadow-2xl place-content-start place-items-center rounded-xl">
        <BiLinkExternal className="absolute z-[3] text-4xl bottom-2 right-2 text-zinc-200" />
        <div className="relative z-[2] w-full h-[10rem] max-w-xs overflow-hidden rounded-xl">
          <Image
            placeholder="blur"
            src={postThumbnail}
            layout="fill"
            alt={postTitle.en}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="relative z-[1] flex items-end justify-between w-full p-3 bg-white">
          <div className="grid w-[80%] gap-1 grid-cols-1 place-content-end place-items-start">
            <span className="text-xs text-[#868686]">
              {t(Categories.find(({ slug }) => slug === postCategory).label) ||
                null}
            </span>
            <h1 className="text-sm text-[#555555]">
              {postTitle[i18n.language]}
            </h1>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductPosts;
