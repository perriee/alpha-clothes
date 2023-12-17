import React from "react";
import logo_alpha from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#F7F7F7] sm:p-6 dark:bg-gray-800 mt-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/home" className="flex items-center">
              <img src={logo_alpha} className="mr-3 h-8" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Alpha Clothes
              </span>
            </a>  
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/product" className="hover:underline">
                    Product
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Hubungi Kami
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://maps.app.goo.gl/1Unt4HbobBaCbJR78"
                    className="hover:underline "
                  >
                    Lokasi
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="https://www.instagram.com/alphaclothesyk/"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between mt-2">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <button className="hover:underline">
              Alphaclothes™
            </button>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
