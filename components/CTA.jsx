export default function CTA() {
  return (
    <div className='text-white'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Boost your productivity.
          </h2>
          <h3 className='text-3xl font-bold tracking-tight sm:text-4xl mt-4'>
            Get started with us
          </h3>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8'>
            We’re here to help you succeed. Reach out to one of our experts
            today.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm transition ease-out font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
              Get started
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 hover:underline transition ease-out hover:text-gray-300'>
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
