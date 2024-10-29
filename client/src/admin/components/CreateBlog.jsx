import React, { useState } from "react";
import {
  MdAddCircle,
  MdRemoveCircle,
  MdCloudUpload,
  MdClose,
} from "react-icons/md";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios"; // Import axios for API calls
import { useNavigate } from "react-router-dom";
import { vars } from "../../constents/Api";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // image file
  const [imagePreview, setImagePreview] = useState(""); // image preview URL
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [loading, setLoading] = useState(false); // For button state
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create URL for preview
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setImagePreview("");
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  // API call on form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state during API call

    // Creating FormData to handle image and other data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("file", image); // Image file
    formData.append("faqs", JSON.stringify(faqs)); // Convert FAQs to string

    try {
      // Replace the URL with your backend API endpoint
      const response = await axios.post(
        `${vars.api_url}/api/1.0/admin/blog/create-blog`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for file upload
          },
        }
      );
      navigate("/manage-blogs");
      console.log("Blog submitted successfully", response.data);
      // You can reset the form or show success feedback here
    } catch (error) {
      console.error("Error submitting blog", error);
      // Handle error (show error message, etc.)
    } finally {
      setLoading(false); // Reset loading state after API call
    }
  };

  const handleSlugChange = (e) => {
    // Convert input text to lowercase and replace spaces with hyphens
    const updatedSlug = e.target.value.toLowerCase().replace(/\s+/g, "-"); // Replace spaces with hyphens
    setSlug(updatedSlug);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 hidden lg:block">
        Add Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Slug
          </label>
          <input
            type="text"
            value={slug}
            onChange={handleSlugChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          {slug && (
            <p className="text-sm pt-2 font-PoppinsLight text-[#00a39a]">
              Generated Slug: {slug}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Visa Image
          </label>
          {!image && (
            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <MdCloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          )}

          {image && (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Visa Preview"
                className="w-full h-auto border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={handleImageRemove}
                className="absolute top-2 right-2 bg-white text-red-500 p-1 rounded-full shadow-md hover:bg-red-100"
              >
                <MdClose className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>

        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => setDescription(editor.getData())}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          FAQs
        </label>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-200 rounded-md"
          >
            <input
              type="text"
              value={faq.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
              placeholder="FAQ Question"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <textarea
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
              placeholder="FAQ Answer"
              rows={2}
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            <button
              type="button"
              onClick={() => removeFaq(index)}
              className="text-red-500 hover:text-red-700"
            >
              <MdRemoveCircle className="inline mr-1" /> Remove FAQ
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addFaq}
          className="mt-2 text-[#00a39a] hover:text-[#136a65]"
        >
          <MdAddCircle className="inline mr-1" /> Add FAQ
        </button>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#00a39a] hover:bg-[#15756e]"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
