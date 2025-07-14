import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <img
          className="w-full md:max-w-[550px]"
          src={assets.about_img}
          alt="About us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our platform! We are a passionate team dedicated to
            providing top-notch products and seamless digital experiences. Our
            journey started with a simple idea — to bridge the gap between
            quality and accessibility in the digital space.
          </p>
          <p>
            Over the years, we’ve built a trusted community by focusing on
            transparency, reliability, and user satisfaction. Whether you're a
            customer or a seller, we strive to make every interaction smooth,
            efficient, and rewarding.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower individuals and businesses by offering
            innovative solutions, reliable service, and unparalleled support. We
            aim to simplify your digital experience while maintaining the
            highest standards of quality and trust.
          </p>
        </div>
      </div>

      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 py-8 md:px-16 sm:py-20 flex flex-col gap-4">
          <b className="text-center mb-2 text-gray-700">Quality Assurance</b>
          <p className="text-gray-500">
            We prioritize quality in everything we do. From the products we
            offer to the services we provide, we maintain strict standards to
            ensure customer satisfaction.
          </p>
        </div>
        <div className="border px-10 py-8 md:px-16 sm:py-20 flex flex-col gap-4">
          <b className="text-center mb-2 text-gray-700">Convenience</b>
          <p className="text-gray-500">
            Our platform is designed for ease and efficiency. With user-friendly
            navigation, fast checkout, and responsive support, we ensure a
            smooth and hassle-free experience.
          </p>
        </div>
        <div className="border px-10 py-8 md:px-16 sm:py-20 flex flex-col gap-4">
          <b className="text-center mb-2 text-gray-700">Exceptional Support</b>
          <p className="text-gray-500">
            We believe in building relationships, not just transactions. Our
            support team is always ready to help, listen, and resolve your
            concerns promptly and professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
