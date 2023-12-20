import React from "react";
import "./Products.css";

const FooterBanner = () => {
  return (
    <div>
      <div class="footer-banner-container">
        <div class="banner-desc">
          <div class="left">
            <p>20% OFF</p>
            <h3>FINE</h3>
            <h3>SMILE</h3>
            <p>15 Nov to 7 Dec</p>
          </div>
          <div class="right">
            <p>Beats Solo Air</p>
            <h3>Summer Sale</h3>
            <p>Best headphones on the market</p>
            <button type="button">Shop Now</button>
          </div>
          <img
            src="https://drive.google.com/uc?id=1z6MBkrdn_oY5XJ8RdBv7a3MMpkuJ4enE"
            class="footer-banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
