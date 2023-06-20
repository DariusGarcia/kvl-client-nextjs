import CTA from '@/components/CTA'
import LogoCloud from '@/components/logoCloud'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  CogIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  HeartIcon,
  PencilSquareIcon,
  PhoneIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Phones',
    description:
      'Choose from a selection of top brand Smartphones to help you and your staff stay connected wherever you go. Expand the capabilities of your phones with access to secure and business-friendly apps, conferencing tools, cloud sharing and more.',
    href: '/services',
    icon: PhoneIcon,
  },
  {
    name: 'Tablets',
    description:
      'Choose from a range of quality tablets which provide consistent internet connectivity and secure access to all of your business data and applications, while on the go. We provide the tools you need to be efficient and productive no matter where you are; give a sales presentation, write/edit business content, and/or review and update customer data – all from the palm of your hand.',
    href: '/services',
    icon: DeviceTabletIcon,
  },
  {
    name: 'Laptops',
    description:
      'Choose from a range of quality laptops which provide consistent internet connectivity and secure access to all of your business data and applications, while on the go. We provide the tools you need to be efficient and productive no matter where you are; give a sales presentation, write/edit business content, and/or review and update customer data.',
    href: '/services',
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
    href: '/services',
    icon: CogIcon,
  },
]

export default function ServicesPage() {
  return (
    <div className='bg-white py-12 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-4 justify-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Services and products offered
        </h2>
        <p className='max-w-lg text-center'>
          We are a mobility solutions partner who can provide products and
          services to help cut company costs and improve productivity.
        </p>
        <div className='mt-12 px-4 md:px-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center'>
          <dl className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2'>
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  <p className='text-2xl'>{feature.name}</p>
                </dt>
                <dd className='mt-1 text-base leading-7 text-gray-600'>
                  {feature.description}
                  {feature.list && (
                    <ul className='ml-8 md:ml-6 grid grid-cols-2'>
                      {feature.list.map((item) => (
                        <li className='list-disc'>{item}</li>
                      ))}
                    </ul>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <LogoCloud />
        <div className='w-screen bg-gray-700 my-24'>
          <CTA />
        </div>
      </div>
    </div>
  )
}
