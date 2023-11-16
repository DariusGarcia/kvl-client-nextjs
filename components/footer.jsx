/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const navigation = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Services', href: '/services' },
  { id: 3, name: 'Payments', href: '/stripe/payments' },
  { id: 4, name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className='bg-gray-900' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <img
            className='h-24 rounded-md'
            src='/white.jpg'
            alt='KVL Communications'
          />
          <div className='mt-16 xl:mt-0'>
            <div className='md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Navigation
                </h3>
                <ul
                  role='list'
                  className='flex flex-row gap-12  items-center mt-6 w-full'>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-300 hover:text-white hover:underline transition ease-in-out'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between'>
          <div>
            <h3 className='text-sm font-semibold leading-6 text-white'>
              Subscribe to our newsletter
            </h3>
            <p className='mt-2 text-sm leading-6 text-gray-300'>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className='mt-6 sm:flex sm:max-w-md lg:mt-0'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              type='email'
              name='email-address'
              id='email-address'
              autoComplete='email'
              required
              className='w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:w-56 sm:text-sm sm:leading-6'
              placeholder='Enter your email'
            />
            <div className='mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0'>
              <button
                type='submit'
                className='flex w-full items-center justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'>
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className='mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between'>
          <p className='mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0'>
            &copy; {new Date().getFullYear()} KVL Communications, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
