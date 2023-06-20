import Link from 'next/link'

export default function Success() {
  return (
    <>
      <div className='flex justify-center h-full mt-40 mb-48'>
        <section className='mt-8 p-12 flex gap-8 justify-center flex-col text-center w-full md:w-1/2 h-5/6  bg-primary text-black  shadow-xl  items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-green-600/20'>
          <h1 className='text-2xl font-bold md:text-4xl pb-4 border-b-2 border-lightGrey p-8'>
            Payment successful! Thank you for your order.
          </h1>
          <p className='text-lg'>
            One of our representatives will get back to you shortly.
          </p>
          <p className='text-lg'>Please return to the home page.</p>
          <span className='flex justify-center mb-12'>
            <Link
              href='/'
              className='bg-gray-200 p-2 h-12 w-24 justify-center flex items-center  text-black rounded-xl font-semibold hover:bg-gray-100 transition ease-out'>
              Go to home
            </Link>
          </span>
        </section>
      </div>
    </>
  )
}
