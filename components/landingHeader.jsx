import Link from 'next/link'
import Spline from '@splinetool/react-spline'

export default function LandingHeader() {
  return (
    <div className='relative bg-white w-full'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <div className='px-6 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 md:mr-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <img
              className='md:h-48 w-full md:pr-24'
              src='/white.jpg'
              alt='Your Company'
            />
            <div className='hidden sm:mt-32 sm:flex lg:mt-16'></div>
            <h1 className='mt-12 md:mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Brand name products to enrich your online business
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              KVL Communications offers a selection of new equipment that
              includes everything you need to keep your mobile business running
              smoothly.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <Link
                href='/services'
                className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                Get started
              </Link>
              <Link
                href='/contact'
                className='text-sm font-semibold leading-6 text-gray-900'>
                Learn more <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 rounded-lg'>
          <div className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full shadow-lg '>
            <Spline scene='https://prod.spline.design/uWliGq2xJzALdGJP/scene.splinecode' />
          </div>
        </div>
      </div>
    </div>
  )
}
