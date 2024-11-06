import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams for URL parameter

import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import axios from "axios";
import { vars } from "../../constents/Api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditVisaForm = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imageFile, setImageFile] = useState(null); // Store the selected image file
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [questions, setQuestions] = useState([]);
  const [faqs, setFaqs] = useState([]);
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

  // Fetch visa details from API
  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await axios.get(
          `${vars.api_url}/api/1.0/admin/testimonial/testimonial/${id}`
        );
        const data = response?.data?.data;
        console.log("From edit visa page", data);

        // Assuming the API returns the data in the expected format
        setTitle(data.title);
        setMetaTitle(data.metaTitle);
        setMetaDescription(data.metaDescription);
        setCountry(data.country);
        setImage(data.imageURL);
        setImageAlt(data.imageAlt);
        setDescription(data.description);
        setAbout(data.about);
        setQuestions(data.questions || []);
        setFaqs(data.faqs || []);
      } catch (error) {
        console.error("Error fetching visa details:", error);
      }
    };

    fetchVisaDetails();
  }, [id]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

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
      metaTitle,
      metaDescription,
      imageAlt,
      country,
      title,
      description,
      about,
      questions,
      faqs,
      imageURL: image,
    };

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedData)); // Append JSON data
    if (imageFile) {
      formData.append("file", imageFile); // Append the selected image file
    }

    try {
      const response = await fetch(
        `${vars.api_url}/api/1.0/admin/testimonial/update-testimonial/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        navigate("/manage-visas");

        console.log("Successfully updated visa details.");
        // Optionally, redirect or show a success message
      } else {
        console.error("Failed to update visa details:", await response.text());
      }
    } catch (error) {
      console.error("Error updating visa details:", error);
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-6">Edit Visa</h2>
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-opacity-50"
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-opacity-50"
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image
        </label>
        <img
          src={image}
          alt="Selected"
          className="mt-1 w-full h-48 object-contain rounded-md"
        />
        <input
          type="file"
          id="image"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(URL.createObjectURL(file)); // Display selected image
            setImageFile(file); // Store the selected file
          }}
          className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image Alt
        </label>
        <input
          type="text"
          value={imageAlt}
          onChange={(e) => setImageAlt(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-visaclr focus:border-visaclr"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>

        <ReactQuill
          value={description}
          onChange={(value) => setDescription(value)}
          placeholder="Enter description... "
          modules={modules}
          formats={formats}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Questions and Answers
        </label>
        {questions.map((q, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-200 rounded-md"
          >
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question
              </label>
              <ReactQuill
                value={q.question}
                onChange={(value) =>
                  handleQuestionChange(index, "question", value)
                }
                placeholder="Enter the question here... "
                modules={modules}
                formats={formats}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer
              </label>
              <ReactQuill
                value={q.answer}
                onChange={(value) =>
                  handleQuestionChange(index, "answer", value)
                }
                placeholder="Enter the answer here... "
                modules={modules}
                formats={formats}
              />
            </div>

            <button
              type="button"
              onClick={() => removeQuestion(index)}
              className="text-red-500 hover:text-red-700"
            >
              <MdRemoveCircle className="inline mr-1" /> Remove Question
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addQuestion}
          className="mt-2 text-[#00a39a] hover:text-[#136a65]"
        >
          <MdAddCircle className="inline mr-1" /> Add Question
        </button>
      </div>
      <div className="mb-4">
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
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-visaclr focus:border-visaclr"
              required
            />

            <div className="mb-2">
              <input
                type="text"
                value={faq.answer}
                onChange={(e) =>
                  handleFaqChange(index, "answer", e.target.value)
                }
                placeholder="FAQ Answer"
                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-visaclr focus:border-visaclr"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemoveFaq(index)}
              className="text-red-500 hover:text-red-700"
            >
              <MdRemoveCircle className="inline mr-1" /> Remove FAQ
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddFaq}
          className="text-[#00a39a] hover:text-[#136a65]"
        >
          <MdAddCircle className="inline mr-1" /> Add FAQ
        </button>
      </div>
      <button
        onClick={handleSave}
        className="bg-visaclr text-white px-4 py-2 rounded-md"
      >
        Save
      </button>
    </div>
  );
};

export default EditVisaForm;
