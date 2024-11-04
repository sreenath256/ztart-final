import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import EditBlogForm from "../components/EditBlogForm";
import { Link } from "react-router-dom";

const EditBlogPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);


  const handleSave = async (blogData) => {
    setIsLoading(true);
    setSaveStatus(null);

    // Simulating an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Fake delay
      console.log("Saved blog data:", blogData);
      setSaveStatus("success");
    } catch (error) {
      console.error("Error saving blog:", error);
      setSaveStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full ">
      <div className="mb-8">
        <Link to="/manage-blogs">
          <button
            onClick={() => console.log("Navigate back")}
            className="flex items-center text-visaclr hover:text-visaclrhvr"
          >
            <MdArrowBack className="mr-2" /> Back to All Blogs
          </button>
        </Link>
      </div>

      <EditBlogForm />
    </div>
  );
};

export default EditBlogPage;
