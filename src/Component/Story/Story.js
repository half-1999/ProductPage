import React from "react";

const Story = () => {
    return (
        <div className=" w-full p-7  bg-black h-screen">
         

            <div className="grid  md:grid-cols-2  gap-2">
                <div class=" flex justify-center items-center ">
                    <img
                        src="https://www.erthpot.com/wp-content/uploads/2022/12/about-image.png"
                        className="w-[400px] hover:duration-700 duration-1000 "
                    />
                </div>
                <div>
                    <div className="text-center mt-20">
                        <span className="text-3xl text-gray-100 font-bold text-center border-b-2 border-[#00AFAC]">
                            The Erthpot Story
                        </span>
                    </div>
                    <div className=" p-10">
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
               
            </div>
        </div>
    );
};

export default Story;
