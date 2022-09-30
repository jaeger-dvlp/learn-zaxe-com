/* eslint-disable no-nested-ternary */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/src/images/Icons';
import { BsGrid } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Content from '@/src/content/Content';
import { i18n, useTranslation } from 'next-i18next';
import NoContent from '@/src/components/misc/NoContent';
import { MdArticle, MdVideoLibrary } from 'react-icons/md';
import { useAppContext } from '@/src/components/contexts/AppContext';

function Categories({ product }) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = React.useState(null);
  const router = useRouter();
  const {
    query: { product: queryProduct, category: queryPCategory },
  } = router;

  return (
    <div
      data-aos="fade"
      data-aos-delay={200}
      data-aos-duration={500}
      className="grid w-full grid-cols-1 p-0 m-0 bg-white place-content-start place-items-center"
    >
      <div className="grid w-full grid-cols-1 gap-20 p-5 py-20 max-w-app place-content-start place-items-center">
        <h1 className="text-4xl font-bold text-zaxe">
          {t('product-page-components.categories.title')}
        </h1>
        <div className="relative flex items-start justify-center w-full xl:hidden lg:hidden">
          <div className="grid w-full max-w-sm grid-cols-1 gap-3 place-content-start place-items-center">
            <Link href={`${router.asPath}/categories`} locale={router.locale}>
              <a className="flex items-center w-full gap-5 p-3 px-5 transition-all duration-150 bg-zaxe/10 text-zaxe hover:bg-zaxe/30 active:scale-90 rounded-xl">
                <BsGrid className="w-10 h-10" />
                <span className="text-xl font-semibold text-center xl:text-left lg:text-left group-hover:font-semibold">
                  {t('product-page-components.categories.all-categories')}
                </span>
              </a>
            </Link>
            {product.content.categories.map(({ label, slug, icon }) => (
              <Link
                key={`category-route-${slug}`}
                href={`${router.asPath}/categories?c=${slug}`}
                className="flex items-center justify-start w-full gap-5 p-3 px-5 transition-all duration-150 bg-zaxe/10 text-zaxe hover:bg-zaxe/30 active:scale-90 rounded-xl"
                locale={router.locale}
              >
                <a className="flex items-center justify-start w-full gap-5 p-3 px-5 transition-all duration-150 bg-zaxe/10 text-zaxe hover:bg-zaxe/30 active:scale-90 rounded-xl">
                  <span className="w-10 h-10 text-current">
                    <Icon name={icon} />
                  </span>
                  <span className="text-xl font-semibold text-center xl:text-left lg:text-left group-hover:font-semibold">
                    {t(label)}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="relative items-start justify-center hidden w-full gap-10 xl:flex lg:flex">
          <div className="w-full grid max-w-[17.5rem] grid-cols-1 gap-3 place-content-start place-items-start">
            <button
              onClick={() => setActiveCategory(null)}
              className={`${
                activeCategory === null
                  ? 'bg-zaxe text-white hover:bg-zaxe'
                  : 'bg-zaxe/10 text-zaxe hover:bg-zaxe/30'
              } flex items-center active:scale-90 justify-start w-full gap-5 p-3 px-5 transition-all duration-150 rounded-xl `}
              type="button"
            >
              <BsGrid className="w-10 h-10" />
              <span className="text-xl font-semibold text-center xl:text-left lg:text-left group-hover:font-semibold">
                {t('product-page-components.categories.all-categories')}
              </span>
            </button>
            {product.content.categories.map(({ label, slug, icon }) => (
              <button
                key={`category-button-${slug}`}
                onClick={() => setActiveCategory(slug)}
                className={`${
                  slug === activeCategory
                    ? 'bg-zaxe !text-white hover:bg-zaxe'
                    : 'bg-zaxe/10 !text-zaxe hover:bg-zaxe/30'
                } flex items-center active:scale-90 justify-start w-full gap-5 p-3 px-5 transition-all duration-150 rounded-xl `}
                type="button"
              >
                <span className="w-10 h-10 text-current">
                  <Icon name={icon} className="text-current" />
                </span>
                <span className="text-xl font-semibold text-center xl:text-left lg:text-left group-hover:font-semibold">
                  {t(label)}
                </span>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-start w-full max-w-xl gap-10">
            {activeCategory === null ? (
              <>
                {product.content.posts
                  .slice(0, 2)
                  .map(
                    ({
                      type,
                      slug: postSlug,
                      category: postCategory,
                      title: postTitle,
                      thumbnail: postThumbnail,
                    }) => (
                      <PostBlock
                        key={Math.floor(Math.random() * 100000)}
                        props={{
                          type,
                          postSlug,
                          postCategory,
                          postTitle,
                          postThumbnail,
                          queryProduct,
                          queryPCategory,
                          Categories: product.content.categories,
                        }}
                      />
                    )
                  )}
                {product.content.allVideos
                  .slice(0, 2)
                  .map(({ label, videoURL, thumbnail }) => (
                    <VideoBlock
                      key={Math.floor(Math.random() * 100000)}
                      props={{
                        label,
                        videoURL,
                        poster: thumbnail,
                        productName: product.name,
                      }}
                    />
                  ))}
              </>
            ) : product.content.posts.filter(
                ({ category }) => category === activeCategory
              ).length +
                product.content.allVideos.filter(
                  ({ category }) => category === activeCategory
                ).length >
              0 ? (
              <>
                {product.content.posts
                  .filter(({ category }) => category === activeCategory)
                  .slice(0, 2)
                  .map(
                    ({
                      type,
                      slug: postSlug,
                      category: postCategory,
                      title: postTitle,
                      thumbnail: postThumbnail,
                    }) => (
                      <PostBlock
                        key={Math.floor(Math.random() * 100000)}
                        props={{
                          type,
                          postSlug,
                          postCategory,
                          postTitle,
                          postThumbnail,
                          queryProduct,
                          queryPCategory,
                          Categories: product.content.categories,
                        }}
                      />
                    )
                  )}
                {product.content.allVideos
                  .filter(({ category }) => category === activeCategory)
                  .slice(0, 2)
                  .map(
                    ({ label, videoURL, thumbnail, product: videoProduct }) => (
                      <VideoBlock
                        key={Math.floor(Math.random() * 100000)}
                        props={{
                          label,
                          videoURL,
                          poster: thumbnail,
                          productName: Content.products.find(
                            ({ slug }) => slug === videoProduct
                          ).name,
                        }}
                      />
                    )
                  )}
              </>
            ) : (
              <NoContent />
            )}
            <GetSeeAllButton props={{ activeCategory, product, router }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GetSeeAllButton({ props }) {
  const { activeCategory, product, router } = props;

  if (activeCategory) {
    if (
      product.content.allVideos
        .filter(({ category }) => category === activeCategory)
        .slice(0, 2).length > 0 ||
      product.content.posts
        .filter(({ category }) => category === activeCategory)
        .slice(0, 2).length > 0
    ) {
      return (
        <SeeAllButton
          key={Math.floor(Math.random() * 100000)}
          props={{ activeCategory, router }}
        />
      );
    }
    return null;
  }

  return (
    <SeeAllButton
      key={Math.floor(Math.random() * 100000)}
      props={{ activeCategory, router }}
    />
  );
}

function SeeAllButton({ props }) {
  const { router, activeCategory } = props;
  const { t } = useTranslation();
  return (
    <div className="flex justify-center w-full">
      <Link
        href={`${router.asPath}/categories${
          activeCategory ? `?c=${activeCategory}` : ''
        }`}
        locale={router.locale}
      >
        <a className="text-center anim-fade-up-f hover:bg-zaxe hover:text-white transition-all duration-150 min-w-[155px] p-2 px-10 rounded-full bg-white shadow-xl border border-zinc-100 text-[#686868] text-xl font-medium">
          {t('product-page-components.categories.see-all')}
        </a>
      </Link>
    </div>
  );
}

function PostBlock({ props }) {
  const {
    postSlug,
    postTitle,
    postThumbnail,
    queryProduct,
    queryPCategory,
    type,
  } = props;
  const router = useRouter();
  const { t } = useTranslation();

  const getPostLink = () => {
    if (type === 'global') {
      return `/articles/${postSlug}`;
    }
    return `/products/${queryPCategory}/${queryProduct}/article/${postSlug}`;
  };

  return (
    <Link href={getPostLink()} locale={router.locale}>
      <a
        className="text-black group hover:-translate-y-3 hover:bg-zinc-100 hover:border-zaxe/70 transition-all duration-200 anim-fade-up-f max-w-[16rem] w-full grid-cols-1 place-content-start
      place-items-start bg-white shadow-lg border rounded-xl overflow-hidden"
      >
        <figure className="w-full rounded-b-xl overflow-hidden relative h-[10rem]">
          <Image
            src={postThumbnail}
            layout="fill"
            alt={postTitle.en}
            className="object-cover z-[1] object-center w-full h-full"
          />
        </figure>
        <div className="flex flex-wrap items-center justify-between w-full p-3 ">
          <div className="w-[85%] grid grid-cols-1 place-content-start place-items-start">
            <h2 className="text-sm font-semibold text-left transition-all duration-200 group-hover:text-zaxe text-zinc-600">
              {postTitle[i18n.language]}
            </h2>
            <span className="text-xs text-left text-zinc-400">
              {t('product-page-components.categories.article')}
            </span>
          </div>
          <div className="flex items-center justify-end w-[10%] h-full">
            <span className="p-1 z-[2]  rounded-md text-white bg-zaxe">
              <MdArticle className="text-xl" />
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}

function VideoBlock({ props }) {
  const { label, videoURL, poster, productName } = props;
  const { activateVideoPopup } = useAppContext();
  const { t } = useTranslation();
  const playVideo = () => {
    activateVideoPopup({
      video: {
        title: `${t(label)} | ${productName}`,
        url: videoURL,
        poster,
      },
    });
  };
  return (
    <button
      className="text-black group hover:-translate-y-3 hover:bg-zinc-100 hover:border-zaxe/70 transition-all duration-200 anim-fade-up-f max-w-[16rem] w-full grid-cols-1 place-content-start
      place-items-start bg-white shadow-lg border rounded-xl overflow-hidden"
      type="button"
      onClick={() => playVideo()}
      onKeyPress={() => playVideo()}
    >
      <figure className="w-full rounded-b-xl overflow-hidden relative h-[10rem]">
        <Image
          src={poster}
          layout="fill"
          alt={label}
          className="object-cover z-[1] object-center w-full h-full"
        />
      </figure>
      <div className="flex items-center justify-between w-full p-3 ">
        <div className="w-[85%] grid grid-cols-1 place-content-start place-items-start">
          <h2 className="text-sm font-semibold text-left transition-all duration-200 group-hover:text-zaxe text-zinc-600">
            {t(label)}
          </h2>
          <span className="text-xs text-left text-zinc-400">
            {t('product-page-components.categories.video')}
          </span>
        </div>
        <div className="flex items-center justify-end w-full h-full">
          <span className="p-1 z-[2] rounded-md text-white bg-zaxe">
            <MdVideoLibrary className="text-xl" />
          </span>
        </div>
      </div>
    </button>
  );
}

export default Categories;
