import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Images from '../../images/Images';

function Loader() {
  const Router = useRouter();
  const [loader, setLoader] = React.useState({
    isActive: true,
    inHTML: true,
  });

  const HideLoader = () => {
    setTimeout(() => setLoader({ isActive: false, inHTML: true }), 1500);
    setTimeout(() => setLoader({ isActive: false, inHTML: false }), 2000);
  };

  const StartLoader = () => {
    setLoader({
      isActive: true,
      inHTML: true,
    });
    HideLoader();
  };

  useEffect(() => StartLoader(), [Router.asPath]);

  return (
    loader.inHTML && (
      <div
        className={`${
          loader.isActive
            ? 'transition-none duration-[0ms] !opacity-100 !visible'
            : 'transition-all duration-500 !opacity-0 !invisible'
        } zaxe-app-loader fixed !z-[99] top-0 left-0 grid w-screen h-screen grid-cols-1 p-5 
		bg-white place-content-center place-items-center`}
      >
        <div
          data-aos="zoom-out"
          data-aos-delay={400}
          data-aos-duration={750}
          className="w-full max-w-[5rem] p-0 m-0"
        >
          <Image src={Images.loader.zxkb} alt="Zaxe Knowledge Base" />
        </div>
      </div>
    )
  );
}

export default Loader;
