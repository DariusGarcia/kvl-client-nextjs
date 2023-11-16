import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const stats = [
  { id: 1, name: '', value: 'Strategic Consultation' },
  { id: 2, name: '', value: 'Enhanced connectivity' },
  { id: 3, name: '', value: 'Scalability' },
  { id: 4, name: '', value: 'Cost optimization' },
  { id: 5, name: '', value: 'Security and compliance' },
]

export default function Stats() {
  return (
    <div className='relative isolate w-full py-12 sm:py-32 overflow-hidden bg-gray-900 rounded-md'>
      <img
        src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15'
        alt=''
        className='absolute inset-0 -z-10 h-full w-full object-cover'
      />
      <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        <div
          className='absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10'
          aria-hidden='true'>
          <div
            className='aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
          <h2 className='text-base font-semibold leading-8 text-blue-400'>
            Introducing our full Telecommunication Consultation Services.
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Let us help you achieve great efficiency, connectivity, and growth
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Today's fast-paced digital world requires staying ahead in the
            ever-changing telecommunications sector. Our expertise will guide
            you through communication technology and provide a personalized
            approach to meet your needs.
          </p>
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='flex flex-col gap-y-3 border-l border-white/10 pl-6'>
              <dt className='text-sm leading-6'>{stat.name}</dt>
              <dd className='order-first text-3xl font-semibold tracking-tight'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className='h-12 w-full md:w-max p-2 flex flex-row items-center justify-center md:justify-start mt-12 md:mt-24 bg-blue-600 hover:bg-blue-500 transition ease-in-out rounded-md'>
          <Link
            href='/contact'
            className='flex flex-row items-center gap-2 text-white hover:underline transition ease-in-out font-semibold'>
            Schedule your consultation today{' '}
            <span className='w-8 text-white'>
              <ArrowRightIcon size={5} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
