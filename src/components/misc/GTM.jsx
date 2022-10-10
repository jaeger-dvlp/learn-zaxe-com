import { useRouter } from 'next/router';
import React from 'react';

function GTM() {
  const Router = useRouter();
  React.useEffect(() => {
    const {
      document: { title },
      location: { href: url },
    } = window;

    window.dataLayer?.push({
      event: 'pageview',
      page: {
        url,
        title: title || 'Zaxe | Knowledge Base',
      },
    });
  }, [Router]);
  return null;
}

export default GTM;
