import React from 'react'
import { PageHeader } from './components/PageHeader'
import { MicroloanList } from './components/MicroLoanList'

const Notification = () => {
  return (
    <section className='px-2 py-2'>
        <div className='px-[300px]'>
            <div className='min-w-[1200px]'>
            <PageHeader title="High Risk Microloans" description="Review and vote on high-risk microloan applications" />
            <MicroloanList />
            </div>
        </div>
    </section>
  )
}

export default Notification
