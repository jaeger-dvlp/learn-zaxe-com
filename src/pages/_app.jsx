import AOS from 'aos';
import React from 'react';
import 'aos/dist/aos.css';
import '@/src/styles/globals.css';
import '@/src/styles/animations.css';
import '@/src/styles/fonts/fonts.css';
import { appWithTranslation } from 'next-i18next';

import Loader from '@/src/components/main/Loader';
import Header from '@/src/components/main/Header';
import nextI18nextConfig from '@/next-i18next.config';
import AppWrapper from '@/src/components/contexts/AppContext';
import NotificationPopup from '@/src/components/main/NotificationPopup';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({ once: true, mirror: false });
  }, []);
  return (
    <AppWrapper>
      <Header />
      <Loader />
      <NotificationPopup />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
