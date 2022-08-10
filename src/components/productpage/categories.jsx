import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

function Categories({ product }) {
  const { t } = useTranslation();
  const router = useRouter();

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
        <div className="relative grid w-full max-w-md grid-cols-1 gap-5 xl:max-w-5xl lg:max-w-5xl xl:grid-cols-2 lg:grid-cols-2 gap-x-14 place-content-center xl:place-items-start lg:place-items-start place-items-center">
          {product.content.categories.map(({ label, slug }) => (
            <Link
              key={slug}
              href={`${router.asPath}/categories?c=${slug}`}
              locale={router.locale}
            >
              <a className="relative flex items-center justify-center w-full p-3 border-b-2 rounded-none xl:justify-between lg:justify-between group border-b-transparent hover:border-b-zaxe">
                <span className="text-2xl font-normal text-center xl:text-left lg:text-left group-hover:font-semibold text-zaxe">
                  {t(label)}
                </span>
                <span className="text-xl xl:block lg:block hidden font-normal text-[#E8E8E8] group-hover:text-[#9A9A9A]">
                  {t('product-page-components.categories.gotopage-button')}
                </span>
              </a>
            </Link>
          ))}
          <div className="flex items-center justify-center w-full mt-14 col-span-full">
            <Link href={`${router.asPath}/categories`} locale={router.locale}>
              <a className="text-center hover:bg-zaxe hover:text-white transition-all duration-150 min-w-[155px] p-2 px-10 rounded-full bg-white shadow-xl border border-zinc-100 text-[#686868] text-xl font-medium">
                {t('product-page-components.categories.see-all')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
