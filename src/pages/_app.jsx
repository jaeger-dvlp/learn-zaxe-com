import AOS from 'aos';
import React from 'react';
import 'aos/dist/aos.css';
import '@/src/styles/code.css';
import '@/src/styles/posts.css';
import '@/src/styles/globals.css';
import '@/src/styles/animations.css';
import '@/src/styles/fonts/fonts.css';
import { appWithTranslation } from 'next-i18next';

import Loader from '@/src/components/main/Loader';
import Header from '@/src/components/main/Header';
import Footer from '@/src/components/main/Footer';
import nextI18nextConfig from '@/next-i18next.config';
import ScrollTop from '@/src/components/misc/ScrollTop';
import VideoPopup from '@/src/components/popups/VideoPopup';
import AppWrapper from '@/src/components/contexts/AppContext';
import NotificationPopup from '@/src/components/popups/NotificationPopup';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({ once: true, mirror: false });
  }, []);
  return (
    <AppWrapper>
      <Header />
      <Loader />
      <NotificationPopup />
      <VideoPopup />
      <Component {...pageProps} />
      <ScrollTop />
      <Footer />
    </AppWrapper>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
