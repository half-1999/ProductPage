import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { urlFor } from "./urlFor.jsx";
const SingleProductPage = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const dummyProducts = [
      {
        name: "Novo",
        category: "Novo",
        image:
          "https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp",
        price: 86,
      },
      {
        name: "Cool_In-ear_headphones",
        category: "Novo",
        image:
          "https://cdn.sanity.io/images/vfxfwnaw/production/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp",
        price: 76,
      },

      {
        name: "Novo",
        category: "Novo",
        image:
          "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb",
        price: 56,
      },
      {
        name: "Arche1",
        category: "Arche",
        image:
          "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
        price: 56,
      },
      {
        name: "Arche2",
        category: "Arche",
        image:
          "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
        price: 56,
      },
      {
        name: "Arche",
        category: "Arche",
        image:
          "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
        price: 56,
      },
      {
        name: "Arche",
        category: "Arche",
        image:
          "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
        price: 56,
      },
      {
        name: "Arche",
        category: "Arche",
        image:
          "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
        price: 56,
      },
      {
        name: "Arche",
        category: "Arche",
        image:
          "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
        price: 56,
      },
      {
        name: "Arche",
        category: "Arche",
        image:
          "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
        price: 56,
      },
      {
        name: "Arche",
        category: "Arche",
        image:
          "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
        price: 56,
      },
      {
        name: "EarthPot",
        category: "Novo",
        image:
          "https://drive.google.com/uc?id=1z6MBkrdn_oY5XJ8RdBv7a3MMpkuJ4enE",
        price: 56,
      },
      {
        name: "EarthPot",
        category: "Novo",
        image:
          "https://drive.google.com/uc?id=1MAAHsydFoaDUENIALzXffLNE6Qtn89Ae",
        price: 56,
      },
    ];

    const foundProduct = dummyProducts.find((p) => p.name === productName);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle the case where the product is not found
      console.error(`Product with name ${productName} not found.`);
    }
  }, [productName]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <main className="main-container">
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          top: 16,
          left: 16,
          right: 16,
          bottom: 16,
          pointerEvents: "none",
        }}
      ></div>
      <div>
        <div class="product-detail-container">
          <div>
            <div class="image-container">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "400px",
                    height: "400px",
                    // backgroundColor: "#00b0ef",
                    borderRadius: "0px 50px",
                  }}
                />
              )}
            </div>
            <div class="small-images-container">
              <img
                src="https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp"
                class="small-image selected-image"
              />
              <img
                src="https://cdn.sanity.io/images/vfxfwnaw/production/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp"
                class="small-image"
              />
              <img
                src="https://cdn.sanity.io/images/vfxfwnaw/production/7d8e11aa468c951095577c0ecada75ad7d66313e-800x800.webp"
                class="small-image"
              />
              <img
                src="https://cdn.sanity.io/images/vfxfwnaw/production/157be1e12db1dab55141ee5935f7fe8b8887ced3-800x800.webp"
                class="small-image"
              />
            </div>
          </div>
          <div class="product-detail-desc">
            <h1>{product.name}</h1>
            <div class="reviews">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
              </svg>
            </div>
            <h4>Category: {product.category}</h4>
            <h4>Details: Immerse in the amazing sound</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            {/* <p class="price">${price}</p> */}
          </div>
        </div>
        {/* <div class="maylike-products-wrapper">
          <h3>You may also like</h3>
          <div className="marquee">
            <div class="maylike-products-container track">
              <div>
                <div class="product-card">
                  <img
                    src="https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp"
                    width="250"
                    height="250"
                    class="product-image"
                  />
                  <p class="product-name">Speaker</p>
                  <p class="product-price">$56</p>
                </div>
              </div>
              <div>
                <div class="product-card">
                  <img
                    src="https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp"
                    width="250"
                    height="250"
                    class="product-image"
                  />
                  <p class="product-name">Speaker</p>
                  <p class="product-price">$56</p>
                </div>
              </div>
              <div>
                <div class="product-card">
                  <img
                    src="https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp"
                    width="250"
                    height="250"
                    class="product-image"
                  />
                  <p class="product-name">Speaker</p>
                  <p class="product-price">$56</p>
                </div>
              </div>
              <div>
                <div class="product-card">
                  <img
                    src="https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp"
                    width="250"
                    height="250"
                    class="product-image"
                  />
                  <p class="product-name">Speaker</p>
                  <p class="product-price">$56</p>
                </div>
              </div>
              <div>
                <div class="product-card">
                  <img
                    src="https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp"
                    width="250"
                    height="250"
                    class="product-image"
                  />
                  <p class="product-name">Speaker</p>
                  <p class="product-price">$56</p>
                </div>
              </div>
              <div>
                <div class="product-card">
                  <img
                    src="https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp"
                    width="250"
                    height="250"
                    class="product-image"
                  />
                  <p class="product-name">Speaker</p>
                  <p class="product-price">$56</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default SingleProductPage;
