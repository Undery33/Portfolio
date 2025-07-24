// src/pages/_app.jsx
import '../styles/globals.css';
import Header from '../components/header/header';
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
