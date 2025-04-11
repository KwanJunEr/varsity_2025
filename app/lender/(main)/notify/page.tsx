import React from 'react'
import { PageHeader } from './components/PageHeader'
import { MicroloanList } from './components/MicroLoanList'
import { LoanStatisticsCard } from './components/MicroLoanStatistics'

const Notification = () => {
  return (
    <section className='px-2 py-2'>
        <div className='px-[300px]'>
            <div className='min-w-[1200px]'>
              <h1 className='font-bold text-xl my-5'>Tracking Everything in Your Palm on Every MicroLoans</h1>
              <div className='my-5'>
                <LoanStatisticsCard/>
              </div>
              <hr className='font-bold h-2 my-3'/>
            <PageHeader title="High Risk Microloans" description="Review and vote on high-risk microloan applications" />
            <MicroloanList />
            </div>
        </div>
    </section>
  )
}

export default Notification
