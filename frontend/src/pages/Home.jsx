// library
import { useEffect, useState } from "react";

// some library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

// components
import ProductList from "../components/ProductList";
import Navigator from "../components/Navigator";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Heading from "../components/Heading";

import { Carousel } from "flowbite-react";
import clothes1 from "../assets/clothe1.png";

import data_json from "../data/data.json";

// config
import { API_URL, IMG_URL } from "../config.jsx";

let app_stack = "frontend";

export default function Home() {
  document.title = "Home | PinasMura";

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let clothes = products?.filter((product) => product.category === "clothing");
  let clothes_set_1 = clothes?.slice(0, 4);
  let clothes_set_2 = clothes?.slice(4, 8);

  let edible = products?.filter((product) => product.category === "edible");
  let edible_set_1 = edible?.slice(0, 4);
  let edible_set_2 = edible?.slice(4, 8);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/products`);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (app_stack === "fullstack") {
      fetchProducts();
    } else {
      setProducts(data_json);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Navigator />

      <header className="container mx-auto mb-10 mt-32 flex min-h-60 flex-col justify-center px-5">
        <Heading className="pb-2 md:pb-5">Get Inspired</Heading>

        <p className="w-full text-base font-medium md:w-4/5 lg:w-3/5">
          {`Browsing for your next long-haul trip, everyday journey, or just fancy
        a look at what's new? From community favourites to about-to-sell-out
        items, see them all here!`}
        </p>
      </header>

      <div className="container mx-auto my-10 px-5">
        <div className="scrollbar-hide flex flex-row gap-3 overflow-x-auto pb-5">
          {/* filter-item */}
          <div className="flex items-center gap-3 rounded-3xl border bg-white px-5 py-2 leading-tight filter">
            <div className="">
              <span className="text-xs">Category</span>
              <p className="whitespace-nowrap">All Categories</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          {/* filter-item */}
          <div className="flex items-center gap-3 rounded-3xl border bg-white px-5 py-2 leading-tight filter">
            <div className="">
              <span className="text-xs">Color</span>
              <p className="whitespace-nowrap">All Color</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          {/* filter-item */}
          <div className="flex items-center gap-3 rounded-3xl border bg-white px-5 py-2 leading-tight filter">
            <div className="">
              <span className="text-xs">Features</span>
              <p className="whitespace-nowrap">All Features</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="container mx-auto my-10 px-5">
            {/* products - 4 */}
            <ProductList>
              {clothes_set_1.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ProductList>

            {/* products - 4 */}
            <ProductList>
              {clothes_set_2.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ProductList>
          </section>

          <section className="container mx-auto my-40 hidden px-5">
            <div className="flex flex-wrap gap-3 md:flex-nowrap lg:gap-5">
              {/* product slider */}
              {/* <ProductSlider /> */}
              {clothes_set_2.map((product) => (
                <div
                  key={product.id}
                  className="product-image mx-auto flex max-w-md p-10"
                >
                  <img src={IMG_URL + "/" + product.image} />
                </div>
              ))}
              <div className="product-image mx-auto flex max-w-md p-10">
                <img src={clothes1} alt="" className="" />
              </div>
              {/* product slider */}
              {/* <ProductSlider /> */}
            </div>
          </section>

          <section className="container mx-auto my-40 px-5">
            {/* <div className="flex flex-wrap gap-3 md:flex-nowrap lg:gap-5"> */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Carousel
                slide={false}
                indicators={false}
                className="h-auto"
                draggable={false}
              >
                {/* carousel item */}
                {clothes_set_1.map((product, index) => (
                  <div
                    key={product.id}
                    className="product-container relative w-full rounded-xl bg-gray-200 p-5 md:p-10"
                  >
                    <div className="flex items-center justify-between">
                      {/* info */}
                      <div className="product-info">
                        <h2 className="text-xl md:text-2xl">Sweater</h2>
                        <p className="text-xs">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                        {/* <p className="text-base font-semibold">₱ 1,000.00</p> */}
                      </div>
                      {/* available color */}
                      <div className="product-available-color flex gap-1">
                        <div className="product-color h-3 w-3 rounded-full bg-green-500"></div>
                        <div className="product-color h-3 w-3 rounded-full bg-blue-500"></div>
                        <div className="product-color h-3 w-3 rounded-full bg-violet-500"></div>
                      </div>
                    </div>

                    {/* img */}
                    <div className="product-image mx-auto flex max-w-md border p-10">
                      <img src={IMG_URL + "/" + product.image} />
                    </div>

                    <div className="flex justify-between">
                      {/* page */}
                      <div className="">
                        <p className="text-xl font-thin md:text-2xl">
                          {index + 1}/{clothes_set_1.length}
                        </p>
                      </div>

                      {/* button */}
                      <div className="hidden gap-2">
                        <div className="product-slider-prev flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white">
                          <FontAwesomeIcon
                            icon={faAngleLeft}
                            className="text-gray-500"
                          />
                        </div>
                        <div className="product-slider-prev flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white">
                          <FontAwesomeIcon
                            icon={faAngleRight}
                            className="text-gray-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>

              <Carousel
                slide={false}
                indicators={false}
                className="h-auto"
                draggable={false}
              >
                {/* carousel item */}
                {edible_set_1.map((product, index) => (
                  <div
                    key={product.id}
                    className="product-container group relative w-full rounded-xl bg-gray-200 p-5 md:p-10"
                  >
                    <div className="flex items-center justify-between">
                      {/* info */}
                      <div className="product-info">
                        <h2 className="text-xl md:text-2xl">Sweater</h2>
                        <p className="text-xs">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                        {/* <p className="text-base font-semibold">₱ 1,000.00</p> */}
                      </div>
                      {/* available color */}
                      <div className="product-available-color flex gap-1">
                        <div className="product-color h-3 w-3 rounded-full bg-green-500"></div>
                        <div className="product-color h-3 w-3 rounded-full bg-blue-500"></div>
                        <div className="product-color h-3 w-3 rounded-full bg-violet-500"></div>
                      </div>
                    </div>

                    {/* img */}
                    <div className="product-image mx-auto flex max-w-md border p-10">
                      <img src={IMG_URL + "/" + product.image} />
                    </div>

                    <div className="flex justify-between">
                      {/* page */}
                      <div className="">
                        <p className="text-xl font-thin md:text-2xl">
                          {index + 1}/{edible_set_1.length}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </section>

          <section className="container mx-auto my-10 px-5">
            <ProductList>
              {edible_set_1.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ProductList>

            <ProductList>
              {edible_set_2.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ProductList>
          </section>
        </>
      )}

      <Footer />
    </>
  );
}
