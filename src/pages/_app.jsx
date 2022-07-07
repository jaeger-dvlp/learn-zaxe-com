import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import '../styles/animations.css';
import '../styles/fonts/fonts.css';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../../next-i18next.config';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({ once: true, mirror: false });
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18nextConfig);
