// components/GoogleAnalytics.js
import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NNC36CFCK2';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'G-NNC36CFCK2');
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
