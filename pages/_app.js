import '../styles/globals.css'
// import Navbar from '@/components/navbar/navbar'
// import Footer from '@/components/footer'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>First Property</title>
      </Head>

      {/* <Navbar /> */}

      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}
