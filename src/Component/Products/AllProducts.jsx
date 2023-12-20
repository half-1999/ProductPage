import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./Products.css";
import HeroBanner from "./HeroBanner";
import SingleProductPage from "./SingleProduct";
import HeroBanner2 from "./HeroBanner2";

const ProductCard = ({ product: { image, name, category }, index }) => {
  const handleClick = () => {
    console.log("Clicked on:", name, category, image);
  };

  return (
    <div>
      <Link
        to={`/product/${encodeURIComponent(name)}`}
        onClick={() => handleClick({ name, category, image, handleClick })}
      >
        <div className={`product-card ${index % 2 === 0 ? "even" : "odd"}`}>
          <img
            src={image}
            width="250"
            height="250"
            className="product-image"
            alt={name}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Category : {category}</p>
        </div>
      </Link>
    </div>
  );
};

const AllProducts = ({ handleClick }) => {
  const { productName } = useParams();
  const [category, setCategory] = useState("");

  const bannerProps = {
    largeText1: "Arche ",
    buttonText: "Watch More",
    desc: "Best Wireless Microphones on the market",
    image: {
      asset: {
        _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
      },
      _type: "image",
    },
    largeText2: " Microphones",
    _type: "banner",
  };
  const bannerProps2 = {
    largeText1: "Keyer ",
    buttonText: "Watch More",
    desc: "Best Digital Processing & Control on the market",
    image: {
      asset: {
        _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
      },
      _type: "image",
    },
    largeText2: " & Control",
    _type: "banner",
  };
  const bannerProps3 = {
    largeText1: "Novo ",
    buttonText: "Watch More",
    desc: "Best Audio Conference System on the market",
    image: {
      asset: {
        _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
      },
      _type: "image",
    },
    largeText2: " System",
    _type: "banner",
  };
  const bannerProps4 = {
    largeText1: "Vector ",
    buttonText: "Watch More",
    desc: "Best Vector Conference System on the market",
    image: {
      asset: {
        _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
      },
      _type: "image",
    },
    largeText2: " System",
    _type: "banner",
  };

  // Function to get bannerProps based on the category
  const getBannerProps = (category) => {
    switch (category) {
      case "Arche":
        return bannerProps;
      case "Novo":
        return bannerProps3;
      case "Keyer":
        return bannerProps2;
      case "Vector":
        return bannerProps4;
      default:
        return bannerProps; // Default to bannerProps if category is not found
    }
  };

  // Get the appropriate bannerProps based on the category
  const selectedBannerProps = getBannerProps(productName);
  const dummyProducts = [
    {
      name: "Novo",
      category: "Novo",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp",
      price: 86,
    },
    {
      name: "Novo",
      category: "Novo",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp",
      price: 86,
    },
    {
      name: "Novo",
      category: "Novo",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp",
      price: 86,
    },
    {
      name: "Novo",
      category: "Novo",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp",
      price: 86,
    },
    {
      name: "Novo",
      category: "Keyer",
      image: "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb",
      price: 56,
    },
    {
      name: "Novo",
      category: "Keyer",
      image: "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb",
      price: 56,
    },
    {
      name: "Novo",
      category: "Keyer",
      image: "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb",
      price: 56,
    },
    {
      name: "Novo",
      category: "Keyer",
      image: "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb",
      price: 56,
    },
    {
      name: "Arche1",
      category: "Arche",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "Arche2",
      category: "Arche",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "Arche",
      category: "Arche",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "Arche",
      category: "Arche",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "Arche",
      category: "Vector",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "Arche",
      category: "Vector",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "Arche",
      category: "Vector",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "Arche",
      category: "Vector",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
  ];

  useEffect(() => {
    const category =
      productName && dummyProducts
        ? dummyProducts.filter((product) => product.category === productName)
        : dummyProducts;
    setCategory(category[0].category);
  }, [productName, dummyProducts]);
  console.log("Category:", category);

  // Filter products based on the productName
  const filteredProducts =
    productName && dummyProducts
      ? dummyProducts.filter((product) => product.category === productName)
      : dummyProducts;

  const getImageBasedOnCategory = (category) => {
    switch (category) {
      case "Arche":
        return "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb";
      case "Novo":
        return "https://drive.google.com/uc?id=1MAAHsydFoaDUENIALzXffLNE6Qtn89Ae";
      case "Keyer":
        return "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb";
      case "Vector":
        return "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb";
      default:
        return "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb";
    }
  };

  return (
    <div>
      <div className="test">
        <div>
          {category === "Arche" || category === "Novo" ? (
            <HeroBanner {...selectedBannerProps} />
          ) : (
            <HeroBanner2 {...selectedBannerProps} />
          )}
        </div>

        <h3 className="text-center text-white text-2xl font-bold underline">
          Featured Products
        </h3>
        <div className="products-container">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>

        {/* 1 */}
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 m-4">
          <div className="inset-y-0 custom top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 testing">
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full custom-img"
              // src="https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb"
              src={getImageBasedOnCategory(category)}
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h3 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#00b0ea] sm:text-4xl sm:leading-none">
                Dante Audio Transmission
              </h3>
              <p className="pr-5 mb-5 text-base text-white md:text-lg">
                The Dante technology from Audinate provides smooth and
                hassle-free digital audio transmission over the local area
                networks. Dante-enabled devices can share multiple channels of
                high-resolution digital audio with each other over a local area
                network.
              </p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 m-4">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ml-auto">
            <h3 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#00b0ea] sm:text-4xl sm:leading-none">
              Acoustic Echo Cancellation
            </h3>
            <p className="pr-5 mb-5 text-base text-white md:text-lg">
              The Keyer Series of DSP have advanced AEC algorithms to create
              much faster echo or double talk eliminations and thereby providing
              a disturbance-free Intelligent voice quality.
            </p>
          </div>

          <div className="relative inset-y-0 custom top-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 ml-auto order-last">
            <img
              className="object-cover w-90 h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full custom-img"
              src="https://drive.google.com/uc?id=1MAAHsydFoaDUENIALzXffLNE6Qtn89Ae"
              alt=""
            />
          </div>
        </div>

        {/* 3 */}
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 m-4">
          <div className="inset-y-0 custom top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb"
              alt=""
            />
          </div>

          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <h3 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#00b0ea] sm:text-4xl sm:leading-none">
                Advanced Audio Processing
              </h3>
              <p className="pr-5 mb-5 text-base text-white md:text-lg">
                Keyer DSPs boast much-needed algorithms like ANS(Automatic Noise
                Suppression) <br />
                AFC (Adaptive Feedback Control) <br />
                AGC (Automatic Gain Control) to provide you with a
                comprehensible audio output.
              </p>
            </div>
          </div>
        </div>

        {/* 4th */}
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 m-4">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ml-auto ">
            <h3 className="mb-5 font-sans text-3xl font-bold tracking-tight text-[#00b0ea] sm:text-4xl sm:leading-none">
              PowerfulMotherboard Chip
            </h3>
            <p className="pr-5 mb-5 text-base text-white md:text-lg">
              TI456MHz ARM9 Dual Core processor is one of the most reliable chip
              for high performance multi-tasking programs
            </p>
          </div>

          <div className="relative inset-y-0 custom top-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 ml-auto order-last">
            <img
              className="object-cover w-90 h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src="https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb"
              alt=""
            />
          </div>
        </div>

        {/* More Products */}
        <div class="maylike-products-wrapper">
          <h3>You may also like</h3>
          <div className="marquee bg-[#00b0ef]">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {category === "Arche" || category === "Novo" ? (
          <HeroBanner {...selectedBannerProps} />
        ) : (
          <HeroBanner2 {...selectedBannerProps} />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
