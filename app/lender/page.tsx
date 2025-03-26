import LandingPageHeader from '@/components/lender/sections/LandingPageHeader'
import CallToAction from '@/components/lender/sections/CallToAction'
import Features from '@/components/lender/sections/Features'
import Hero from '@/components/lender/sections/Hero'
import LandingPageFooter from '@/components/lender/sections/LandingPageFooter'
import React from 'react'

const LenderLandingPage = () => {
  return (
    <>
      <LandingPageHeader/>
      <Hero/>
      <Features/>
      <CallToAction/>
      <LandingPageFooter/>
    </>
  )
}

export default LenderLandingPage
