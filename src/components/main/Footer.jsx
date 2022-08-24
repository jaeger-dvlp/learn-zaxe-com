import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';
import SearchBar from '@/src/components/categoriespage/SearchBar';
import Image from 'next/image';
import Images from '@/src/images/Images';

function Footer() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <footer className="flex flex-wrap items-start justify-center w-full h-full bg-zinc-200 font-zaxe">
      <section className="grid w-full grid-cols-1 gap-10 p-5 py-20 max-w-app place-content-start place-items-center">
        <section className="w-full">
          <SearchBar className="footer-search-bar" />
        </section>
        <section className="flex-wrap items-center justify-start hidden w-full gap-5">
          <section className="grid grid-cols-1 gap-1 place-content-start place-items-start">
            <h1 className="text-2xl font-bold text-zinc-700">
              {t('footer.products.heading')}
            </h1>
            <nav>
              <ul className="text-sm">
                {Content.products.map(
                  ({ name, slug, category: { slug: categorySlug } }) => (
                    <li key={`footer-product-${slug}`}>
                      <Link
                        href={`/products/${categorySlug}/${slug}/`}
                        locale={router.locale}
                      >
                        <a className="font-medium transition-all duration-75 !underline-offset-2 hover:underline text-zinc-500 hover:text-zaxe">
                          {name}
                        </a>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </section>
        </section>
        <Link href="/" locale={router.locale}>
          <a className="relative w-20 transition-all duration-150 cursor-pointer hover:scale-105">
            <Image
              className="object-contain w-full h-full"
              src={Images.logo.zxkb}
            />
          </a>
        </Link>
      </section>
    </footer>
  );
}

export default Footer;
