import react from "react";

const Technology = () => {
  return (
    <>
      <div
        className="w-full   h-[400px] bg-cover bg-center   "
        style={{
          backgroundImage: `url("https://www.shure.com/damfiles/content_hero_square_2/global/home-page/features/Full_Content_Hero_Full.webp-ec57ada25e9c7414b92e268508646324.webp")`,
        }}
      >
        <div className=" w-full h-full bg-[#001930]  opacity-25 flex justify-center items-center">
        
        <div className="w-[50%] ">
        <h1 className="text-center text-3xl font-bold text-white py-10 z-50">
          Shaping The Future Technology!
        </h1>
         
            <p className="text-gray-100">
              Erthpot has the aspiration and a skilled team of engineers who
              work dedicatedly to make our audio products imbibe the technology
              and features, which the world has eagerly looked for!
            </p>
          
        </div>
        </div>
       
      </div>
    </>
  );
};
export default Technology;
