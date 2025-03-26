import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import NavBar from '@/components/navbar';
import UlaiFooter from '@/components/ulaiFooter';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='overflow-x-hidden scroll-smooth bg-black'>
      <NavBar />
      <Component {...pageProps} />
      <UlaiFooter />
      <script
        defer={true}
        src='https://www.ulai.in/file-server/uploads/ulai-stg/web-sdk-init.js?66c5e0b44e27d91343aa4cf3'
      ></script>
    </div>
  );
}

export default MyApp;
