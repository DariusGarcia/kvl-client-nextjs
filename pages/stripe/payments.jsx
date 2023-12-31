import ContactSales from '@/components/contactSales'
import MailChimpForm from '@/components/mailchimpForm'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Link from 'next/link'

const benefits = [
  'Business support',
  'As many products as you want',
  'Basic analytics',
  '24-hour support response time',
]

export default function PaymentsPage() {
  return (
    <>
      <Head>
        <title>KVL Communications - Payments</title>
      </Head>
      <div className='bg-gray-900 py-12 sm:py-32 h-full'>
        <div className='relative isolate'>
          <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
              <img
                className='max-w-md flex-none rounded-2xl shadow-xl md:h-56'
                src='/white.jpg'
                alt='logo'
              />
              <div className='w-full flex-auto'>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  Payments
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  We are a mobility solutions partner who can provide products
                  and services to help cut company costs and improve
                  productivity.
                </p>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  Join our team
                </p>
                <ul
                  role='list'
                  className='mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2'>
                  {benefits.map((benefit) => (
                    <li key={benefit} className='flex gap-x-3'>
                      <CheckCircleIcon
                        className='h-7 w-5 flex-none'
                        aria-hidden='true'
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className='mt-10 flex'>
                  <form
                    action='https://kvl-server.herokuapp.com/create-checkout-session'
                    method='POST'
                    className='text-md font-medium leading-6 text-white w-full'>
                    <button
                      type='submit'
                      className='bg-blue-600 hover:bg-blue-500 transition ease-out p-2 rounded-md w-full'>
                      Go to Stripe checkout portal
                      <span aria-hidden='true'>&rarr;</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
            aria-hidden='true'>
            <div
              className='aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25'
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
        <section className='mt-24 md:mt-36'>
          <ContactSales />
        </section>
      </div>
    </>
  )
}
