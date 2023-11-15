import { SiTmobile, SiAtandt } from 'react-icons/si'

export default function LogoCloud() {
  return (
    <div className='bg-white mt-24 mb-12 sm:mt-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
          Trusted by the world’s most innovative teams
        </h2>
        <div className='mx-auto mt-12 flex flex-row max-w-lg justify-center items-center gap-x-8 gap-y-10 sm:max-w-xl  sm:gap-x-10 lg:mx-0 lg:max-w-none '>
          <div className='flex justify-center items-center max-h-12 w-full  '>
            <SiAtandt size={80} className='text-[#00A8E0]' />
          </div>
          <div className='flex justify-center items-center max-h-12 w-full  '>
            <p className='text-[#003057] font-bold text-4xl'>Spectrum</p>
          </div>
        </div>
      </div>
    </div>
  )
}
