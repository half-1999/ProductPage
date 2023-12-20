import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md";
import whitelogo from '../../assets/white logo.png'
const Footerwa = () => {
    return (
        <div className='bg-black w-full '>
            <div className='w-[90%] mx-auto flex justify-end'>
            {/* <div className='w-24 py-3'>
                        <img src="https://www.erthpot.com/wp-content/uploads/2022/12/Make-in-India-Logo-PNG-HD-300x137.png" alt="" />
                    </div> */}
                <div className='flex gap-3 py-5'>
                    <Link to="https://www.facebook.com/Erthpot" target='_blank'>
                        <FaFacebook className=' text-2xl text-gray-100 hover:text-[#00b0ea] duration-700 hover:duration-700 cursor-pointer' />
                    </Link>
                    <Link to="https://www.instagram.com/Erthpot/" target='_blank'>
                        <FaInstagram className=' text-2xl text-gray-100 hover:text-[#00b0ea] duration-700 hover:duration-700 cursor-pointer' />
                    </Link>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fearthpot" target='_blank'>
                        <FaTwitter className=' text-2xl text-gray-100 hover:text-[#00b0ea] duration-700 hover:duration-700 cursor-pointer' />

                    </a>
                    <a href="https://www.youtube.com/channel/UCVLSYcj6om_pv2p2ovFhe_Q" target='_blank'>
                        <FaYoutube className=' text-2xl text-gray-100 hover:text-[#00b0ea] duration-700 hover:duration-700 cursor-pointer' />
                    </a>
                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHSLrqKr9H3vQAAAYxtAsP45b-BhAzG_gN2X-hxApwVxKsf41mGiF137jbygg5X4ghzPWcztSASQs7VH4ZUxla27OUs_hf_6QrDehtKE-jANHY018Uxx5jogGZYNcclrDWZbyM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ferthpot-electronics-private-limited%2F" target='_blank'>
                        <FaLinkedin className=' text-2xl text-gray-100 hover:text-[#00b0ea] duration-700 hover:duration-700 cursor-pointer' />

                    </a>
                </div>
               
            </div>
            <div className='w-[90%] mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-4 py-4'>

                <div className='  px-2 mb-4'>
                    <div className='w-48 '>
                        <Link to="/">
                            {/* <img src="https://www.erthpot.com/wp-content/uploads/2022/12/retina-02-1-768x243-1-600x151.png" alt="" /> */}
                            <img src={whitelogo} alt="" />
                        </Link>
                    </div>
                     {/* <div className='w-48'>
                        <img src="https://www.erthpot.com/wp-content/uploads/2022/12/Make-in-India-Logo-PNG-HD-300x137.png" alt="" />
                    </div> */}
                </div>
                <div className=' '>
                    <h1 className='px-4 text-xl font-semibold mb-7 text-gray-100'>QUICK <span className='text-[#00b0ea] '>LINKS</span></h1>
                    <div className='px-4'>
                        <li className=' hover:translate-x-3 hover:duration-1000 duration-1000 cursor-pointer list-none py-1'>
                            <Link to="/" className='text-[12px] text-gray-100 group-hover:text-gray-300'>Catalogue
                            </Link>

                        </li>
                        <li className=' hover:translate-x-3 hover:duration-1000 duration-1000 cursor-pointer list-none py-1'>
                            <Link to="/" className='text-[12px] text-gray-100 group-hover:text-gray-300'>DSP & Controls</Link>

                        </li>
                        <li className=' hover:translate-x-3 hover:duration-1000 duration-1000 cursor-pointer list-none py-1'>
                            <Link to="/" className='text-[12px] text-gray-100 group-hover:text-gray-300'>Audio Conference System</Link>

                        </li>
                        <li className=' hover:translate-x-3 hover:duration-1000 duration-1000 cursor-pointer list-none py-1'>
                            <Link to="/" className='text-[12px] text-gray-100 group-hover:text-gray-300'>Wireless Microphones</Link>

                        </li>
                        <li className='group hover:translate-x-3 hover:duration-1000 duration-1000 cursor-pointer list-none py-1'>
                            <Link to="/" className='text-[12px] text-gray-100 group-hover:text-gray-300' >Registration & Warranty</Link>

                        </li>
                        <li className=' hover:translate-x-3 hover:duration-1000 duration-1000 cursor-pointer list-none py-1'>
                            <Link to="/" className='text-[12px] text-gray-100 group-hover:text-gray-300'>Become Our Partner</Link>

                        </li>
                    </div>
                </div>
                <div className=' '>
                    <h1 className='px-4 text-xl font-semibold  uppercase text-gray-100 mb-7'>Get In  <span className='text-[#00b0ea] '>Touch</span></h1>
                    <div className='px-4'>
                       
                        <p className='text-justify text-[12px] text-gray-100 py-1 '>A - 164, A Block Noida Sector 63, Gautam Budhha Nagar Uttar Pradesh Pincode: 201301</p>
                        <span className='uppercase text-gray-100 font-semibold text-[14px] py-1' >India</span>
                        <p className='flex items-center gap-2  text-gray-100 text-[12px] py-1'>
                            <MdOutlinePhonelinkRing /> Ph:+91 0120 4567452

                        </p>
                        <a href='mailto:info@erthpot.com' target='_blank' className='flex items-center gap-2  text-gray-100 text-[12px] py-1'><MdMail /> info@erthpot.com</a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-3 border-t'>
                <div className='flex flex-col gap-1 '>
                    <p className='text-gray-300 text-[12px]'>
                        © 2022 Erthpot | Your Indian AV Manufacturing Partner. All rights reserved | Website Proudly
                    </p>
                    <p className='text-center text-gray-300 text-[12px]'>
                        Developed by Corplyx Technologies Pvt. Ltd.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footerwa