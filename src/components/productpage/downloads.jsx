import React from 'react';
import { useTranslation } from 'next-i18next';
import DownloadBlock from '../misc/DownloadBlock';

function Downloads({ product }) {
  const { t } = useTranslation();
  const downloads = product.content.downloads || null;

  return (
    downloads && (
      <div
        data-aos="fade"
        data-aos-delay={200}
        data-aos-duration={500}
        className="grid w-full grid-cols-1 p-0 m-0 bg-white place-content-start place-items-center"
      >
        <div className="grid w-full grid-cols-1 gap-20 p-5 py-20 max-w-app place-content-start place-items-center">
          <h1 className="text-4xl font-bold text-zaxe">
            {t('product-page-components.downloads.title')}
          </h1>
          <div className="relative flex flex-wrap justify-center w-full gap-16">
            {downloads.map((download) => (
              <DownloadBlock download={download} key={download.slug} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Downloads;
