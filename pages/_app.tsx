import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import SiteLayout from '../src/components/SiteLayout';
import Firebase, { FirebaseContext } from '../src/Firebase';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>上書房 | Golaiba</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <FirebaseContext.Provider value={new Firebase()}>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </FirebaseContext.Provider>
    </React.Fragment>
  );
}

export default MyApp;
