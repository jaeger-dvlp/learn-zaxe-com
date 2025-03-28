import React from 'react';
import { useRouter } from 'next/router';
import { BsImage } from 'react-icons/bs';
import Content from '@/src/content/Content';
import { useTranslation } from 'next-i18next';

function DownloadDocuments() {
  const router = useRouter();
  const { t } = useTranslation();
  const [documents] = React.useState(Content.components.downloadDocuments);

  return (
    <div
      data-aos="fade"
      data-aos-delay={200}
      data-aos-duration={500}
      className="grid w-full grid-cols-1 bg-white font-zaxe place-content-start place-items-center"
    >
      <div className="grid w-full grid-cols-1 px-5 bg-white xl:px-9 lg:px-9 max-w-app place-content-start place-items-center py-28">
        <div className="grid w-full grid-cols-1 gap-1 xl:grid-cols-12 lg:grid-cols-12 place-content-start place-items-center">
          <div className="grid w-full h-full grid-cols-1 col-span-5 py-0 xl:py-3 lg:py-3 place-content-start place-items-start">
            <h1 className="mb-6 text-2xl font-bold xl:text-4xl lg:text-4xl text-zaxe">
              {t('homepage.download-documents.heading')}
            </h1>
            <ul className="grid w-full grid-cols-1 gap-3 place-content-start place-items-start">
              {documents.map(
                ({
                  slug: docSlug,
                  title: docTitle,
                  link: docLink,
                  links: docLinks,
                }) => (
                  <li key={docSlug}>
                    <a
                      href={docLinks ? docLinks[router.locale] : docLink}
                      download
                      className="text-xl font-medium transition-all duration-150 hover:text-black xl:text-2xl lg:text-lg text-zaxe"
                    >
                      {docTitle[router.locale]}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="items-center justify-center hidden w-full col-span-7 xl:flex lg:flex">
            <div className="w-full flex p-0 m-0 h-full min-h-[349px] rounded-2xl bg-[#313131] overflow-hidden relative">
              <BsImage className="absolute text-4xl bottom-6 right-6 text-zaxe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadDocuments;
