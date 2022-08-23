import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import SearchBar from '@/src/components/misc/SearchBar';

function ProductNav({ product }) {
  const { t } = useTranslation();

  return (
    <div
      data-aos="fade"
      data-aos-delay={200}
      data-aos-duration={500}
      className="relative flex flex-wrap items-center justify-start w-full gap-5 p-5 xl:h-full lg:h-full xl:flex-nowrap lg:flex-nowrap xl:max-w-app lg:max-w-app md:max-w-md"
    >
      <div className="grid w-full grid-cols-1 xl:hidden lg:hidden place-content-start place-items-center">
        <span className="text-3xl font-bold text-center text-zaxe">
          {t('product-page-components.product-nav.title')}
        </span>
        <h1 className="text-5xl font-bold text-center xl:text-7xl lg:text-7xl text-zaxe">
          {product.name}
        </h1>
      </div>
      <div className="w-full xl:max-w-[400px] lg:max-w-[400px] max-w-full flex justify-center items-end">
        <Image
          placeholder="blur"
          src={product.images.main.img}
          alt={product.images.main.alt}
        />
      </div>
      <div className="h-full gap-4  xl:order-none lg:order-none order-2 grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-2 place-content-end place-items-center w-full xl:max-w-[235px] lg:max-w-[235px] max-w-full">
        {product.content.navButtons.map(({ slug, isLink, linkData, label }) =>
          // eslint-disable-next-line no-nested-ternary
          isLink ? (
            linkData.isExternal ? (
              <a
                key={slug}
                className="w-full h-full grid grid-cols-1 place-content-center place-items-center text-center bg-[#F5F5F5] p-1 py-2.5 rounded-[20px] text-[#6F6F6F] transition-color
                duration-150 hover:bg-zaxe hover:text-white xl:text-[22px] lg:text-[22px] text-lg min-h-[60px] ring-2 ring-transparent active:ring-sky-300 font-medium"
                href={linkData.url}
              >
                {t(label)}
              </a>
            ) : (
              <Link key={slug} href={linkData.url}>
                <a
                  className="w-full h-full grid grid-cols-1 place-content-center place-items-center text-center bg-[#F5F5F5] p-1 py-2.5 rounded-[20px] text-[#6F6F6F] transition-color
                duration-150 hover:bg-zaxe hover:text-white xl:text-[22px] lg:text-[22px] text-lg min-h-[60px] ring-2 ring-transparent active:ring-sky-300 font-medium"
                >
                  {t(label)}
                </a>
              </Link>
            )
          ) : (
            <button
              key={slug}
              type="button"
              className="w-full h-full grid grid-cols-1 place-content-center place-items-center text-center bg-[#F5F5F5] p-1 py-2.5 rounded-[20px] text-[#6F6F6F] transition-color
                duration-150 hover:bg-zaxe hover:text-white xl:text-[22px] lg:text-[22px] text-lg min-h-[60px] ring-2 ring-transparent active:ring-sky-300 font-medium"
            >
              {t(label)}
            </button>
          )
        )}
      </div>
      <div className="relative grid w-full h-full grid-cols-1 gap-0 place-content-end xl:place-items-start lg:place-items-start place-items-center">
        <span className="hidden text-3xl font-bold text-zaxe xl:block lg:block">
          {t('product-page-components.product-nav.title')}
        </span>
        <h1 className="hidden font-bold text-7xl text-zaxe xl:block lg:block">
          {product.name}
        </h1>
        <p className="w-full xl:text-left lg:text-left text-center text-xl my-5 max-w-md font-medium text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <SearchBar />
      </div>
    </div>
  );
}

export default ProductNav;
