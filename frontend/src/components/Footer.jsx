import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo1} alt="" className="mb-5 w-68" />
          <p className="w-full md:w-2/3 text-gray-600">
            We are committed to providing a seamless online experience with
            top-quality products and services you can trust. Your satisfaction
            is our priority.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="text-gray-600 flex flex-col gap-1">
            <li>+1-123-654-7896</li>
            <li>rizmasoom786@gamil.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@mdforever.com - All Rigth Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
