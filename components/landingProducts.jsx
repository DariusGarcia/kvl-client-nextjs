import {
  CogIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  InboxIcon,
  PhoneIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export default function ProductFeatures() {
  return (
    <div className=' py-24  text-white'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            Stay up to date with the latest technology
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-400'>
            We have a wide selection of new equipment that includes everything
            you need to keep your mobile business running smoothly.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none md:grid-cols-2'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <dt className='text-base font-semibold leading-7 text-white'>
                  <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  <p className='text-2xl'>{feature.name}</p>
                </dt>
                <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300'>
                  <p className='flex-auto'>{feature.description}</p>
                  {feature.list && (
                    <ul className='ml-8 md:ml-12 grid grid-cols-2 md:grid-cols-3'>
                      {feature.list.map((item) => (
                        <li className='list-disc'>{item}</li>
                      ))}
                    </ul>
                  )}
                  <p className='mt-6'>
                    <a
                      href={feature.href}
                      className='text-sm font-semibold leading-6 text-blue-600'>
                      Learn more <span aria-hidden='true'>→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    name: 'Phones',
    description:
      'Choose from a selection of top brand Smartphones to help you and your staff stay connected wherever you go. Expand the capabilities of your phones with access to secure and business-friendly apps, conferencing tools, cloud sharing and more.',
    href: '#',
    icon: PhoneIcon,
  },
  {
    name: 'Tablets',
    description:
      'Choose from a range of quality tablets which provide consistent internet connectivity and secure access to all of your business data and applications, while on the go. We provide the tools you need to be efficient and productive no matter where you are; give a sales presentation, write/edit business content, and/or review and update customer data – all from the palm of your hand.',
    href: '#',
    icon: DeviceTabletIcon,
  },
  {
    name: 'Laptops',
    description:
      'Choose from a range of quality laptops which provide consistent internet connectivity and secure access to all of your business data and applications, while on the go. We provide the tools you need to be efficient and productive no matter where you are; give a sales presentation, write/edit business content, and/or review and update customer data.',
    href: '#',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Accessories',
    description:
      "You'll likely need a variety of accessories to get the most out of your mobile devices. KVL Communications offers an extensive selection of mobile accessories, including:",
    list: [
      'Rugged cases',
      'Chargers',
      'Antennas',
      'Headsets',
      'Bluetooth devices',
      'Mounting products',
      'Extra batteries and more',
    ],
    href: '#',
    icon: CogIcon,
  },
]
