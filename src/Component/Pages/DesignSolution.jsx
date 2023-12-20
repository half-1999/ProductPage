import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';

const DesignSolution = () => {

    const { getRootProps, getInputProps } = useDropzone();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        youAreA: "",
        phone: "",
        application: "",
        file: "",
    })

    const handleFileChange = (event) => {
        // Handle file changes here
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form data", formData)
        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            youAreA: "",
            application: "",
            file: "",
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value})
    }

        return (
            <motion.div

                initial="hidden"
                animate="visible"
                className="bg-black min-h-screen">

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="bg-cover bg-center h-64 relative"
                    style={{ backgroundImage: `url("https://www.erthpot.com/wp-content/uploads/2022/11/partner-with-us.png")` }}
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold text-white">
                            Design & Solution
                        </div>
                        <div className="mt-5  text-white  text-xs  font-semibold text-center">
                            HOME / DESIGNSOLUTION
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className='mt-2 text-center'
                >

                    <div className="w-full p-6 bg-black rounded-md shadow-md md:mt-4 ">
                        <div className = "mx-auto w-[80%]">

                            <form onSubmit={handleSubmit}>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="mb-4">
                                        <label htmlFor="firstName" className="block font-sans  text-[#00B0EA] text-sm font-medium mb-2 text-justify">
                                            FirstName
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="FirstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full p-2 border  border-gray-300 rounded-md focus:outline-none focus:border-[#00AFAC]  text-justify"
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='lastname' className='block  font-sans   text-[#00B0EA] text-sm font-medium mb-2 text-justify'>LastName</label>
                                        <input type="text"
                                            id="lastname"
                                            name="lastname"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='youarea' className='block font-sans  text-[#00B0EA] text-sm font-medium mb-2 text-justify'>You are a</label>
                                        <input type="text"
                                            id="youarea"
                                            name="You Are A"
                                            value={formData.youAreA}
                                            onChange={handleChange}
                                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00AFAC] text-justify'
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='application' className='block font-sans  text-[#00B0EA] text-sm font-medium mb-2 text-justify'>Provided Your Product Application</label>
                                        <input type="text"
                                            id="application"
                                            name="Application"
                                            value={formData.application}
                                            onChange={handleChange}
                                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='location' className='block font-sans   text-[#00B0EA] text-sm font-medium mb-2 text-justify'>Your Location</label>
                                        <input type="text"
                                            id="location"
                                            name="Location"
                                            onChange={handleChange}
                                            value={formData.location}
                                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="phone" className='block font-sans  text-[#00B0EA] text-sm font-medium mb-2 text-justify'>Phone</label>
                                        <input type="number"
                                            id="phone"
                                            name="Phone"
                                            onChange={handleChange}
                                            value={formData.phone}
                                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="file" className="block text-[#00B0EA] text-sm font-medium mb-2 text-justify">
                                            Any drawing you would like to share with us
                                        </label>
                                        <div className=" w-full p-6 bg-white  text-[#00B0EA] text-center  border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#00AFAC]">
                                            <div {...getRootProps()} className=" p-4 " style={{ cursor: 'pointer' }}>

                                                <input {...getInputProps()}
                                                    name="file"
                                                    value={formData.file}
                                                    accept=".pdf"
                                                    onChange={handleFileChange} />
                                                <p className="text-gray-600">
                                                    Click or drag a file to this area to upload.
                                                </p>
                                            </div>
                                        </div>


                                    </div>

 

                                    <div className="mb-4">
                                        <label htmlFor="message" className="block text-[#00B0EA] text-sm font-medium mb-2 text-justify">
                                            Please elaborate your requirement
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full p-2 border border-gray-300  rounded-md focus:outline-none focus:border-blue-500"
                                            required
                                        ></textarea>
                                    </div>




                                </div>
                                <div className=''>

                                    <button

                                        onSubmit={handleSubmit}
                                        className=" font-sans top-0 m-5 right-0 rounded-md px-4 py-2 bg-[#00B0EA] text-white"
                                    >
                                        Submit
                                    </button>
                                </div>

                            </form>

                        </div>

                        <motion.div>
                            <div className='w-full bg-black p-2'>
                                <div className="w-[90%] mx-auto py-8 ">
                                    <p className='mb-4 font-bold text-2xl text-[#00B0EA] text-center '>We assure you that we commit as much as you do for your customers.</p>
                                    <p className=' text-lg text-justify text-white'>We know how important it is to be correct right at the design stage.
                                        Clearly understanding and laying down the client’s requirements is the first and foremost requirement in any technical solution. We assure you that we commit as much as you do for your customers to ensure that the final results are more than satisfactory.
                                        We would love to help you design the right solution for your client. Would you like to give some information about the project you are working on?</p>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </motion.div>
        )
    
}
export default DesignSolution;