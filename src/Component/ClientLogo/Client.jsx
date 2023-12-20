import React from 'react'
import p1 from '../../assets/client/AMBIKA STEELS.png'
import p2 from '../../assets/client/CIDCO (1).png'
import p3 from '../../assets/client/FITGEE.png'
import p4 from '../../assets/client/GB Pant.png'
import p5 from '../../assets/client/GOI.png'
import p6 from '../../assets/client/INSTITUTE (1).png'
import p7 from '../../assets/client/RB.png'
import p8 from '../../assets/client/Railway.png'
import p9 from '../../assets/client/TE (2).png'
import p10 from '../../assets/client/FSSAI (1).png'
const Client = () => {
  return (
    <div className='w-full min-h-screen bg-black flex flex-col justify-center'>
      <div className=' h-[100px] w-[95%] gap-1 mx-auto  grid md:grid-cols-5 sm:grid-cols-5 grid-cols-5'>
         <div className=' h-[200px] w-full  flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p1} alt="" />
         </div>
         <div className=' h-[200px] w-full  flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p2} alt="" />
         </div>
         <div className=' h-[200px] w-full  flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p3} alt="" />
         </div>
         <div className=' h-[200px] w-full  flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p4} alt="" />
         </div>
         <div className=' h-[200px] w-full flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p5} alt="" />
         </div>
         {/* <div className='h-[200px] w-full flex justify-center items-center'>
            <img className='w-[100px]' src={p6} alt="" />
             
         </div> */}
      </div>
      <div className='w-[95%] gap-1 mx-auto  grid md:grid-cols-5 sm:grid-cols-5 grid-cols-5'>
         <div className=' h-[200px] w-full  flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p6} alt="" />
         </div>
         <div className=' h-[200px] w-full  flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p7} alt="" />
         </div>
         <div className=' h-[200px] w-full  flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p8} alt="" />
         </div>
         <div className=' h-[200px] w-full  flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p9} alt="" />
         </div>
         <div className=' h-[200px] w-full flex justify-center items-center'>
              {/* <h1 className='text-gray-100 text-3xl font-bold'>Hello</h1> */}
              <img className='w-[100px]' src={p10} alt="" />
         </div>
         {/* <div className='h-[200px] w-full flex justify-center items-center'>
            <img className='w-[100px]' src={p6} alt="" />
             
         </div> */}
      </div>
    </div>
  )
}

export default Client