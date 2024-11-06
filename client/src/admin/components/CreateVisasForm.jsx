import React, { useEffect, useState } from "react";
import {
  MdAddCircle,
  MdRemoveCircle,
  MdCloudUpload,
  MdClose,
} from "react-icons/md";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { vars } from "../../constents/Api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const CreateVisasForm = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [slug, setSlug] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [description, setDescription] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [image, setImage] = useState(null); // image file
  const [imagePreview, setImagePreview] = useState(""); // image preview URL
  const [about, setAbout] = useState("");
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

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

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answer: "" }]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create a FormData object
    const formData = new FormData();

    // Append the fields to the formData
    formData.append("country", country);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("metaTitle", metaDescription);
    formData.append("metaDescription", metaDescription);
    formData.append("imageAlt", imageAlt);
    formData.append("about", about);

    if (image) {
      formData.append("file", image); // Appending the image file
    }

    // Append questions and FAQs as JSON strings
    formData.append("questions", JSON.stringify(questions));
    formData.append("faqs", JSON.stringify(faqs));

    try {
      const response = await axios.post(
        `${vars.api_url}/api/1.0/admin/testimonial/create-testimonial`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        navigate("/manage-visas");
        // Handle success, like redirecting or showing a success message
        console.log("Visa created successfully", response.data);
        toast.success("Visa created successfully");
      } else {
        // Handle errors
        console.error("Error creating visa", response.data);
        setIsLoading(false);
        toast.error("Error creating visa");
      }
    } catch (error) {
      console.error("API call failed", error);
      toast.error("Error creating visa, slug is unique");
      setIsLoading(false);
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
        Add Visas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Visa Country
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-visaclr focus:border-visaclr"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Visa Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-visaclr focus:border-visaclr"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meta title
          </label>
          <input
            type="text"
            value={metaTitle}
            placeholder="Meta Title..."
            onChange={(e) => setMetaTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-visaclr focus:border-visaclr"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meta Description
          </label>
          <input
            type="text"
            placeholder="Meta Description..."
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-visaclr focus:border-visaclr"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-visaclr focus:border-visaclr"
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
                    className="relative cursor-pointer bg-white rounded-md font-medium text-visaclrhvr hover:text-visaclr focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-visaclr"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      accept="image/*"
                      required
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
          Image alt
        </label>
        <input
          type="text"
          value={imageAlt}
          onChange={(e) => setImageAlt(e.target.value)}
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
                Questions
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
                Answers
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

      <button
        type="submit"
        className={`w-full bg-[#00a39a] text-white py-2 px-4 rounded-md hover:bg-[#136a65] ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#00a39a] hover:bg-[#15756e]"
        }`}
      >
        {isLoading ? "Submitting..." : "Submit visa"}
      </button>
    </form>
  );
};

export default CreateVisasForm;
