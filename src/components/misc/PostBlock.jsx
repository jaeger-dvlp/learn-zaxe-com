import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { i18n, useTranslation } from 'next-i18next';
import { BiLinkExternal } from 'react-icons/bi';

function PostBlock({ props }) {
  const { CDNURL } = process.env;
  const {
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
  return (
    <Link
      href={`/products/${queryPCategory}/${queryProduct}/article/${postSlug}`}
      locale={locale}
    >
      <a className="relative grid w-full h-full max-w-[16rem] grid-cols-1 overflow-hidden transition-all duration-200 bg-white shadow-xl cursor-pointer hover:-translate-y-3 hover:shadow-2xl place-content-start place-items-center rounded-xl">
        <BiLinkExternal className="absolute z-[3] text-4xl bottom-2 right-2 text-zinc-200" />
        <div className="relative z-[2] w-full h-[10rem] max-w-xs overflow-hidden rounded-xl">
          <Image
            src={`${CDNURL}${postThumbnail}`}
            layout="fill"
            alt={postTitle.en}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="relative z-[1] flex items-end justify-between w-full p-3 bg-white">
          <div className="grid w-[80%] gap-1 grid-cols-1 place-content-end place-items-start">
            <span className="text-xs text-[#868686]">
              {t(Categories.find(({ slug }) => slug === postCategory).label) ||
                null}
            </span>
            <h1 className="text-sm text-[#555555]">
              {postTitle[i18n.language]}
            </h1>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default PostBlock;
