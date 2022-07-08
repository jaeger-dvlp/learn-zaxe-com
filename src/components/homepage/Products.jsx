import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { i18n, useTranslation } from 'next-i18next';

import Content from '../../content/Content';

export default function Products() {
  const { t } = useTranslation();
  const [products] = React.useState([
    Content.products.find(({ slug }) => slug === 'zaxe-xdesktop'),
    Content.products.find(({ slug }) => slug === 'zaxe-z3'),
    Content.products.find(({ slug }) => slug === 'zaxe-x3'),
  ]);
  return (
    <div className="grid w-full grid-cols-1 bg-white font-zaxe place-content-start place-items-center">
      <div
        data-aos="fade"
        data-aos-delay={400}
        data-aos-duration={500}
        className="grid w-full grid-cols-1 gap-10 px-5 py-10 bg-white max-w-app place-content-start place-items-center"
      >
        <h1 className="text-2xl z-[2] font-bold text-zaxe xl:text-6xl lg:text-6xl">
          {t('homepage.products.heading')}
        </h1>
        <div className="grid z-[1] w-full grid-cols-1 gap-10 xl:grid-cols-3 lg:grid-cols-3 place-content-start place-items-center">
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
      </div>
    </div>
  );
}
