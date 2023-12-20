import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blog = [
    {
      imgurl:
        "https://dt-hphone.myshopify.com/cdn/shop/articles/blog-7.jpg?v=1640769497",
      date: " December 27, 2021",
      Comments: "2 Comments",
      name: "By Ram M",
      details: "Make Listening To Music A New Dark Night Delightful Experience",
    },
    {
      imgurl:
        "https://dt-hphone.myshopify.com/cdn/shop/articles/blog-5.jpg?v=1640769435",
      date: " December 27, 2021",
      Comments: "2 Comments",
      name: "By Ram M",
      details: "Make Listening To Music A New Dark Night Delightful Experience",
    },
    {
      imgurl:
        "https://dt-hphone.myshopify.com/cdn/shop/articles/blog-6.jpg?v=1640769464",
      date: " December 27, 2021",
      Comments: "2 Comments",
      name: "By Ram M",
      details: "Make Listening To Music A New Dark Night Delightful Experience",
    },
  ];
  return (
    <div className=" w-full  py-5 pt-12  bg-[#001930]">
         <h1 className="text-center  text-3xl text-[#00AFAC] font-bold my-4">Latest News Update & Blogs</h1>
      {/* <div className=" w-[85%] mx-auto  h-screen  p-4  grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 "> */}
      <div className=" w-[85%] mx-auto  p-4 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
       
        {blog.map((item,i) => (
          // <div className="grid  grid-cols-3 gap-2 ">
            <Link to="/blogs" >
            {/* <div className="  w-[320px] mx-auto h-[380px] hover:bg-opacity-25 hover:bg-[#00AFAC] hover:duration-500 duration-500 "> */}
          
           <div className="m-2 mx-auto  hover:bg-opacity-25 hover:bg-[#00AFAC] hover:duration-500 duration-500 ">
            <div className="hover:-translate-y-2 hover:duration-500 duration-500" >
              <img
                src={item.imgurl}
                alt="no image"
              />
            </div>
            <div className="py-3 px-2 text-[#00AFAC]">
              <span className="text-[12px]  ">{item.date}</span>
              <span className="text-[12px] pl-2">{item.Comments}</span>
              <span className="text-[12px] pl-2">{item.name}</span>
            </div>
            <div className="px-2 " >
              <h1 className="text-md text-gray-100 hover:text-[#00AFAC] hover:duration-500 duration-500">
               {item.details}
              </h1>
            </div>
            <div className="py-2">
              <button className="text-bold text-[#00AFAC] border-[#00B0EA] border-b-2 text-center  ml-2">
                Read More
              </button>
            </div>
          </div>
           
            </Link>
            // </div>
        ))}
        
      </div>
    </div>
  );
};

export default Blogs;
