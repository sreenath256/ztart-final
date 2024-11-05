import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { vars } from "../../constents/Api";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiFileWarningLine } from "react-icons/ri";
import { Loader } from "../../components";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${vars.api_url}/api/1.0/user/blog/blogs`
        ); // Replace with your actual API endpoint

        const data = response.data?.data;
        setBlogData(data); // Assuming the API returns an array of blog data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, []); // Runs once when the component mounts

  if (isLoading) {
    return <Loader />;
  }

  if (blogData.length === 0) {
    return (
      <div className="w-11/12 md:w-11/12 xl:w-10/12 mx-auto min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 p-8 rounded-lg bg-white shadow-xl shadow-gray-300">
          <RiFileWarningLine className="w-20 h-20 text-gray-400" />

          <div className="text-center">
            <h1 className="text-2xl font-PoppinsBold mb-2">No Blogs Found</h1>
            <p className="text-gray-500 font-PoppinsRegular mb-6">
              It looks like there aren't any blogs posted yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Find insightful Blogs from Ztartvisa | Your visa experts</title>
        <link
          rel="canonical"
          href={`https://ztartvisa.com/blogs`}
        />
        <meta
          name="description"
          content="Explore our blog for the latest updates on visa regulations and immigration news. Simplify your visa journey with Ztartvisa Dubai, UAE.
"
        />
      </Helmet>

      <div className=" lg:container w-11/12 md:w-11/12 xl:w-10/12 mx-auto h-full">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 py-10">
          {blogData.reverse().map((bdata, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 shadow-xl shadow-gray-300 p-5 group"
            >
              <img
                onClick={() => navigate(`/blogs/${bdata?._id}`)}
                className="object-cover cursor-pointer h-52 object-left-bottom xl:group-hover:scale-105 duration-300"
                src={bdata?.imageURL} // Assuming this is the image URL
                alt={bdata?.title}
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <h1 className="capitalize text-xl font-PoppinsBold">
                  {bdata?.title}
                </h1>
              </div>
              <button
                onClick={() => navigate(`/blogs/${bdata?.slug}`)}
                className="bg-visaclr font-PoppinsMedium px-2 text-sm py-1 rounded-sm text-white w-fit"
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
