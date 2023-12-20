import React, { useState } from 'react';
import { motion } from 'framer-motion';

const installedSound = "Installed Sound";
const live = "Live";
const home = "Home Theater System";
const studio = "Studio";
const sinema = "Sinema";

const Partner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGrade, setSelectedGrade] = useState('');
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
        companyName: "",
        city: "",
        state: "",
        gstRegistrationNo: "",
        legalStatus: "",
        contactPerson1: "",
        designation: "",


    })

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form data", formData)
        setFormData({
            email: "",
            phone: "",
            companyName: "",
            city: "",
            legalState: "",
            gstRegistrationNo: "",
            contactPerson1: "",
            designation: "",

        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }
    const modalStyle = {
        content: {
            width: "80%",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
        },
    };

    const handleGradeChange = (e) => {
        const selectedGrade = e.target.value;
        setSelectedGrade(selectedGrade);
        setFormData({ ...formData, grade: [selectedGrade] });
    };

    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-black min-h-screen"
        >
            {/* Banner Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-cover bg-center h-64 relative"
                style={{ backgroundImage: "url(https://www.erthpot.com/wp-content/uploads/2022/11/partner-with-us.png)" }}

            >
                {/* <div className="absolute inset-0 bg-black opacity-50 " ></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center">
                    Partner With Us
                </div> */}

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-white">
                        Partner With US
                    </div>
                    <div className="mt-5  text-white  text-xs  font-semibold text-center uppercase">
                        HOME / Partner With US
                    </div>
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-8 text-center"

            >

                <div>
                    <div className="relative  w-full  p-6 bg-black rounded-md shadow-md md:mt-4   mt-96 lg:mt-4 ">

                        <div className='mx-auto w-[80%]'>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


                                    <div className="mb-2">
                                        <label htmlFor="company name" className="block  text-sm font-medium text-[#00B0EA] text-justify">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="company name"
                                            name="companyName"
                                            onChange={handleChange}
                                            value={formData.companyName}
                                            className="mt-1 p-2 w-full border  outline-none rounded-md "
                                            placeholder="Company Name"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-[#00B0EA]  text-justify">
                                            City *
                                        </label>
                                        <input
                                            type="text"
                                            id="cityName"
                                            onChange={handleChange}
                                            value={formData.city}
                                            name="city"
                                            className="mt-1 p-2 w-full border  outline-none rounded-md "
                                            placeholder="City Name"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="state name" className="block text-sm  font-medium text-[#00B0EA] text-justify">
                                            State *
                                        </label>
                                        <input
                                            type="text"
                                            id="state name"
                                            onChange={handleChange}
                                            name="state"
                                            value={formData.state}
                                            className="mt-1 p-2 w-full border  outline-none rounded-md "
                                            placeholder="State Name"
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label htmlFor="gST registration no " className="block text-sm font-medium  text-[#00B0EA]  text-justify">
                                            GST Registration No *

                                        </label>
                                        <input type='text'
                                            id="gST registration no *"
                                            name="gstRegistrationNo"
                                            value={formData.gstRegistrationNo}
                                            onChange={handleChange}
                                            className='mt-1 p-2 w-full border  outline-none rounded-md  text-justify'
                                            placeholder='Registration no...'
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label htmlFor="legal Status" className="block text-sm font-medium  text-[#00B0EA]  text-justify">
                                            Legal Status *

                                        </label>
                                        <input type='text'
                                            id="legal Status"
                                            name="legalStatus"
                                            value={formData.legalStatus}
                                            onChange={handleChange}
                                            className='mt-1 p-2 w-full border  outline-none rounded-md  text-justify'
                                            placeholder='Legal Status...'
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label htmlFor="contact Person 1" className="block text-sm font-medium  text-[#00B0EA]  text-justify">
                                            Contact

                                        </label>
                                        <input type='number'
                                            id="contact "
                                            name="contactPerson1"
                                            value={formData.contactPerson1}
                                            onChange={handleChange}
                                            className='mt-1 p-2 w-full border  outline-none rounded-md  text-justify'
                                            placeholder='Your Contact... '
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label htmlFor=" designation" className="block text-sm font-medium  text-[#00B0EA]  text-justify">
                                            Designation *

                                        </label>
                                        <input type='text'
                                            id="designation"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            className='mt-1 p-2 w-full border  outline-none rounded-md  text-justify'
                                            placeholder='Your Designation..'
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="email" className="block text-sm font-medium  text-[#00B0EA] text-justify">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            name="email"
                                            className="mt-1 p-2 w-full border  outline-none rounded-md "
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="phone" className="block text-sm font-medium  text-[#00B0EA] text-justify">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            id="Phone"
                                            name="phone"
                                            onChange={handleChange}
                                            value={formData.phone}
                                            className="mt-1 p-2 w-full border  outline-none rounded-md "
                                            placeholder="Phone No.."
                                        />
                                    </div>
                                    {/* Product Line Enrolment * */}
                                    <div className="mb-2">
                                        <label htmlFor="" className="block text-sm font-medium  text-[#00B0EA] text-justify">
                                            Product Line Enrolment
                                        </label>
                                        <select
                                            className="mt-1 p-2 w-full border  outline-none rounded-md "
                                            value={selectedGrade}
                                            onChange={handleGradeChange}
                                        >


                                            <option value={installedSound}>Installed Sound</option>
                                            <option value={live}>Live</option>
                                            <option value={home}>Home Theater System</option>
                                            <option vlaue={studio}>Studio</option>
                                            <option value={sinema}>Sinema</option>

                                        </select>
                                    </div>




                                </div>



                                <div className=' '>
                                    <button
                                        type="submit"
                                        className="bg-[#00B0EA]  text-white px-4 py-2 rounded-md hover:bg-[#2d9f9d] "
                                    >
                                        Submit
                                    </button>

                                </div>

                            </form>


                        </div>

                    </div>
                </div>

            </motion.div>

            <div className="w-[90%] mx-auto">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className=""
                >
                    <p className=" mb-4   font-bold text-2xl text-[#00B0EA] text-center ">
                        Together, we can shape the audio-visual industry in India.
                    </p>
                    <p className=' text-white'>Let’s jointly move your business forward by leading innovation, co-creating customer-centric solutions, and capturing new markets.
                    </p>
                    <ul className="list-disc list-inside text-justify">

                        <li className="  text-lg text-white">Unlock new business opportunities to unlock borderless growth</li>
                        <li className="  text-lg text-white">Build trust and drive business</li>
                        <li className="  text-lg text-white">Build trust and drive business</li>


                    </ul>


                </motion.section>



                {/* Form Section inside Button */}

            </div>
        </motion.div>


    );
};

export default Partner;