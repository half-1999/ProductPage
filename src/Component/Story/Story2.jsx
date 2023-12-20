import React from 'react'
import bridging from '../../assets/bridging the future.jpg'
import made_in_india from '../../assets/made in india made for the world (1).jpg'
import sustainability from '../../assets/sustainability banner.jpg'
const Story2 = () => {
    return (
        <div className='w-full min-h-screen  bg-black'>

            <div className='w-[90%] mx-auto'>
                <div className='grid md:grid-cols-3 gap-1 sm:grid-cols-1 py-5'>
                    <div>
                        <span className="text-3xl text-gray-100 font-bold text-center col-span-1">
                            The Erthpot <span className='text-[#00b0ea]'>Story</span>
                        </span>
                    </div>
                    <div className='col-span-2'>
                    <p className="text-gray-300">
                        Established in 2018, Erthpot tackles the trust deficit within India's AV industry, offering
                        cost-effective, high-quality alternatives. Launched in 2022 by Heena Golani, Vikram Yadav,
                        Vijay Sinha & Shailesh Awasthi, Erthpot is dedicated to delivering indigenous, sustainable
                        audio solutions. Symbolizing innovation and environmental consciousness, the brand draws
                        inspiration from the timeless relevance of earthen pots in our culture. With an unwavering
                        commitment to quality and sustainability, Erthpot aims to make a distinctive impact in the
                        competitive AV market.
                    </p>
                </div>
                </div>
                
                <div className=' w-full  grid md:grid-cols-6 gap-2 sm:grid-cols-1'>
                    <div className='col-span-4 relative'>
                        <img className='group grayscale hover:cursor-pointer hover:grayscale-0 ' src={made_in_india} alt="" />
                        <div className='absolute bottom-5  left-4'>
                        <span className='text-xl font-bold text-white '>Teamwork</span>
                        <p className='text-white'>Commited and creative</p>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='relative'>
                                <img  className=' grayscale hover:cursor-pointer hover:grayscale-0 ' src={sustainability} alt="" />
                                <div className='absolute bottom-5  left-4'>
                        <span className='text-xl font-bold text-white '>Creativity</span>
                        <p className='text-white'>striving for success</p>
                        </div>
                            </div>
                            <div className='relative'> 
                                <img className='relative grayscale hover:cursor-pointer hover:grayscale-0 ' src={bridging} alt="" />
                                <div className='absolute bottom-5  left-4'>
                        <span className='text-xl font-bold text-white '>Innovation</span>
                        <p className='text-white'>leading in industry</p>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story2