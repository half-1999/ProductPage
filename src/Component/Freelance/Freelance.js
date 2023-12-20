import React from "react";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import p1 from "../../assets/banner image of high end circuit board- audyogeek branding (1).jpg";
const Freelance = () => {
    const cards = [
        {
            img: f1,
            title: "Passion",
            paragraph: "Our never-ending passion for developing the best technology for the audio industry.",
        },
        {
            img: f2,
            title: "Technology",
            paragraph: "Developing nature friendly sustainable technology for our users to have a better experience",
        },
        {
            img: f3,
            title: "Learning",
            paragraph: "We strive to improve & attain betterment of our team",
        },
        {
            img: f4,
            title: "Explore",
            paragraph: "We explore opportunities to make your experience better",
        },
    ];
    return (
        <div className=" w-full p-7  bg-black h-screen">
           <div className="w-[90%] mx-auto">
           <div className="w-full h-screen grid   md:grid-cols-2  gap-2">
                <div class=" flex justify-center items-center ">
                    <div >
                    <div className="py-4">
                    <h1 className="text-2xl text-gray-100 font-bold  ">
                        Purely  
                    </h1>
                    <h1 className="text-4xl text-[#00b0ea]  font-bold uppercase  ">
                        Indian 
                    </h1>
                    
                    <h1 className="text-white text-xl font-medium">Audio Innovation</h1> 
                    </div>
                    <p className="text-gray-300">
                        Erthpot, a Make in India endeavor, strives to deliver top-notch audio technologies globally,
                        initiative to embodying the principles of groundedness, humility, and honesty in customer
                        interactions, earning the moniker "Erthpot.
                    </p>
                    </div>
                </div>
                
                <div class=" flex justify-center items-center ">
                    <img src={p1} className="w-[500px] rounded-tl-none rounded-br-none rounded-[100px]" alt="img" />
                </div>
            </div>
           </div>
        </div>
        
    );
};

export default Freelance;
