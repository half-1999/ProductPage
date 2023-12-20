import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";
import { urlFor } from "./urlFor.jsx";

const HeroBanner = (props) => {
  const largeText1 = props.largeText1;
  const buttonText = props.buttonText;
  const desc = props.desc;
  const largeText2 = props.largeText2;
  const product = props.largeText1;

  const heroBanner = {
    image: {
      _type: "image",
      asset: {
        _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
        _type: "reference",
      },
    },
  };

  return (
    <div className="hero-banner-container-banner">
      <div>
        <h1>
          {largeText1}
          <span>
            {largeText1 === "Arche " ? "Series" : "  Conference System"}
          </span>
        </h1>
        <h3>
          <span>
            {largeText2 === " Microphones" ? "Wireless" : " Conference"}
          </span>
          {largeText2}
        </h3>
        <img src={urlFor(heroBanner.image)} alt="mic" />

        <div>
          <Link to={`/allproducts/${largeText1}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            {/* <h5>Description</h5> */}
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
