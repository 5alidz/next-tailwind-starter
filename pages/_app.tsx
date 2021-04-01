import '../styles/main.css';
import '../styles/tailwind.css';
import '../styles/nprogress.css';

import { AppProps } from 'next/app';
import Nprogress from 'nprogress';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes';

Router.events.on('routeChangeStart', () => Nprogress.start());
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
