import '../styles/globals.css'
import Layout from '../components/Layout';
import type { AppProps } from 'next/app'
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Lintu</title>
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;800&display=swap"
          rel="stylesheet" 
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
