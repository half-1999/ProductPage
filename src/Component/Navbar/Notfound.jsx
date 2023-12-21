import React from "react";
import { useNavigate } from "react-router-dom";
function Notfound(props) {
  const setShowNotFound = props.setShowNotFound;
  const navigate = useNavigate();

  return (
    <div className="text-white font-bold text-center  ">
      {" "}
      Result Not Notfound
      <br />
      <button
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          navigate("/");
          setShowNotFound(false);
          //   showNotFound(F)
          //   Also add showNotFound to false
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Notfound;
