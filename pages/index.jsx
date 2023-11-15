import Head from 'next/head'
import LandingCTA from '@/components/landingCTA'
import LandingHeader from '@/components/landingHeader'
import LandingPricing from '@/components/landingPricing'
import ProductFeatures from '@/components/landingProducts'
import LogoCloud from '@/components/logoCloud'
import MailChimpForm from '@/components/mailchimpForm'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>KVL Communications - Home</title>
        <meta
          name='description'
          content='We are a mobility solutions partner who can provide products and services to help cut company costs and improve productivity. With over 25 years of combined telecom experience, our specialists will assess your current telecommunications infrastructure and consult with you on a non-biased path for future growth.'
        />
        <meta
          name='keywords'
          content='strategic consultation, cost optimization, security, compliance, scalability, enhanced connectivity, mobility solutions, products, improve productivity, phones, laptops, tablets, accessories, telecommunication,'
        />
      </Head>
      <div className='relative bg-white w-full flex justify-center my-12'>
        <div className='max-w-7xl flex flex-col justify-center items-center bg-white'>
          <LandingHeader />
          <LogoCloud />
          <section className='mt-12'>
            <MailChimpForm />
          </section>
          <div className='bg-gray-900 w-screen mt-36'>
            <ProductFeatures />
          </div>
          <div className=''>
            <LandingPricing />
          </div>
          <LandingCTA />
          <MailChimpForm />
        </div>
      </div>
    </>
  )
}
