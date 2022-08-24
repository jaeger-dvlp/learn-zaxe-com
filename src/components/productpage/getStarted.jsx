import React from 'react';
import { useTranslation } from 'next-i18next';
import VideoBlock from '@/src/components/misc/VideoBlock';

function GetStarted({ product }) {
  const { starterVideos } = product.content || null;
  const { t } = useTranslation();
  const { name } = product;

  return (
    <div
      data-aos="fade"
      data-aos-delay={300}
      data-aos-duration={500}
      className="grid w-full grid-cols-1 p-0 m-0 bg-white place-content-start place-items-center"
    >
      <div className="grid w-full grid-cols-1 gap-20 p-5 py-20 max-w-app place-content-start place-items-center">
        <h1 className="text-4xl font-bold text-zaxe">
          {t('product-page-components.get-started.title')}
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-16">
          {starterVideos &&
            starterVideos.map(({ label, thumbnail: poster, videoURL }) => (
              <VideoBlock
                key={`${label}Video`}
                props={{ label, poster, videoURL, productName: name }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
