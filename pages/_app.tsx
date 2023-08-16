import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

// Importación tradicional
import TopNavbar from '../components/navbar/TopNavbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{
        colorScheme: 'light',
        loader: 'bars',
      }}
    >
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavbar
        links={[
          { link: '/profile', label: 'Profile' },
          { link: '/albums', label: 'Albums' },
        ]}
      />

      <div>
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}
