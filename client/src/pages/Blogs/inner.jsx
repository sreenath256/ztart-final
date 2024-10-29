import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { vars } from "../../constents/Api";
import { Loader } from "../../components";

const BlogInner = () => {
  const { id } = useParams(); // Get the slug from the URL
  const [bdata, setBdata] = useState({}); // State to hold blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  

  useEffect(() => {

    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `${vars.api_url}/api/1.0/user/blog/blog/${id}`
        ); // Replace with your actual API endpoint

        const data = response?.data?.data;
        setBdata(data); // Set the fetched blog data
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError(error); // Set the error if fetch fails
      } finally {
        setLoading(false); // Set loading to false after the fetch is done
      }
    };

    fetchBlogData();
  }, [id]); // Dependency array with title to refetch if it changes

  if (loading) {
    return <Loader/> // Loading state
  }

  if (bdata.length === 0) {
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

  if (error) {
    return <div>Error: {error.message}</div>; // Error state
  }

  if (!bdata) {
    return <div>Page not found</div>; // Handle case where no data is found
  }

  return (
    <>
      <Helmet>
        <title>{bdata?.title}</title>
        <link rel="canonical" href={`https://ztartvisa.com//blogs/${bdata?._id}`} />
      </Helmet>
      <div className="w-11/12 md:w-11/12 xl:w-9/12 mx-auto h-full py-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl xl:text-4xl font-PoppinsBold capitalize">
            {bdata.title}
          </h1>
          <img
            className="object-cover object-left xl:object-center h-52 md:h-full xl:h-[450px] w-full"
            src={bdata?.imageURL} // Assuming this is the image URL
            alt={bdata?.title}
            loading="lazy"
          />
          <Link to="/contact">
            <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr w-fit my-2 font-PoppinsSemibold">
              Apply Now
            </button>
          </Link>
          <div
            className="prose-h4:mt-2 prose-h3:mb-2 prose-a:hover:text-blue-700 prose-a:hover:underline prose-h3:mt-3 prose-ul:mb-3 prose-ul:ml-3 flex flex-col gap-5 prose-h1:text-2xl prose-h1:font-bold prose-h1:capitalize prose-h3:text-xl prose-h3:font-PoppinsBold prose-li:list-disc prose-h3:capitalize prose-h4:font-bold prose-p:text-base prose-ul:mt-1 prose-li:pt-1 prose-a:font-extrabold"
            dangerouslySetInnerHTML={{ __html: bdata.description }} // Assuming this is the blog content
          />
          <Link to="/">
            <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr w-fit my-2 font-PoppinsSemibold">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogInner;
