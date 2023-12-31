import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NavBar() {
  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-center'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/'>
                    <img
                      className='block h-8 w-auto lg:hidden'
                      src={'/white.jpg'}
                      alt='KVL Communications logo'
                    />
                  </Link>
                  <Link href='/'>
                    <img
                      className='hidden h-12 w-auto lg:block'
                      src={'/white.jpg'}
                      alt='KVL Communications logo'
                    />
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href='/'
                    className='inline-flex items-center  hover:border-b border-blue-500 transition ease-out  px-1 pt-1 text-sm font-medium hover:text-gray-500'>
                    Home
                  </a>
                  <a
                    href='/services'
                    className='inline-flex items-center hover:border-b border-blue-500 transition ease-out  px-1 pt-1 text-sm font-medium hover:text-gray-500'>
                    Services
                  </a>
                  <a
                    href='/stripe/payments'
                    className='inline-flex items-center hover:border-b border-blue-500 transition ease-out  px-1 pt-1 text-sm font-medium hover:text-gray-500'>
                    Payments
                  </a>
                  <a
                    href='/contact'
                    className='inline-flex items-center hover:border-b border-blue-500 transition ease-out  px-1 pt-1 text-sm font-medium hover:text-gray-500'>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pb-4 pt-2'>
              {/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as='a'
                href='/'
                className='block border-l-4 border-blue-500 bg-blue-50 py-2 pl-3 pr-4 text-base font-medium text-blue-700'>
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/services'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'>
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/stripe/payments'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'>
                Payments
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/contact'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'>
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
