import Image from 'next/image'
import React from 'react'

const LandingScreen = () => {
  return (
    <section className='min-h-[653px]  pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
        <div className=' min-w-800 flex flex-row gap-5 pt-10'>
            <div className='w-220'>
                asdsad
                adasd
            </div>
            <div className='w-580'>
                <Image
                src = {"/landing.png"}
                alt = "Image"
                width={500}
                height={400}
                />
            </div>
        </div>
    </section>
  )
}

export default LandingScreen
