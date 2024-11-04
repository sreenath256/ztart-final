import React from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdStar } from "react-icons/io";

const Feedback = () => {
  return (
    <section className=" py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center capitalize">
            5-Star Service,
            <br />{" "}
            <span className="text-visaclr">Thousands of Happy Travelers</span>
          </h2>
          <p className="text-xl ">
            Trusted by thousands with a perfect 5-star Google rating. Your
            journey is our priority!
          </p>
          <div className="flex items-center justify-center text-yellow-400 text-4xl md:text-5xl">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          {/* <p className="text-lg text-gray-700">
            Ztartvisa boasts a perfect 5-star Google review rating, showcasing
            our commitment to timely and reliable visa services.
          </p>
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md">
            <FcGoogle className="text-3xl" />
            <span className="text-xl font-semibold text-gray-800">Google Reviews</span>
          </div> */}
          <div className="flex flex-col items-center mt-4">
            <p className="text-2xl font-bold text-indigo-900">1,393+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          {/* <a 
            href="#" 
            className="mt-6 bg-visaclrhvr text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center"
          >
            Read Our Reviews
            <FaStar className="ml-2" size={20} fill="currentColor" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
