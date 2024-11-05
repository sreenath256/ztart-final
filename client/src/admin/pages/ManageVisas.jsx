import React, { useState, useEffect } from "react";
import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { vars } from "../../constents/Api";
import { Loader } from "../../components";
import { RiFileWarningLine } from "react-icons/ri";

const ManageVisas = () => {
  const [visas, setVisas] = useState([]); // State to store visa data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch visa data from API
  useEffect(() => {
    const fetchVisas = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${vars.api_url}/api/1.0/admin/testimonial/testimonials`
        ); // Replace with your API URL
        setVisas(response.data?.data); // Assuming the response contains visa data
      } catch (error) {
        console.error("Error fetching visas:", error);
        setError("Failed to fetch visa data");
      } finally {
        setLoading(false);
      }
    };

    fetchVisas();
  }, []);

  // Delete visa function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this visa?")) {
      try {
        await axios.delete(
          `${vars.api_url}/api/1.0/admin/testimonial/delete-testimonial/${id}`
        ); // API endpoint for deletion
        // Filter out the deleted visa from the state
        setVisas(visas.filter((visa) => visa._id !== id));
      } catch (error) {
        console.error("Error deleting visa:", error);
        setError("Failed to delete visa");
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (visas.length === 0)
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

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-[#00a39a] mb-6">Manage Visas</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Visa Image
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Visa Title
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {visas?.reverse().map((visa) => (
              <tr key={visa._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">
                  <img
                    src={visa?.imageURL}
                    alt={visa?.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 border-b text-gray-700">
                  {visa?.title}
                </td>
                <td className="px-4 py-3 border-b space-x-2">
                  <Link to={`${visa.slug}/edit`}>
                  <button
                    className="text-visaclr hover:bg-gray-100 p-2 rounded"
                    aria-label="Edit Visa"
                  >
                      <MdEdit size={20} />
                  </button>
                  </Link>
                  <button
                    className="text-red-500 hover:bg-gray-100 p-2 rounded"
                    aria-label="Delete Visa"
                    onClick={() => handleDelete(visa._id)} // Call the delete function with the visa ID
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageVisas;
