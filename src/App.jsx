import React from 'react'


function App() {


  return (
    <main>

      <div 
      className='custom-bg bg-hero h-[694px]'>
              <div className='w-full flex flex-col items-center justify-center xxs:px-4 sm:px-8 md:px-28 xl:px-36'>

                <h1 className='text-bg hero-title px-3'> Upgrade Your Tech Accessorize with Gadget Heaven Accessories </h1>
                
                <p className="hero-brief">
                  Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className='xxs:w-11/12 lg:w-3/12 flex items-center justify-center xxs:border-1 xl:border-2 rounded-full my-3 p-1.5'>
                <button className='btn-hero' type="button">shop now</button>
                </div>
              </div>
        
      </div>
    </main>
  )
}

export default App
