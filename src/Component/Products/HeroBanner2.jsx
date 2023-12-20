import React from "react";
import { Link } from "react-router-dom";

import { urlFor } from "./urlFor.jsx";

const HeroBanner2 = (props) => {
  const heroBanner = {
    image: {
      _type: "image",
      asset: {
        _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
        _type: "reference",
      },
    },
  };
  const largeText1 = props.largeText1;
  const buttonText = props.buttonText;
  const desc = props.desc;
  // const image = props.image;
  const largeText2 = props.largeText2;
  const product = props.largeText1;

  const containerStyle = {
    padding: "100px 40px",
    backgroundColor: "#00b0ef",
    borderRadius: "15px",
    position: "relative",
    height: "500px",
    lineHeight: "0.9",
    width: "100%",
    marginBottom: "20px",
  };

  const h1Style = {
    color: "black",
    fontSize: "60px",
    marginRight: "10px",
    textTransform: "uppercase",
    marginTop: "5%",
    fontWeight: "800",
  };

  const h3Style = {
    fontSize: "40px",
    marginTop: "2%",
    fontWeight: "800",
    marginLeft: "4%",
    width: "50vw",
  };

  const imgStyle = {
    position: "absolute",
    top: "-5%",
    // right: "10%",
    width: "500px",
    height: "500px",
    cursor: "pointer",
    marginLeft: "-20px",
  };

  const buttonStyle = {
    borderRadius: "15px",
    padding: "10px 16px",
    backgroundColor: "#fff",
    color: "#00b0ef",
    border: "2px solid #fff",
    marginTop: "40px",
    marginLeft: "50%  ",
    fontSize: "18px",
    fontWeight: "800",
    cursor: "pointer",
    zIndex: "10000 !important",
  };

  const descStyle = {
    position: "absolute",
    right: "73%",
    bottom: "5%",
    width: "300px",
    lineHeight: "1.3",
    display: "flex",
    flexDirection: "column",
    color: "#324d67",
  };

  const descTextStyle = {
    color: "#000",
    marginBottom: "12px",
    marginLeft: "7px",
    fontWeight: "800",
    fontSize: "20px",
    // alignSelf: "flex-end",
  };

  const descParaStyle = {
    color: "#fff",
    fontWeight: "800",
    textAlign: "end",
    width: "130%",
  };
  const span = {
    color: "#fff",
    fontWeight: "800",
    fontSize: "41px",
  };
  const beats = {
    marginLeft: "48%",
    marginTop: "5%",
  };

  return (
    <div style={containerStyle}>
      <div>
        <div className="beats" style={beats}>
          <h1 style={h1Style}>
            {largeText1}
            <span style={span}>Series</span>
          </h1>
          <h3 style={h3Style}>
            <span style={span}>Digital Processing</span>
            {largeText2}
          </h3>
        </div>
        <img src={urlFor(heroBanner.image)} alt="mic" style={imgStyle} />

        <div>
          <Link to={`/allproducts/${largeText1}`}>
            <button type="button" style={buttonStyle}>
              {buttonText}
            </button>
          </Link>
          <div style={descStyle}>
            <h5 style={descTextStyle}>Description</h5>
            <p style={descParaStyle}>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner2;
