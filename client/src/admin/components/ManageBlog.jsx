import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import BlogForm from "./BlogForm"; // Assuming BlogForm is in the same directory

const ManageBlogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  // Dummy blog data
  const existingBlog = {
    id: "1234",
    title: "10 Tips for Mastering React Hooks",
    description: "<p>React Hooks have revolutionized the way we write React components. In this blog post, we'll explore 10 essential tips to help you master React Hooks and take your React development skills to the next level.</p><h2>1. Start with useState and useEffect</h2><p>These two hooks are the foundation of React Hooks. Make sure you understand them thoroughly before moving on to more advanced hooks.</p>",
    imageUrl: "/api/placeholder/800/400",
    faqs: [
      { 
        question: "What are React Hooks?", 
        answer: "React Hooks are functions that let you use state and other React features in functional components, without writing a class." 
      },
      { 
        question: "Why should I use Hooks?", 
        answer: "Hooks allow you to reuse stateful logic between components, making your code more modular and easier to understand." 
      }
    ],
    author: "Jane Doe",
    publishDate: "2023-09-15",
    category: "Web Development"
  };

  const handleSave = async (blogData) => {
    setIsLoading(true);
    setSaveStatus(null);
    
    // Simulating an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <button 
          onClick={() => console.log("Navigate back")} 
          className="flex items-center text-visaclr hover:text-visaclrhvr"
        >
          <MdArrowBack className="mr-2" /> Back to All Blogs
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Edit Blog</h1>
          <p className="text-gray-600">ID: {existingBlog.id}</p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Author:</span> {existingBlog.author} | 
            <span className="font-semibold"> Published:</span> {existingBlog.publishDate} | 
            <span className="font-semibold"> Category:</span> {existingBlog.category}
          </p>
        </div>

        <BlogForm 
          existingBlog={existingBlog} 
          onSubmit={handleSave}
        />

        {isLoading && (
          <div className="mt-4 text-center">
            <p className="text-visaclr">Saving changes...</p>
          </div>
        )}

        {saveStatus === "success" && (
          <div className="mt-4 text-center">
            <p className="text-green-600">Blog post updated successfully!</p>
          </div>
        )}

        {saveStatus === "error" && (
          <div className="mt-4 text-center">
            <p className="text-red-600">Error updating blog post. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBlogs;