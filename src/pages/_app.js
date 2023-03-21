import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import NextNProgress from 'nextjs-progressbar';

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextNProgress height={5} />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;
