import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Each doctor is carefully selected for their expertise, professionalism, and commitment to patient care. We ensure that every individual receives the highest level of attention and treatment, no matter their health concern.
        </p>
        <p className="text-justify lg:text-start">
        Our doctors specialize in various fields, including general medicine, cardiology, dermatology, pediatrics, and more. Whether you need a routine check-up, specialized care, or urgent medical advice, our team is equipped to provide accurate diagnoses and personalized treatment plans that align with your health goals.
        </p>
        <p className="text-justify lg:text-start">
        With a focus on patient-centered care, our doctors prioritize clear communication and empathetic consultations. They are committed to making healthcare more accessible, offering telemedicine options and flexible appointment scheduling to ensure you get the care you need when you need it most.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;