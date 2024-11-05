import React, { useState, useEffect } from "react";
import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { vars } from "../../constents/Api";
import { Loader } from "../../components";
import { RiFileWarningLine } from "react-icons/ri";

const ManageBlogs = () => {
  const [Blogs, setBlogs] = useState([]); // State to store Blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch Blog data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${vars.api_url}/api/1.0/admin/blog/blogs`
        ); // Replace with your API URL
        setBlogs(response.data?.data); // Assuming the response contains Blog data
        console.log(response.data.data.length);
      } catch (error) {
        console.error("Error fetching Blogs:", error);
        setError("Failed to fetch Blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Delete Blog function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Blog?")) {
      try {
        await axios.delete(
          `${vars.api_url}/api/1.0/admin/blog/delete-blog/${id}`
        ); // API endpoint for deletion
        // Filter out the deleted Blog from the state
        setBlogs(Blogs.filter((Blog) => Blog._id !== id));
      } catch (error) {
        window.location.reload();
        console.error("Error deleting Blog:", error);
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (Blogs.length === 0) {
    return (
      <div className="w-11/12 md:w-11/12 xl:w-10/12 mx-auto min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 p-8 rounded-lg bg-white shadow-xl shadow-gray-300">
          <RiFileWarningLine className="w-20 h-20 text-gray-400" />

          <div className="text-center">
            <h1 className="text-2xl font-PoppinsBold mb-2">No Blog Found</h1>
            <p className="text-gray-500 font-PoppinsRegular mb-6">
              It looks like there aren't any blog posted yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-[#00a39a] mb-6">Manage Blogs</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Blog Image
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Blog Title
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Blogs.length === 0 ? (
              <p>No data found</p>
            ) : (
              Blogs?.reverse().map((Blog) => (
                <tr key={Blog._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b">
                    <img
                      src={Blog?.imageURL}
                      alt={Blog?.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 border-b text-gray-700">
                    {Blog?.title}
                  </td>
                  <td className="px-4 py-3 border-b space-x-2">
                    <Link to={`${Blog.slug}/edit`}>
                      <button
                        className="text-visaclr hover:bg-gray-100 p-2 rounded"
                        aria-label="Edit Blog"
                      >
                        <MdEdit size={20} />
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:bg-gray-100 p-2 rounded"
                      aria-label="Delete Blog"
                      onClick={() => handleDelete(Blog._id)} // Call the delete function with the Blog ID
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlogs;
