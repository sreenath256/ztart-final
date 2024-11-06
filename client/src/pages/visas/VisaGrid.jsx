import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { vars } from "../../constents/Api";
import { Loader } from "../../components";
import { RiFileWarningLine } from "react-icons/ri";
import { Helmet } from "react-helmet";

const VisaGrid = () => {
  const [visaData, setVisaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVisaData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${vars.api_url}/api/1.0/user/testimonial/testimonials`
        ); // Replace with your actual API endpoint
        const data = response?.data?.data;
        console.log(data);

        setVisaData(data); // Assuming the API returns an array of visa data
      } catch (error) {
        console.error("Error fetching visa data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisaData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (isLoading) {
    return <Loader />;
  }

  if (visaData.length === 0) {
    return (
      <div className="w-11/12 md:w-11/12 xl:w-10/12 mx-auto min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 p-8 rounded-lg bg-white shadow-xl shadow-gray-300">
          <RiFileWarningLine className="w-20 h-20 text-gray-400" />

          <div className="text-center">
            <h1 className="text-2xl font-PoppinsBold mb-2">No Visa Found</h1>
            <p className="text-gray-500 font-PoppinsRegular mb-6">
              It looks like there aren't any visa posted yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Best Visa Agency In Dubai, Visa Assistance In Dubai UAE</title>
        <meta
          name="description"
          content="Best Visa Agency in Dubai offering expert visa assistance for tourists and businesses in Dubai, UAE. Trust us for a smooth and efficient visa process."
        />
        <link rel="canonical" href="https://ztartvisa.com/visa" />
      </Helmet>
      <div className="container mx-auto  py-8 ">
        <h1 className=" text-2xl lg:text-6xl font-PoppinsExtraBold text-center px-3 md:px-0  mt-20 text-visaclr">
          Popular Visas
          <span className="text-black text-3xl md:text-6xl"> from UAE</span>
        </h1>
        <p className="pb-10 text-base lg:text-2xl font-PoppinsRegular  text-center px-3 pt-5 md:px-0">
          Your First Choice for the Most Requested Visas
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {visaData.reverse().map((visa, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={visa.imageURL} // Assuming this is the image URL
                alt={visa.title}
                className="w-full h-48 sm:h-52 md:h-56 object-left-bottom object-cover cursor-pointer"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{visa.country}</h2>
                <button
                  onClick={() => navigate(`/visa/${visa.slug}`)} // Assuming `url` is part of the visa data
                  className="bg-visaclr font-PoppinsMedium px-2 text-sm py-1 rounded-lg text-white w-fit"a
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VisaGrid;
