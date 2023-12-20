import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Support = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        companyName:"",
        country:"",
        state:"",
        zipcode:"",
        file:"",


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
    const handleFileChange = (event) => {
        // Handle file changes here
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile);
    };
    const handleSubmit=(e)=>{
   e.preventDefault()
   console.log("form data",formData)
   setFormData({
    name:"",
    email:"",
    phone:"",
    companyName:"",
    country:"",
    state:"",
    zipcode:"",
    file:"",
   })
    }

    const handleChange = (e)=>{
const {name,value}=e.target;
setFormData({
    ...formData,
    [name]:value
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
      
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-gray-100 min-h-screen"
        >
            {/* Banner Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-cover bg-center h-64 relative"
                style={{ backgroundImage: `url("https://www.erthpot.com/wp-content/uploads/2022/11/partner-with-us.png")` }}

            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center">
                    Registration & Warranty Form
                </div>
            </motion.div>

            <div className="container mx-auto py-8">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mb-8 "
                >
                    <p className=" mb-4   font-bold text-2xl text-[#00A0AC] text-center ">
                        Erthpot warrants your product against all defects and factory errors when purchased.
                    </p>
                    <p className='font-sans text-gray-600'>The warranty is valid for 3 years from the date of retail purchase.In case of any defect Erthpot ensures to resolve it at its best by option:
                    </p>
                    <ul className="list-disc list-inside text-justify">
                       
                        <li className="mb-2 font-sans text-lg text-gray-600">Repair the product using original spare parts;</li>
                        <li className="mb-2 font-sans text-lg text-gray-600">Replace the product with an equivalent new product;</li>
                        

                    </ul>

                    <p className="py-6 font-sans  text-2xl font-semibold text-gray-600  text-center">
                    The following cases are not covered by the above warranty:
                    </p>

                    <ul className="list-disc list-inside text-gray-600">
                        
                        <li className="mb-2 font-sans text-lg text-gray-600">Any accessories supplied with the products.</li>
                        <li className="mb-2 font-sans text-lg text-gray-600">Rechargeable and disposable batteries (these products have a shorter service life, the length of which also depends on the frequency of use).</li>
                        <li className='mb-2 font-sans text-lg text-gray-600'>Faults resulting from improper use (e.g. operating errors, mechanical damage, incorrect operating voltage).</li>
                        <li className='mb-2 font-sans text-lg text-gray-600'>Proper use for the purposes of this warranty is defined as the use of the product under the conditions stated in the instructions for use.</li>
                        <li className='mb-2 font-sans text-lg text-gray-600'>Faults due to wear and tear faults due to force majeure.</li>
                    </ul>
                </motion.section>

               

                {/* Form Section inside Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="mt-8 text-center"
                    
                >
                    <button
                        onClick={openModal}
                        className="bg-[#00AFAC] font-sans text-white px-4 py-2 rounded-md hover:bg-[#2ea19f]"
                        
                    >
                    Warranty Form
                    </button>
                    <div

                        className={`modal-blur md:pt-10 sm:pt-10  fixed inset-0   flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none  ${isModalOpen ? '' : 'hidden'}`}
                    

                    >
                        <div className="relative  w-full  p-6 bg-white rounded-md shadow-md md:mt-4   mt-96 lg:mt-4 ">
                           
                            <div className=''>
                                <h1 className="text-3xl font-bold text-[#001930] mb-4">Contact</h1>
                                <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  
                                   <div className="mb-2">
                                        <label htmlFor="name" className="block font-sans text-sm font-medium text-[#00AFAC] text-justify">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            name="name"
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full  font-sans border rounded-md outline-none"
                                            placeholder="John Doe"

                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="block text-sm font-medium font-sans text-[#00AFAC] text-justify">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            name="email"
                                            className="mt-1 p-2 w-full border  outline-none rounded-md font-sans"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="phone" className="block text-sm font-medium font-sans text-[#00AFAC] text-justify">
                                            Phone
                                        </label>
                                        <input
                                            type="number"
                                            id="Phone"
                                            name="phone"
                                            onChange={handleChange}
                                            value={formData.phone}
                                            className="mt-1 p-2 w-full border  outline-none rounded-md font-sans"
                                            placeholder="Phone No"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="company name" className="block font-sans text-sm font-medium text-[#00AFAC] text-justify">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company name"
                                            name="companyName"
                                            onChange={handleChange}
                                            value={formData.companyName}
                                            className="mt-1 p-2 w-full border  outline-none rounded-md font-sans"
                                            placeholder="Company Name"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="country name" className="block text-sm font-medium text-[#00AFAC] font-sans text-justify">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            id="country name"
                                            onChange={handleChange}
                                            value={formData.country}
                                            name="country"
                                            className="mt-1 p-2 w-full border  outline-none rounded-md font-sans"
                                            placeholder="Country Name"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="state name" className="block text-sm font-sans font-medium text-[#00AFAC] text-justify">
                                            State/Provice
                                        </label>
                                        <input
                                            type="text"
                                            id="state name"
                                            onChange={handleChange}
                                            name="state"
                                            value={formData.state}
                                            className="mt-1 p-2 w-full border  outline-none rounded-md font-sans"
                                            placeholder="State Name"
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label htmlFor="number" className="block text-sm font-medium  text-[#00AFAC] font-sans text-justify">
                                            Zipcode/Postal Code

                                        </label>
                                        <input type='Zipcode/Postal Code'
                                            id="Zipcode/Postal Code"
                                            name="zipcode"
                                            value={formData.zipcode}
                                            onChange={handleChange}
                                            className='mt-1 p-2 w-full border  outline-none rounded-md font-sans text-justify'
                                            placeholder='Zipcode/Postal Code'
                                        />
                                    </div>
                                    <div className="mb-2">
                                    <label htmlFor="file" className="block text-sm font-medium  text-[#00AFAC] font-sans text-justify">
                                        Upload PDF File
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        value={formData.file}
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        className="mt-1 p-2 w-full border  outline-none rounded-md font-sans "
                                    />
                                    </div>
                                  


                                </div>

                                

                               <div className=' '>
                               <button
                                type="submit"
                                    className="bg-[#00AFAC] font-sans text-white px-4 py-2 rounded-md hover:bg-[#2d9f9d] "
                                >
                                    Submit
                                </button>
                                <button
                                onClick={closeModal}
                                className=" font-sans top-0 m-5 right-0 rounded-md px-4 py-2 bg-gray-400  text-white"
                            >
                            Cancel
                            </button>
                               </div>

                               </form>


                            </div>
                           
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Support;