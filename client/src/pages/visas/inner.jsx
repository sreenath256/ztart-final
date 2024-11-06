import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { allvisaData } from "../../components/Constant";
import { HiOutlineDevicePhoneMobile, HiOutlineUsers } from "react-icons/hi2";
import { toast } from "react-toastify";
import { AiOutlineFieldTime, AiOutlineUser } from "react-icons/ai";
import { IoDocumentTextOutline, IoLocationOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from "axios";
import { vars } from "../../constents/Api";
import { RiFileWarningLine } from "react-icons/ri";
import { Loader } from "../../components";
import RichTextContent from "../../components/RichTextEditor/RichTextContent";

const notify = () =>
  toast.dark("Application started ✅", {
    position: "bottom-right",
    autoClose: 1000,
  });

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className={`flex gap-x-10 md:gap-x-0 py-6 justify-between items-center bg-white border-b last:border-0 pl-0 p-4 cursor-pointer transition duration-300 ease-in-out `}
        onClick={toggleOpen}
      >
        <div className="font-PoppinsMedium text-sm md:text-base">
          {question}
        </div>
        <div
          className={`transform transition-transform ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <FiPlus />
        </div>
      </div>
      <div
        className={`bg-white  overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-4 pl-0 text-sm font-PoppinsRegular">{answer}</p>
      </div>
    </div>
  );
};

const VisaInner = () => {
  const { id } = useParams();
  const [isSticky, setSticky] = useState(false);
  const [visadata, setVisaData] = useState({});
  const [isVisaOpen, setVisaOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const { title } = useParams();
  // const decodedTitle = decodeURIComponent(title);
  const visatogglePopup = () => {
    setVisaOpen(!isVisaOpen);
  };

  useEffect(() => {
    const fetchVisa = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${vars.api_url}/api/1.0/user/testimonial/testimonial/${id}`
        );
        console.log("Visa data from visa inner", response?.data?.data);
        if (response?.data?.data) {
          setVisaData(response?.data?.data);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisa();
    const handleScroll = () => {
      setSticky(window.scrollY > 600);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  if (visadata.length === 0) {
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
  }

  if (!visadata) {
    return <div>Page not found</div>;
  }

  // api

  const [formData, setFormData] = useState({
    customerName: "",
    mobileNo: "",
    countryId: "",
  });

  // Update form state based on input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const mobileNumberWithZero = "0" + formData.mobileNo;
    try {
      const response = await fetch(
        "https://lead.accorelab.com/api/Lead/Create/LeadAutoCustomer",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            ClientKey: "AcrelbKey", // Replace 'xxxxxxx' with your actual ClientKey
            ClientValue: "Xjr@5j%787gfounS10", // Replace 'xxxxxxx' with your actual ClientValue
          },
          body: JSON.stringify({
            customerName: formData.customerName,
            mobileNo: mobileNumberWithZero,
            countryId: formData.countryId, // Assuming countryId is always 4 as per your example
          }),
        }
      );

      if (!response.ok) {
        toast.error("Please fill out all fields to proceed");
        throw new Error("Something went wrong");
      }

      const data = await response.json(); // Assuming the server responds with JSON
      toast.dark("Submission Successful");
      setFormData({
        customerName: "",
        mobileNo: "",
        countryId: "",
      });
      setVisaOpen(false);
      console.log("Submission Successful", data);
      // Here you could clear the form or give feedback to the user
    } catch (error) {
      console.error("Submission failed", error);
    }
  };
  console.log("sadfdsfdf");

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://lead.accorelab.com/api/Country/List",
          {
            method: "GET",
            headers: {
              ClientKey: "AcrelbKey",
              ClientValue: "Xjr@5j%787gfounS10",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 200 && data.result) {
          setCountries(data.result);
        } else {
          setError(data.errorMessage || "Failed to fetch countries");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      <Helmet>
        <title>{visadata?.metaTitle}</title>
        <meta name="description" content={visadata?.metaDescription || {}} />
        <link
          rel="canonical"
          href={`https://ztartvisa.com/visa/${visadata?.slug}`}
        />
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 md:w-11/12 lg:w-9/12 mx-auto h-full flex flex-col md:flex-row gap-y-10 gap-x-10 lg:gap-x-10 py-5 relative">
          {/* left scrll body */}
          <div className="pb-5 md:pb-0 basis-3/6 lg:basis-4/6 flex flex-col gap-5 lg:gap-10">
            <div className="lg:pr-8">
              {/* <h1 className="text-2xl font-bold capitalize pb-5">{visadata?.place} Visit Visa Dubai UAE</h1> */}
              <div className="relative overflow-hidden md:rounded-3xl">
                <img
                  className="object-cover w-full h-52 md:h-44 object-left-bottom lg:h-full md:rounded-3xl pointer-events-none"
                  src={visadata?.imageURL}
                  alt={visadata?.imageAlt}
                />
              </div>
              {/* <div
              className="mt-5 flex flex-col gap-10 prose-h1:text-2xl prose-h1:font-bold prose-h1:capitalize prose-h2:text-xl prose-h2:font-PoppinsBold prose-h3:text-xl prose-h3:font-PoppinsBold prose-li:list-disc prose-h2:capitalize prose-h3:capitalize prose-h4:font-bold prose-p:text-base prose-p:mt-3 prose-ul:mt-3 prose-li:pt-1 prose-a:font-extrabold"
              dangerouslySetInnerHTML={{ __html: visadata.body1 }}
            ></div> */}
              <div className="mt-5 flex flex-col gap-10 text-3xl font-bold  ">
                <h1>{visadata?.title}</h1>
              </div>
              <div className=" flex flex-col gap-10 text-base mt-3 ">
                <RichTextContent content={visadata.description} />
              </div>

              <div className="flex gap-3">
                <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr my-3 font-PoppinsSemibold">
                  <Link to="/">apply now</Link>
                </button>
                <a
                  href="https://api.whatsapp.com/send?phone=971544404197"
                  target="_blank"
                  className="bg-visaclr grid place-items-center text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-green-600 my-3 font-PoppinsSemibold"
                >
                  Whatsapp
                </a>
              </div>
              {visadata?.questions?.map((question) => (
                <div className="pb-3 border-b border-b-1">
                  <RichTextContent content={question.question} />

                  <RichTextContent content={question.answer} />
                </div>
              ))}
              {/* <div className="mt-5 flex flex-col gap-10 prose-h1:text-2xl prose-h1:font-bold prose-h1:capitalize prose-h2:text-xl prose-h2:font-PoppinsBold prose-h3:text-xl prose-h3:font-PoppinsBold prose-li:list-disc prose-h2:capitalize prose-h3:capitalize prose-h4:font-bold prose-p:text-base prose-p:mt-3 prose-ul:mt-3 prose-li:pt-1 prose-a:font-extrabold">
              {visadata.description}
            </div> */}

              <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr my-3 font-PoppinsSemibold">
                <Link to="/contact">contact us</Link>
              </button>
            </div>

            {visadata?.faqList?.length > 0 ? (
              <hr className="w-full h-1" />
            ) : null}

            {/* faq */}
            <div className="">
              {visadata?.faqs?.length > 0 ? (
                <h6 className="text-xl font-PoppinsBold">FAQ'S</h6>
              ) : null}
              <div>
                {visadata?.faqs?.length > 0
                  ? visadata.faqs.map((faq, index) => (
                      <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>

          {/* right */}
          <div className="basis-3/6 xl:basis-2/6 relative">
            <div className="hidden md:inline">
              <div className="hidden md:sticky top-24 md:flex flex-col gap-5">
                <div className="mx-0 flex rounded-3xl flex-col gap-5 border p-5 shadow-xl ">
                  {/* Ribbon */}

                  {/* Ribbon */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-5 "
                  >
                    {/* <h1>Apply now</h1> */}
                    <div className="space-y-2">
                      <div className="relative w-full">
                        <input
                          className="outline-none h-10 w-full rounded-xl p-2 pl-8 border"
                          type="text"
                          placeholder="Name"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleChange} // Bind change handler
                          required
                        />
                        <AiOutlineUser className="absolute top-2.5 left-2 text-lg text-gray-700" />
                      </div>
                      <div className="relative w-full">
                        <input
                          className="outline-none h-10 w-full rounded-xl p-2 pl-20 border [&::-webkit-inner-spin-button]:appearance-none"
                          type="tel"
                          inputMode="numeric"
                          placeholder="58 550 3940"
                          pattern="[0-9]{9}"
                          title="Please enter a 9-digit number"
                          name="mobileNo"
                          value={formData.mobileNo}
                          onChange={handleChange} // Bind change handler
                          required
                        />
                        <p className="absolute top-1.5 left-8 chfont font-medium">
                          +971
                        </p>
                        <HiOutlineDevicePhoneMobile className="absolute top-2.5 left-2 text-lg text-gray-700" />
                      </div>
                      <div className="relative w-full">
                        <select
                          className="w-full md:py-2  pl-8 text-base focus:outline-none appearance-none border rounded-xl"
                          name="countryId"
                          value={formData.countryId}
                          onChange={handleChange} // Bind change handler
                          required
                        >
                          <option value="">Select a location</option>
                          {countries.map((country) => (
                            <option
                              key={country.countryId}
                              value={country.countryId}
                            >
                              {country.countryName}
                            </option>
                          ))}
                        </select>
                        <IoLocationOutline className="absolute top-3 left-2 text-lg text-gray-700" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className=" text-base bg-[#ffb800] hover:bg-[#f7c545] duration-150 capitalize font-PoppinsMedium rounded-xl shadow-md w-full h-10"
                    >
                      Start application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* mobile card */}
      <div
        className={`${
          isSticky ? "visible" : "hidden"
        } px-10 bg-white border-2 md:hidden h-20 fixed bottom-0 left-0 right-0 grid grid-cols-1 gap-x-1 place-items-center`}
      >
        {/* <div className="col-span-3 text-sm font-PoppinsSemibold leading-5">
                <p className="text-gray-500">Visa Guaranteed on</p>
                <p className="">16 February 2024</p>
              </div> */}
        <div className="w-full">
          <button
            onClick={visatogglePopup}
            className="bg-[#ffb800] w-full text-white py-3 px-5 rounded-xl capitalize text-sm font-PoppinsMedium"
          >
            start application
          </button>
        </div>
      </div>
      {/* get free visa pop up*/}
      {isVisaOpen && (
        <div className="fixed w-full h-screen bg-[#000000a1] backdrop-blur-[2px] top-0 left-0 z-[9999]">
          <div
            className={`fixed top-[50%] left-[50%] w-[85%] sm:w-[80%] md:w-[60%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-lg z-[9999]`}
          >
            <IoIosCloseCircleOutline
              onClick={visatogglePopup}
              className="text-2xl text-visaclr absolute top-3 right-3"
            />
            <div className="w-full h-full p-5 py-10 ">
              <h1 className="text-visaclr font-PoppinsSemibold text-center pb-5 text-lg capitalize">
                get free visa consultation
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                <div className="relative">
                  <input
                    className="border border-gray-300 p-2 w-full pl-8 rounded-sm outline-none"
                    type="text"
                    placeholder="Name"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange} // Bind change handler
                    required
                  />
                  <AiOutlineUser className="absolute top-2.5 left-2 text-lg text-gray-700" />
                </div>
                <div className="relative">
                  <input
                    className="border border-gray-300 p-2 pl-[75px] w-full rounded-sm outline-none"
                    type="tel"
                    inputMode="numeric"
                    placeholder="58 550 3940"
                    pattern="[0-9]{9}"
                    title="Please enter a 9-digit number"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange} // Bind change handler
                    required
                  />
                  <p className="absolute top-[7px] left-8 chfont font-medium">
                    +971
                  </p>
                  <HiOutlineDevicePhoneMobile className="absolute top-2.5 left-2 text-lg text-gray-700" />
                </div>
                <div className="relative">
                  <select
                    className="h-10 w-full pl-8 text-base outline-none border appearance-none"
                    name="countryId"
                    value={formData.countryId}
                    onChange={handleChange} // Bind change handler
                    required
                  >
                    <option value="">Select a location</option>
                    {countries.map((country) => (
                      <option key={country.countryId} value={country.countryId}>
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                  <IoLocationOutline className="absolute top-2.5 left-2 text-lg text-gray-700" />
                </div>
                <button
                  className="text-center w-full bg-visaclr h-10 text-white rounded-md mt-2"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VisaInner;
