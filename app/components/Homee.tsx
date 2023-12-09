import React from 'react'

function Homee() {



  return (
    <>
      <div>
        <div className="flex text-center items-center justify-between mt-20 mx-20">
            <div>
                <h3 className='font-bold text-3xl '>Exclusive Products</h3>
            </div>
           <div className='flex gap-4'>
               <p className='text-blue-500 font-light cursor-pointer '>Best Sellers </p>
               <p className=' hover:text-blue-500 cursor-pointer transition-colors font-light '> Featured</p>
               <p className=' hover:text-blue-500 cursor-pointer transition-colors font-light '>New Arrival</p>
               <p className=' hover:text-blue-500 cursor-pointer transition-colors font-light '>Special Offer</p>
           </div>
        </div>
        <div className="">

        </div>
      </div>
    </>
  )
}

export default Homee
