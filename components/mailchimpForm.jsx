import { useState } from 'react'
import axios from 'axios'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function MailChimpForm() {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log('Subscription successful:', response.data)
      setSuccessMessage('Subscription successful! Thank you for subscribing.')
      setErrorMessage('') // Reset error message if there was one before
      setEmail('')
    } catch (error) {
      console.error('Subscription error:', error)
      setSuccessMessage('') // Reset success message if there was one before
      setErrorMessage('Subscription failed. Please try again.') // Set error message
    }
  }

  const handleDismiss = () => {
    setSuccessMessage('')
    setErrorMessage('')
  }

  return (
    <div className='bg-gray-50 w-full max-w-4xl flex flex-col justify-center items-center shadow sm:rounded-lg'>
      <div className='px-4 py-12 sm:p-12'>
        <h3 className='text-2xl font-semibold leading-6 text-gray-900'>
          Subscribe to our newsletter
        </h3>
        <div className='mt-2 max-w-xl text-sm text-gray-500'>
          <p>Enter your email address to join our newsletter today.</p>
        </div>
        <form className='mt-5 sm:flex sm:items-center'>
          <div className='w-full sm:max-w-xs'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email'
              id='email'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
              placeholder='you@example.com'
            />
          </div>
          <button
            onClick={handleSubscribe}
            className='mt-3 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0 sm:w-auto'>
            Subscribe
          </button>
        </form>
        {successMessage && (
          <div className='rounded-md bg-green-50 p-4 mt-6'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <CheckCircleIcon
                  className='h-5 w-5 text-green-400'
                  aria-hidden='true'
                />
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-green-800'>
                  {successMessage}
                </p>
              </div>
              <div className='ml-auto pl-3'>
                <div className='-mx-1.5 -my-1.5'>
                  <button
                    type='button'
                    onClick={handleDismiss}
                    className='inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50'>
                    <span className='sr-only'>Dismiss</span>
                    <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {errorMessage && (
          <div className='rounded-md bg-red-50 p-4 mt-6'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <XCircleIcon
                  className='h-5 w-5 text-red-400'
                  aria-hidden='true'
                />
              </div>
              <div className='ml-3'>
                <h3 className='text-sm font-medium text-red-800'>
                  {errorMessage}
                </h3>
                <div className='mt-2 text-sm text-red-700'>
                  <ul role='list' className='list-disc space-y-1 pl-5'>
                    <li>Email might already be subscribed.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
