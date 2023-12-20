import React,{useState} from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaYoutube,FaInstagram } from "react-icons/fa";
import {FaFacebookSquare, FaLinkedin, FaPinterest, FaTwitterSquare, FaTelegram} from "react-icons/fa";
const BlogPage = () => {
    const [formData,setFormData]=useState(
        {
            name:"",
            email:"",
            message:""
        }
        )
        const handleInputChange=(e)=>{
             const {name,value}=e.target;
             setFormData({
                ...formData,
                [name]:value
             })
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log("form data",formData);
            setFormData({
                name: '',
                email: '',
                message: '',
              });
            
        }

        const [selectedGrade, setSelectedGrade] = useState('');
        const fadeIn = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        };
    const BlogItems=[
      {
        img:"https://dt-hphone.myshopify.com/cdn/shop/articles/blog-5.jpg?v=1640769435",
        details:"Make Listening To Music A New Dark Night Delightful Experience",
        date:"November 29, 2023"
      },
      {
        img:"https://dt-hphone.myshopify.com/cdn/shop/articles/blog-2.jpg?v=1640769297",
        details:"Make Listening To Music A New Dark Night Delightful Experience",
        date:"November 30, 2023"
      },
      {
        img:"https://dt-hphone.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1640769257",
        details:"Make Listening To Music A New Dark Night Delightful Experience",
        date:"November 28, 2023"
      },
    ]

    return (
        <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-[#001930] min-h-screen mt-20"
            
            >
 <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-cover bg-center h-64 relative"
                style={{ backgroundImage: "url(https://dt-hphone.myshopify.com/cdn/shop/files/home-background-image-3.jpg?v=1639626875)" }}

            >
                <div className="absolute inset-0 bg-black opacity-50 " ></div>
                <div className="absolute inset-0 flex w-full items-center  justify-center  text-white  font-bold ">
               
               <div>
               <h1 className="text-2xl uppercase text-white font-semibold p-2">
            HEADPHONES TO YOUR LIFE THAT MAKE YOU FORGET EVERYTHING AROUND
        </h1>
        <p className="text-gray-200 py-2 text-center">
            Headphones To Your Life That Make You Forget Everything Around
        </p>
               </div>
                </div>
             
            </motion.div>
           
            <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
            className=" w-full  p-2">
            <div className="w-[90vw] mx-auto p-2 ">
                    <div className="grid  md:grid-cols-3 sm:grid-cols-2   p-2 gap-2 ">
                        <div className="col-span-2 ">
                            <div className=" mx-auto mt-10 hover:-translate-y-2 hover:duration-500 duration-500 w-[70%]  rounded-sm">
                                <img
                                    src="https://dt-hphone.myshopify.com/cdn/shop/articles/blog-5.jpg?v=1640769435"
                                    alt="no-image"
                                />
                            </div>

                            {/* <div className="py-3 px-2 text-[#101930] flex justify-between w-[70%] mx-auto"> */}
                            <div className="py-3 px-2 text-[#101930] grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 w-[70%] mx-auto">
                                <div className="flex justify-start text-gray-100">
                                    <span className="text-[12px]  ">December 27, 2021</span>
                                    <span className="text-[12px] pl-2">2 Comments</span>
                                    <span className="text-[12px] pl-2">By Ram M</span>
                                </div>
                                <div className="flex justify-end gap-2 text-gray-100">
                                <Link  to="https://www.facebook.com/Erthpot" target='_blank'>
                       <FaFacebookSquare className=' text-2xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer'/>
                       </Link>
                           <Link to="https://www.instagram.com/Erthpot/" target='_blank'>
                           <FaInstagram className=' text-2xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer'/>
                           </Link>
                           <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fearthpot" target='_blank'>
                           <FaTwitterSquare className=' text-2xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer' />
                           
                           </a>
                            <a href="https://www.youtube.com/channel/UCVLSYcj6om_pv2p2ovFhe_Q" target='_blank'>
                            <FaYoutube className=' text-2xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer' />
                            </a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHSLrqKr9H3vQAAAYxtAsP45b-BhAzG_gN2X-hxApwVxKsf41mGiF137jbygg5X4ghzPWcztSASQs7VH4ZUxla27OUs_hf_6QrDehtKE-jANHY018Uxx5jogGZYNcclrDWZbyM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ferthpot-electronics-private-limited%2F" target='_blank'>
                            <FaLinkedin  className=' text-2xl hover:text-[#00AFAC] duration-700 hover:duration-700 cursor-pointer'/>
                            
                            </a>
                                </div>
                            </div>
                            <div className="px-2  ">
                                <h1 className="text-md text-gray-200 ">
                                    Make Listening To Music A New Dark Night Delightful Experience Make Listening To
                                    Music A New Dark Night Delightful Experience Make Listening To Music A New Dark
                                    Night Delightful Experience Make Listening To Music A New Dark Night Delightful
                                    Experience Make Listening To Music A New Dark Night Delightful Experience Make
                                    Listening To Music A New Dark Night Delightful Experience Make Listening To Music A
                                    New Dark Night Delightful Experience
                                </h1>
                            </div>
                        </div>
                        <div className=" h-[600px]  p-2 md:col-span-1 sm:col-span-3 px-3 ">
                            <h1 className="text-center text-gray-100 text-xl uppercase font-semibold py-4">RECENT POSTS</h1>
                            <div className="h-[500px] overflow-auto  py-1 px-2">
                                {
                                  BlogItems.map((item,index)=>(
                                    <div className="flex justify-between w-full gap-2  my-1  cursor-pointer">
                                    <div>
                                        <div className="w-[100px] h-[100px] ">
                                            <img
                                                src={item.img}
                                                alt="no-image"
                                                className=" rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[12px] text-gray-100 ">
                                           {item.details}
                                        </p>
                                        <h5 className="text-[#00AFAC]"> {item.date}</h5>
                                    </div>
                                </div>
                                  ))
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className=" min-h-[600px] w-full flex justify-center items-center ">
                        <div className="bg-[#00AFAC] bg-opacity-50 shadow-xl rounded-md">
                        <div className="p-4">
                            <h1 className="text-xl font-semibold text-gray-100" >Leave a commnet</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className="w-full p-4">
                            <div className="grid md:grid-cols-2 w-full  gap-4">
                                <input placeholder="Name"  type="text" name="name" value={formData.name} onChange={handleInputChange} className="rounded-full px-2 py-2   outline-[#00AFAC]" />
                                <input placeholder="Email" type="text" name="email" value={formData.email} onChange={handleInputChange} className="rounded-full px-2 py-2   outline-[#00AFAC]"/>
                            </div>
                            <div className="py-5 text-center ">
                                <textarea rows={4} type="text" name="message" value={formData.message} onChange={handleInputChange} className="rounded-md px-2 w-[100%]  outline-[#00AFAC]" placeholder="comments"/>
                            </div>
                            <div className="text-right">
                              {/* <button type="submit" className="bg-[#00AFAC] text-white px-3 py-3 border-white border-2 rounded-full text-right hover:bg-[#308180] hover:duration-500 duration-500">
                                Post Comment
                              </button> */}
                               <button type="submit" className="text-right uppercase p-3 border-2 border-cyan-600 hover:bg-cyan-700 hover:text-white hover:duration-700 text-white hover:border-white hover:rounded-lg">
                               Post Comment
            </button>
                            </div>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default BlogPage;
