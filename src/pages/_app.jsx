// src/pages/_app.jsx
import '../styles/globals.css';
import Header from '../components/Header/Header';
import '../styles/globals.css';
import '../i18n';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
