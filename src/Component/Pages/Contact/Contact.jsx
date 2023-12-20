import React, { useState } from "react";
import { motion } from 'framer-motion';
import "./Contact";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const [selectedGrade, setSelectedGrade] = useState('');
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="bg-black min-h-screen  w-full"
    >


      
      <div className="w-[90%] mx-auto h-screen">
      {/* <h1 className="text-center text-4xl text-white">Contact Us</h1> */}
        <div className="w-full h-full grid  md:grid-cols-2 gap-2 sm:grid-cols-1 ">

          <motion.div
            initial={{ opacity: 0, y: 0, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-[70%] h-full mx-auto flex justify-center items-center ">
            <div className="   ">
              <div className=" flex gap-3 py-2">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center shadow-2xl">
                    <FaHome className="text-3xl" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl text-[#00B0EA] font-semibold">
                    Address
                  </h1>
                  <p className="text-gray-100">
                    A - 164, A Block Noida Sector 63,
                  </p>
                  <p className="text-gray-100">
                    Gautam Budhha Nagar Uttar

                  </p>
                  <p className="text-gray-100">
                    Pradesh Pincode: 201301
                  </p>
                </div>
              </div>
              <div className=" flex gap-3 py-2">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center shadow-2xl">
                    <FaPhoneAlt className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl text-[#00B0EA] font-semibold">
                    Contact
                  </h1>
                  <p className="text-gray-100">+91 0120 4567452</p>
                </div>
              </div>
              <div className=" flex gap-3 py-6">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center shadow-2xl">
                    <MdEmail className="text-3xl" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl text-[#00B0EA] font-semibold">Email</h1>
                  <p className="text-gray-100">info@erthpot.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.section
            initial={{ opacity: 0, y: 0, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className=" w-full h-full flex justify-center items-center">
            <div className="w-[70%] mx-auto space-y-4">
              
                <div className="flex flex-col  space-y-1">
                  <label className="font-semibold text-[#00B0EA]">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name..."
                    className="bg-gray-100 text-gray-100 rounded-md outline-[#00B0EA] outline-2 p-1   px-2 border border-[#00B0EA] "
                  />
                </div>
                <div className="flex flex-col w-full space-y-1 ">
                  <label className="font-semibold text-[#00B0EA]">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email..."
                    className="bg-gray-100 text-gray-100 rounded-md outline-[#00B0EA] outline-2 p-1  px-2 border border-[#00B0EA]"
                  />
                </div>
                <div className="flex flex-col w-full space-y-1">
                  <label className="font-semibold text-[#00B0EA]">Phone</label>
                  <input
                    type="text"
                    placeholder="Your Phone..."
                    className="bg-gray-100 text-gray-100 rounded-md outline-[#00B0EA] outline-2 p-1   px-2 border border-[#00B0EA]"
                  />
                </div>
                <div className="flex flex-col w-full space-y-1 ">
                  <label className="font-semibold text-[#00B0EA]">Company</label>
                  <input
                    type="text"
                    placeholder="Conpany Name..."
                    className="bg-gray-100 text-gray-100 rounded-md outline-[#00B0EA] outline-2  p-1 px-2 border border-[#00B0EA]"
                  />
                </div>
                <div className="flex flex-col w-full space-y-1 ">
                  <label className="font-semibold text-[#00B0EA]">Message</label>
                  <textarea
                    type="text"
                    placeholder="Write Something..."
                    className="bg-gray-100 text-gray-100 rounded-md outline-[#00B0EA] outline-2  p-1 px-2 border border-[#00B0EA]"
                  />
                </div>
                <div className="flex flex-col w-full space-y-2">
                  
                    <button className="w-full bg-[#00B0EA] py-2 rounded-sm text-white font-semibold">
                      Submit
                    </button>
                  
               
              </div>
            </div>
          </motion.section>
        </div>
      </div>


      {/* </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Contact;
