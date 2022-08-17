import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { BsChevronRight } from 'react-icons/bs';

function Breadcrumbs({ links }) {
  const router = useRouter();
  const { t } = useTranslation();
  const { locale } = router;
  return (
    <section
      id="bread"
      className="flex flex-wrap items-start justify-center w-full p-5 py-0"
    >
      <nav className="w-full">
        <ul className="flex flex-wrap items-center justify-center w-full gap-2 text-xs font-medium text-zinc-400">
          <li>
            <Link href="/" locale={locale}>
              <a className="hover:underline">
                {t('common:bread-crumbs.knowledge-base')}
              </a>
            </Link>
          </li>
          {links &&
            links.map(({ text: urlText, url }) => (
              <li
                key={`bread-crumb-${urlText}`}
                className="flex items-center justify-center gap-2"
              >
                <BsChevronRight />
                <Link href={url}>
                  <a className="hover:underline">{urlText}</a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </section>
  );
}

export default Breadcrumbs;
