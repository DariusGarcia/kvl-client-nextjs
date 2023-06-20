import LandingCTA from '@/components/landingCTA'
import LandingHeader from '@/components/landingHeader'
import LandingPricing from '@/components/landingPricing'
import ProductFeatures from '@/components/landingProducts'
import LogoCloud from '@/components/logoCloud'

export default function LandingPage() {
  return (
    <div className='relative bg-white w-full flex justify-center my-12'>
      <div className='max-w-7xl flex flex-col justify-center items-center bg-white'>
        <LandingHeader />
        <LogoCloud />
        <div className='bg-gray-900 w-screen mt-36'>
          <ProductFeatures />
        </div>
        <div className=''>
          <LandingPricing />
        </div>
        <LandingCTA />
      </div>
    </div>
  )
}
