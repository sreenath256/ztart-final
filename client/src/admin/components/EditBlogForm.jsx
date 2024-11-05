import React, { useState, useEffect } from "react";

import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams for URL parameters
import axios from "axios";
import { vars } from "../../constents/Api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditBlogForm = () => {
  const { id } = useParams(); // Get blogId from the URL
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [imageFile, setImageFile] = useState(null); // Store the selected image file
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      ["code-block"],
    ],
  };

  // React Quill formats configuration
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "color",
    "background",
    "align",
    "script",
    "indent",
    "direction",
    "code-block",
  ];

  // Fetch the blog content on component mount
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${vars.api_url}/api/1.0/admin/blog/blog/${id}`
        );
        console.log(response.data); // Log the entire response

        const blogData = response?.data.data;
        setTitle(blogData.title);
        setMetaTitle(blogData.metaTitle);
        setMetaDescription(blogData.metaDescription);
        setImageAlt(blogData.imageAlt);
        setImage(blogData.imageURL);
        setDescription(blogData.description);
        setFaqs(blogData.faqs || []);
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveFaq = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const handleSave = async () => {

    const updatedData = {
      title,
      description,
      metaTitle,
      metaDescription,
      imageAlt,
      faqs,
      imageURL: image,
    };

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedData)); // Append JSON data
    if (imageFile) {
      formData.append("file", imageFile); // Append the selected image file
    }
    console.log(formData);

    try {
      const response = await axios.put(
        `${vars.api_url}/api/1.0/admin/blog/update-blog/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type
          },
        }
      );
      navigate("/manage-blogs");

      console.log(response.data);
      alert("Blog updated successfully!");
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update the blog.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Display selected image
      setImageFile(file); // Store the selected file
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="metaTitle"
          className="block text-sm font-medium text-gray-700"
        >
          Meta Title
        </label>
        <input
          type="text"
          id="metaTitle"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="metaDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Meta Description
        </label>
        <input
          type="text"
          id="metaDescription"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image
        </label>
        {
          image && 
          <img
            src={image} // Display the uploaded image
            alt="Selected"
            className="mt-1 w-full h-48 object-contain rounded-md"
          />
        }
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description
        </label>

        <style jsx global>{`
          .ql-editor {
            min-height: 200px;
            max-height: 500px;
          }
          .ql-toolbar.ql-snow {
            border-radius: 0.375rem 0.375rem 0 0;
          }
          .ql-container.ql-snow {
            border-radius: 0 0 0.375rem 0.375rem;
          }
        `}</style>

        <div className="mb-2">
          <ReactQuill
            value={description}
            onChange={(value) => setDescription(value)}
            placeholder="Enter the Description here..."
            modules={modules}
            formats={formats}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          FAQs
        </label>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 p-2 border border-gray-200 rounded-md"
          >
            <input
              type="text"
              value={faq.question}
              onChange={(e) =>
                handleFaqChange(index, "question", e.target.value)
              }
              placeholder="Question"
              className="mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:bg-gray-100 focus:outline-none focus:ring-opacity-50"
            />
            <textarea
              value={faq.answer}
              onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
              placeholder="Answer"
              className="mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-opacity-50"
              rows="3"
            ></textarea>
            <button
              onClick={() => handleRemoveFaq(index)}
              className="text-red-600 hover:text-red-800"
            >
              <MdRemoveCircle className="inline mr-1" /> Remove FAQ
            </button>
          </div>
        ))}
        <button
          onClick={handleAddFaq}
          className="text-visaclrhvr hover:text-indigo-800"
        >
          <MdAddCircle className="inline mr-1" /> Add FAQ
        </button>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-visaclrhvr text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-visaclr focus:ring-opacity-50"
      >
        Save
      </button>
    </div>
  );
};

export default EditBlogForm;
