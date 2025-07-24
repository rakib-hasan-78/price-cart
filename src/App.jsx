import React from 'react'


function App() {


  return (
    <main>

      <div 
      className='custom-bg bg-hero'>
              <div className='w-full flex flex-col items-center justify-center xxs:px-4 sm:px-8 md:px-28 xl:px-20'>

                <h1 className='text-bg hero-title'> Upgrade Your Tech Accessorize with Gadget Heaven Accessories </h1>
                
                <p className="hero-brief">
                  Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className='xxs:w-full xl:w-3/12 flex items-center justify-center xxs:border-1 xl:border-3 rounded-full my-3 p-1.5'>
                <button className='btn btn-primary w-full font-sans font-bold xxs:text-lg xl:text-2xl uppercase rounded-full xxs:py-6 xl:py-8' type="button">shop now</button>
                </div>
              </div>
        
      </div>
    </main>
  )
}

export default App
