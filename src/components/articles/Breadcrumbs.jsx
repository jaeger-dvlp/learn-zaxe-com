import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { BsChevronRight } from 'react-icons/bs';

function Breadcrumbs({ links }) {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();

  return (
    <nav
      id="bread"
      className="flex flex-wrap items-start justify-center w-full p-5 py-0"
    >
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
  );
}

export default Breadcrumbs;
