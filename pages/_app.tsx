// pages/_app.tsx
import MainHeader from '@/components/main-header'; // Import the header component
import '../styles/globals.css'; // Import global CSS
import { AppProps } from 'next/app'; // Import Next.js's AppProps type
import MainHeaderBackground from '@/components/main-header-background';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* SVG Background */}

      {/* Add the MainHeader Component */}
      <MainHeader />

      {/* Render the page content */}
      <Component {...pageProps} />
    </>
  );
}
