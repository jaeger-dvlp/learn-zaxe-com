/* eslint-disable import/no-unresolved */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { i18n, useTranslation } from 'next-i18next';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/effect-fade';

import Content from '../../content/Content';

function Products() {
  const { t } = useTranslation();
  const [products] = React.useState([
    Content.products.find(({ slug }) => slug === 'zaxe-xdesktop'),
    Content.products.find(({ slug }) => slug === 'zaxe-z3'),
    Content.products.find(({ slug }) => slug === 'zaxe-x3'),
  ]);

  const [activeSlide, setActiveSlide] = React.useState(null);

  return (
    <div className="grid w-full grid-cols-1 bg-white font-zaxe place-content-start place-items-center">
      <div
        data-aos="fade"
        data-aos-delay={200}
        data-aos-duration={500}
        className="grid w-full grid-cols-1 gap-10 px-5 py-10 bg-white max-w-app place-content-start place-items-center"
      >
        <h1 className="text-2xl z-[2] font-bold text-zaxe xl:text-6xl lg:text-6xl">
          {t('homepage.products.heading')}
        </h1>
        <div className="xl:grid lg:grid hidden z-[1] w-full grid-cols-1 gap-10 xl:grid-cols-3 lg:grid-cols-3 place-content-start place-items-center">
          {products.map((product) => (
            <Link
              key={`route-product-${product.slug}`}
              href={`products/${product.category.slug}/${product.slug}`}
              locale={i18n.language}
            >
              <a className="w-full grid grid-cols-1 text-[#2C2C2C] place-content-end place-items-center h-full max-w-[370px] px-1 py-5 bg-white shadow-none hover:shadow-xl hover:text-black hover:-translate-y-5 border border-transparent hover:border-zinc-100 transition-all duration-200 rounded-3xl gap-5">
                <div
                  className={`w-full max-w-[360px] ${
                    product.slug === 'zaxe-xdesktop' && '!max-w-[210px] mb-4'
                  }`}
                >
                  <Image
                    src={product.images.main.img}
                    alt={product.images.main.alt}
                    layout="responsive"
                  />
                </div>
                <h1 className="text-3xl font-bold text-current">
                  {product.model}
                </h1>
              </a>
            </Link>
          ))}
        </div>
        <div className="grid w-full grid-cols-1 overflow-hidden place-content-center place-items-center xl:hidden lg:hidden">
          <Swiper
            className="relative z-[1] grid grid-cols-1 place-content-center place-items-center items-center w-full max-w-lg gap-0 !overflow-hidden"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            slidesPerView={3}
            initialSlide={1}
            spaceBetween={0}
            centeredSlides
          >
            <button
              type="button"
              className="absolute z-[5] disabled:opacity-50 left-0 top-1/2 -translate-y-1/2 swiper-button-prev
              active:bg-zinc-300 transition-all duration-200 active:scale-75 rounded-xl"
              disabled={activeSlide === 0}
            >
              <FiChevronLeft className="text-4xl" />
            </button>
            <button
              type="button"
              className="absolute z-[5] disabled:opacity-50  right-0 top-1/2 -translate-y-1/2 swiper-button-next
              active:bg-zinc-300 transition-all duration-200 active:scale-75 rounded-xl"
              disabled={activeSlide === products.length - 1}
            >
              <FiChevronRight className="text-4xl" />
            </button>
            {products.map((product, index) => (
              <SwiperSlide
                key={`route-product-slide-element-${product.slug}`}
                className={`${
                  index === activeSlide ? 'z-[2]' : 'z-[1]'
                } relative py-[3.5rem]`}
              >
                <Link
                  href={`products/${product.category.slug}/${product.slug}`}
                  locale={i18n.language}
                >
                  <a
                    className={`w-full ${
                      index === activeSlide
                        ? 'scale-[1.8] opacity-100'
                        : 'scale-[1] opacity-50'
                    } grid grid-cols-1 relative text-[#2C2C2C] place-content-center place-items-center h-full px-1 py-5 transition-all duration-300 rounded-3xl gap-2`}
                  >
                    <div
                      className={`w-full max-w-[360px] ${
                        product.slug === 'zaxe-xdesktop' &&
                        'max-w-[80px] sm:max-w-[100px] md:max-w-[130px]'
                      }`}
                    >
                      <Image
                        src={product.images.main.img}
                        alt={product.images.main.alt}
                        layout="responsive"
                      />
                    </div>
                    <h1
                      className={`text-xs font-bold text-current opacity-0 transition-all duration-200 ${
                        index === activeSlide && '!opacity-100'
                      }`}
                    >
                      {product.model}
                    </h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Products;
