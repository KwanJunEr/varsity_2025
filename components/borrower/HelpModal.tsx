import React from 'react'

const HelpModal = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col  row-start-2 items-center sm:items-start">
          <div className="flex">
            {/* <ChatArea />
            <GameScene /> */}
          </div>
          <div className="w-full max-w-4xl">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold mt-10">Your Microloans Application</h2>
              <div className="text-sm">
                {/* <span className="mr-4">Points: {userMetrics.points}</span>
                <span>Reputation: {userMetrics.reputation}</span> */}
              </div>
            </div>
            {/* <MicroLoanTable loans={loans} onPayment={handlePayment} /> */}
          </div>
        </main>
      </div>
  )
}

export default HelpModal
