import { useState } from 'react'
import axios from 'axios'

export default function MailChimpForm() {
  const [email, setEmail] = useState('')

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log('Subscription successful:', response.data)
    } catch (error) {
      console.error('Subscription error:', error)
    }
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
      </div>
    </div>
  )
}
