import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams for URL parameters
import axios from "axios";
import { vars } from "../../constents/Api";

const EditBlogForm = () => {
  const { id } = useParams(); // Get blogId from the URL
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [imageFile, setImageFile] = useState(null); // Store the selected image file
  const navigate = useNavigate();
  // Fetch the blog content on component mount
  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates on unmounted component

    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${vars.api_url}/api/1.0/admin/blog/blog/${id}`
        );
        console.log(response.data); // Log the entire response

        if (isMounted) {
          // Only update state if the component is still mounted
          const blogData = response?.data.data;
          setTitle(blogData.title);
          setImage(blogData.imageURL);
          setDescription(blogData.description);
          setFaqs(blogData.faqs || []);
        }
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };

    fetchBlog();

    return () => {
      isMounted = false; // Cleanup flag when component unmounts
    };
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
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image
        </label>
        {image && (
          <img
            src={image} // Display the uploaded image
            alt="Selected"
            className="mt-1 w-full h-48 object-cover rounded-md"
          />
        )}
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
        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => setDescription(editor.getData())}
        />
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
          className="text-indigo-600 hover:text-indigo-800"
        >
          <MdAddCircle className="inline mr-1" /> Add FAQ
        </button>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Save
      </button>
    </div>
  );
};

export default EditBlogForm;
