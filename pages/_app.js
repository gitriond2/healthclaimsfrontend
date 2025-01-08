// pages/_app.js
import '../styles/globals.css';
import '../styles/tailwind.css'; 
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';



function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
