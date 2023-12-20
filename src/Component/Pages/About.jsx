import React from 'react'
import './About.css';
import headphone from '../../assets/headphone.png'

const About = () => {

  return (
    <>
      <div className='bg-black -mt-10 p-5'>
          <section className="w-full h-screen">
            <div className='w-full h-full grid md:grid-cols-2 sm:grid-cols-1 gap-3 '>
              <div className='flex justify-center items-center'>
             <div className='p-20'>
             <h1 className="text-white md:text-5xl sm:text-4xl">
        Erthpot
            </h1>
            <p className=" text-gray-100">
              We are a brand with creativity, technology. We make Audio products that add value to your life.
            </p>
             </div>
              </div>
           
              <div className='flex justify-center items-center'>
          <img className="intro__illustration " 
            src={headphone}
            alt="" />
          </div>
            </div>
          </section>

          <div className='mt-[10rem]'>
            <h1 className="text-3xl text-center font-bold text-[#00AFAC]" >Our Core Foundation</h1>
            <p className='text-center text-gray-100'>
              What Sets Us Apart from Any Other AV Manufacturer Across the Globe
            </p>
          </div>

          <section id="how-it-works " className="grow">

          </section>


          <section className="get-feedback ">
            <div className='mt-[6rem]'>
              <h1 className="section_title get-feedback_title py-3 text-center text-2xl text-gray-100">
              Passion For Manufacturing Best Audio Products!
            </h1>
              <p className='text-gray-100'>
                We aim to provide products created under the strict observation of our audio experts.

                We strive to bring positive change. Our vision is to create a brand that emits sustainability and values it in every breath.
              </p>
            </div>

            <div>
              <img className="intro__illustration" src="https://www.erthpot.com/wp-content/uploads/2022/12/about-updated-vt-01-1.png" alt="" />
            </div>
          </section>
          <div className="arrow-2"></div>

          <section className="learning">

            <div>
              <img src="https://www.erthpot.com/wp-content/uploads/2022/12/research-audio.png" alt="" />
            </div>
            <div className='mt-[5rem]' >
              <h1 className="section_title learning_title py-3 text-center text-2xl text-gray-100">
                Years of Research by The Expert
                of Audio Industry!
              </h1>
              <p className='text-gray-100'>
                Our team has inspired many young people to take the hard path of building brand equity

                The team had designed products with well-researched data, making them better than the current competition.
              </p>
            </div>


          </section>


          <div className="arrow-2"></div>
          <section className="learning">
            <div className='mt-[4rem]'>
              <h1 className="section_title learning_title py-3 text-center text-2xl text-gray-100">
                Our Responsibility Towards Environment & Ecology
              </h1>
              <p className='text-gray-100'>
                The AV industry produces a lot of E-Waste which not only pollutes the environment but is equally toxic for different life forms. We at Erthpot, focus on building sustainable products.
                We try to minimize the peripheral waste produced during the manufacturing of our products, making us more environment-friendly.
              </p>
            </div>

            <div>
              <img src="https://www.erthpot.com/wp-content/uploads/2022/12/environ-01.png" alt="" />
            </div>
          </section>


          
           <div className="arrow-2"></div>
          <section className="learning">
            <div>
              <img src="https://www.erthpot.com/wp-content/uploads/2022/12/technology-img-abt.png" alt="" />
            </div>
            <div className='mt-[3rem]'>
              <h1 className="py-3 text-center text-2xl text-gray-100">
                Better Technology & Innovation in Audio manufacturing Industry
              </h1>
              <p className='text-gray-100'>
                The ecosystem for electronics manufacturing in India is still in its nascent stage. Finding the right parts suppliers and OEM designers is difficult as of now. Luckily in the software and embedded design part, India has a huge pool of talented engineers.

                We are constantly improving the quality of vendors and service providers to develop better products that stand out in the global market.
              </p>

            </div>


          </section>

      </div>
    </>
  )

}

export default About;