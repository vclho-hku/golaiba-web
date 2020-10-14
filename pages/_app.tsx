import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app'
import SiteLayout from '../components/SiteLayout'

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
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SiteLayout><Component {...pageProps} /></SiteLayout>
    </React.Fragment>
  );
}

export default MyApp;
