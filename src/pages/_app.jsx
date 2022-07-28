import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import '../styles/animations.css';
import '../styles/fonts/fonts.css';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../../next-i18next.config';
import AppWrapper from '../components/contexts/AppContext';
import NotificationPopup from '../components/main/NotificationPopup';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({ once: true, mirror: false });
  }, []);
  return (
    <AppWrapper>
      <NotificationPopup />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
