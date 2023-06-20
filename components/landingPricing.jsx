import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Business',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: 'Contact us for pricing',
    description:
      'No commitment. Cancel anytime. Everything you need to get up and running.',
    features: [
      'Business support',
      'As many products as you want',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
]

export default function LandingPricing() {
  return (
    <div className='isolate overflow-hidden bg-gray-900 w-screen pt-24'>
      <div className='mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='text-xl font-semibold leading-7 text-blue-500'>
            Pricing
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            The right price for you,{' '}
            <br className='hidden sm:inline lg:hidden' />
            whoever you are
          </p>
        </div>
        <div className='relative mt-6'>
          <p className='mx-auto max-w-2xl text-lg leading-8 text-white/60'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
          <svg
            viewBox='0 0 1208 1024'
            className='absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'>
            <ellipse
              cx={604}
              cy={512}
              fill='url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)'
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id='6d1bd035-0dd1-437e-93fa-59d316231eb0'>
                <stop stopColor='#2563eb' />
                <stop offset={1} stopColor='#0c4a6e' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className='flow-root bg-white pb-24 sm:pb-32'>
        <div className='-mt-80'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl'>
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className='flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10'>
                  <div>
                    <h3
                      id={tier.id}
                      className='text-base font-semibold leading-7 text-blue-600'>
                      {tier.name}
                    </h3>
                    <div className='mt-4 flex items-baseline gap-x-2'>
                      <span className='text-5xl font-bold tracking-tight text-gray-900'>
                        {tier.priceMonthly}
                      </span>
                      <span className='text-base font-semibold leading-7 text-gray-600'>
                        /month
                      </span>
                    </div>
                    <p className='mt-6 text-base leading-7 text-gray-600'>
                      {tier.description}
                    </p>
                    <ul
                      role='list'
                      className='mt-10 space-y-4 text-sm leading-6 text-gray-600'>
                      {tier.features.map((feature) => (
                        <li key={feature} className='flex gap-x-3'>
                          <CheckIcon
                            className='h-6 w-5 flex-none text-blue-600'
                            aria-hidden='true'
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className='mt-8 block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                    Speak to a sales representative today
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
