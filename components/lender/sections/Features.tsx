import React from 'react'
import { FeatureCard } from '../components/FeatureCard'
import { Star, Shield, Wallet } from 'lucide-react'

const Features = () => {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Key Features for Lenders
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl mt-8">
                  Our platform offers unique advantages for lenders with the seamless integration Web3 ecosystem
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <FeatureCard
                icon={Star}
                title="Incentives & Leveling"
                description="Earn higher returns based on your lender level. Level up by maintaining consistent lending activity and good performance."
              />
              <FeatureCard
                icon={Shield}
                title="Community Voting & Engage"
                description="Participate in governance by voting on high-risk loan cases. Help shape the lending ecosystem while earning voting rewards."
              />
              <FeatureCard
                icon={Wallet}
                title="Suggestions on Loan Rates"
                description="Set personalized interest rates based on your business type and borrower's purpose. Maximize your returns with flexible options."
              />
            </div>
          </div>
        </section>
  )
}

export default Features
