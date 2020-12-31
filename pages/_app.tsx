import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import SiteLayout from '../src/components/SiteLayout';
import Firebase, { FirebaseContext } from '../src/Firebase';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

const client = new ApolloClient({
  uri:
    process.env.NEXT_PUBLIC_GQL_PROTOCOL +
    '://' +
    process.env.NEXT_PUBLIC_GQL_HOST,
  cache: new InMemoryCache(),
});

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
      <ApolloProvider client={client}>
        <FirebaseContext.Provider value={new Firebase()}>
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </FirebaseContext.Provider>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
