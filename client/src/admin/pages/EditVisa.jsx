import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import EditVisaForm from "../components/EditVisaForm";

const EditVisaPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  // Dummy blog data
  const existingBlog = {
    id: "1234",
    title: "10 Tips for Mastering React Hooks",
    description:
      "<p>React Hooks have revolutionized the way we write React components. In this blog post, we'll explore 10 essential tips to help you master React Hooks and take your React development skills to the next level.</p><h2>1. Start with useState and useEffect</h2><p>These two hooks are the foundation of React Hooks. Make sure you understand them thoroughly before moving on to more advanced hooks.</p>",
    imageUrl: "/api/placeholder/800/400",
    faqs: [
      {
        question: "What are React Hooks?",
        answer:
          "React Hooks are functions that let you use state and other React features in functional components, without writing a class.",
      },
      {
        question: "Why should I use Hooks?",
        answer:
          "Hooks allow you to reuse stateful logic between components, making your code more modular and easier to understand.",
      },
    ],
    author: "Jane Doe",
    publishDate: "2023-09-15",
    category: "Web Development",
  };

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
        <Link to="/manage-visas">
          <button
            onClick={() => console.log("Navigate back")}
            className="flex items-center text-visaclr hover:text-visaclrhvr"
          >
            <MdArrowBack className="mr-2" /> Back to All Visas
          </button>
        </Link>
      </div>

      <EditVisaForm />
    </div>
  );
};

export default EditVisaPage;
