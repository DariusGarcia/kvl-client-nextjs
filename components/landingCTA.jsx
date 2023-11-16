import Link from 'next/link'

export default function LandingCTA() {
  return (
    <div className='overflow-hidden bg-white pt-12 md:pt-32'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Boost your productivity
            </h2>
            <h3 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4'>
              Get started with us
            </h3>

            <p className='mt-6 text-base leading-7 text-gray-600'>
              We’re here to help you succeed. Reach out to one of our experts
              today.
            </p>
            <div className='mt-10 flex'>
              <Link
                href='/contact'
                className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition ease-out focus-visible:outline-blue-600'>
                Contact us <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <img
                src='https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'
                alt=''
                className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover shadow-lg'
              />
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                <img
                  src='https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'
                  alt=''
                  className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover shadow-lg'
                />
              </div>
              <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                <img
                  src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80'
                  alt=''
                  className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover shadow-lg'
                />
              </div>
              <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                <img
                  src='https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80'
                  alt=''
                  className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover shadow-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
