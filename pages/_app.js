import Head from 'next/head';
import '../styles.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kristijan Bambir</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
