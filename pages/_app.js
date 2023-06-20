import '../styles/globals.css'
import Head from 'next/head'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

// import Footer from '@/components/footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>First Property</title>
      </Head>

      <NavBar />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}
