import React from 'react';
import '../styles/globals.css';
import '../styles/fonts/fonts.css';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../../next-i18next.config';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18nextConfig);
