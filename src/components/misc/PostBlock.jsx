import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Images from '@/src/images/Images';
import Content from '@/src/content/Content';
import { BiLinkExternal } from 'react-icons/bi';
import { i18n, useTranslation } from 'next-i18next';

function PostBlock({ props }) {
  const {
    type,
    postSlug,
    postCategory,
    postTitle,
    postThumbnail,
    queryProduct,
    queryPCategory,
    Categories,
  } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const Product = Content.products.find(({ slug }) => queryProduct === slug);

  const getPostLink = () => {
    if (type === 'product') {
      return `/products/${queryPCategory}/${queryProduct}/article/${postSlug}`;
    }
    return `/articles/${postSlug}`;
  };

  const getPostProduct = () => {
    if (type === 'product') {
      return (
        <span className="absolute bottom-0 z-[3] m-3 p-1 px-2 text-white rounded-md bg-zaxe shadow-md text-xs">
          {Product.model}
        </span>
      );
    }
    return null;
  };

  const getPostCategory = () => {
    if (type === 'product') {
      if (typeof postCategory === 'object') {
        if (Categories.find(({ slug }) => slug === postCategory.slug)) {
          return t(
            Categories.find(({ slug }) => slug === postCategory.slug).label
          );
        }
      }
      if (Categories.find(({ slug }) => slug === postCategory)) {
        return t(Categories.find(({ slug }) => slug === postCategory).label);
      }
    }
    return t('content-global:categories.0.label');
  };

  return (
    <Link href={getPostLink()} locale={locale}>
      <a className="relative grid w-full h-full max-w-[16rem] grid-cols-1 overflow-hidden transition-all duration-200 bg-white shadow-xl cursor-pointer hover:-translate-y-3 hover:shadow-2xl place-content-start place-items-center rounded-xl">
        <BiLinkExternal className="absolute z-[3] text-4xl bottom-2 right-2 text-zinc-200" />
        <figure className="relative z-[2] w-full h-[10rem] max-w-xs overflow-hidden rounded-xl">
          {getPostProduct()}
          <Image
            src={postThumbnail}
            layout="fill"
            alt={postTitle.en}
            placeholder={Images.placeholder}
            className="object-cover object-center w-full h-full"
          />
        </figure>
        <section className="relative z-[1] flex items-end justify-between w-full p-3 bg-white">
          <section className="grid w-[80%] gap-1 grid-cols-1 place-content-end place-items-start">
            <span className="text-xs text-[#868686]">{getPostCategory()}</span>
            <h2 className="text-sm post-name text-[#555555]">
              {postTitle[i18n.language]}
            </h2>
          </section>
        </section>
      </a>
    </Link>
  );
}

export default PostBlock;
