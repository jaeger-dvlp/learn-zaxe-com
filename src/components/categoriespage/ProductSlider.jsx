/* eslint-disable import/no-unresolved */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { i18n } from 'next-i18next';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/effect-fade';
import Content from '@/src/content/Content';
import { useRouter } from 'next/router';

function ProductSlider() {
  const router = useRouter();
  const [products] = React.useState([
    Content.products.find(({ slug }) => slug === 'zaxe-xdesktop'),
    Content.products.find(({ slug }) => slug === 'zaxe-z3'),
    Content.products.find(({ slug }) => slug === 'zaxe-x3'),
  ]);
  const [activeSlide, setActiveSlide] = React.useState(
    products.findIndex(({ slug }) => slug === router.query.product)
  );

  return (
    <div className="w-full">
      <Swiper
        className="relative z-[1] grid grid-cols-1 place-content-center
        place-items-center items-center max-w-xl w-full gap-0 !overflow-hidden"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        slidesPerView={3}
        initialSlide={products.findIndex(
          ({ slug }) => slug === router.query.product
        )}
        spaceBetween={0}
        onSlideChangeTransitionEnd={() => {
          const currentProduct = products[activeSlide] || null;
          const routeProduct = router.query.product || null;
          if (
            currentProduct &&
            routeProduct &&
            currentProduct.slug !== routeProduct
          ) {
            router.push(
              `/products/${currentProduct.category.slug}/${currentProduct.slug}/categories`
            );
          }
        }}
        centeredSlides
      >
        <button
          type="button"
          className="absolute z-[5] disabled:opacity-50 left-0 top-1/2 -translate-y-1/2
          swiper-button-prev active:bg-zinc-300 transition-all duration-200 active:scale-75 rounded-xl"
          disabled={activeSlide === 0}
        >
          <FiChevronLeft className="text-4xl" />
        </button>
        <button
          type="button"
          className="absolute z-[5] disabled:opacity-50  right-0 top-1/2 -translate-y-1/2
          swiper-button-next active:bg-zinc-300 transition-all duration-200 active:scale-75 rounded-xl"
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
              href={`/products/${product.category.slug}/${product.slug}/categories`}
              locale={i18n.language}
            >
              <a
                className={`w-full ${
                  index === activeSlide
                    ? 'scale-[1.8] opacity-100'
                    : 'scale-[1] hover:opacity-70 opacity-30'
                } grid grid-cols-1 relative text-[#2C2C2C] place-content-center
                place-items-center h-full px-1 py-5 transition-all
                duration-300 rounded-3xl gap-2`}
              >
                <div
                  className={`w-full max-w-[360px]
                  ${
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
                  className={`text-xs font-bold text-current opacity-0
                  transition-all duration-200
                  ${index === activeSlide && '!opacity-100'}`}
                >
                  {product.model}
                </h1>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default ProductSlider;
