import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  InsatProf,
  insatsvg,
  relaxImg,
  relaxImg2,
  Trustpilotgoogle,
  ztartnews,
  PriceComp,
  ztartoffice,
  Scn1,
  diamondsvg,
  sheildsvg,
  heartsvg,
  Grp2,
  Grp3,
  Grp4,
  Buddy,
  Solutions,
  Savemoney,
  spainVisa,
  uk1Prt,
} from "../assets";
import {
  TravelCarousal,
  BetterDeal,
  Testimonial,
  Demo,
  VisaImageCarousal,
  InsatFeed,
} from "../components";
import { TiTick } from "react-icons/ti";
import { IoMdStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import {
  FaArrowUp,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { FiPlus } from "react-icons/fi";
import Feedback from "../components/Feedback/Feedback";

const benefits = [
  {
    title: "Your Trusted Visa Service in Dubai",
    description:
      "Count on us for specialized visa support from start to finish. Our experienced visa consultants in Dubai ensure your process is smooth, whether you’re applying for a Tourist Visa, Visit Visa, or Business Visa.",
    icon: "🏢",
  },
  {
    title: "Tailored Visa Solutions",
    description:
      "Need a Schengen Visa or a Business Visa? We’ve got you covered with customized services that meet all requirements for on-time approvals. Get Visa Solutions that are built around your specific needs.",
    icon: "🎯",
  },
  {
    title: "Efficient Visa Processing",
    description:
      "Skip the wait and experience fast, efficient visa services. From Schengen Visa Assistance to Tourist Visas, our streamlined process delivers quick turnarounds, ensuring you’re travel-ready in no time.",
    icon: "⚡",
  },
  {
    title: "Save Your Money",
    description:
      "Our expert advice helps you avoid unnecessary expenses—maximize your budget and get exactly what you need.",
    icon: "💰",
  },
  {
    title: "Reliable Visa Consultancy in Dubai",
    description:
      "Our dedicated team offers top-notch Visa Consultancy in Dubai, providing 24/7 customer support. We’re here to assist you through every step of the process.",
    icon: "🕰️",
  },
  {
    title: "Strong Government Connections",
    description:
      "With our deep understanding of global visa regulations and strong ties with government bodies, we can ensure a faster, smoother visa approval experience.",
    icon: "🤝",
  },
];

const LandFAQ = [
  {
    question: `What visa services do you offer in Dubai?`,
    answer: `We provide a wide range of visa services, including Schengen Visa Assistance, Tourist Visas, Visit Visas, and Business Visas, all with expert guidance.`,
  },
  {
    question: `Are you a registered visa consultant in Dubai?`,
    answer: `Yes, we are fully licensed and registered as a trusted Visa Consultant in Dubai.`,
  },
  {
    question: `How long does it take to process a visa?`,
    answer: `The time varies depending on the visa type and requirements, but we specialize in fast and efficient processing, especially for Schengen Visa applications in Dubai.`,
  },
  {
    question: `Can I apply for a visa online?`,
    answer: `Yes, you can submit your application and documents online through our website, providing seamless visa services in Dubai.`,
  },
  {
    question: `Do you assist with urgent visa applications?`,
    answer: `Yes, we offer expedited services for urgent visa applications in Dubai. Contact us for further details.`,
  },
  {
    question: `Do you assist with visa extensions or renewals?`,
    answer: `Absolutely! We provide comprehensive assistance for visa extensions and renewals, ensuring continued support from your trusted visa agents in Dubai.`,
  },
];

const highlights = [
  {
    title: `Professional Visa Services`,
    description: `With our expert tourist and business visa services in Dubai, you
                can easily explore new destinations.`,
  },
  {
    title: `Streamlined Process`,
    description: ` We make the visa application process stress-free by offering
                easy document preparation and quick submission.`,
  },
  {
    title: `Expert Guidance`,
    description: ` Ztartvisa hndles your visa needs efficiently, ensuring smooth
                and timely approvals for both travel and business trips.`,
  },
];

function Homepage() {
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const modalRef = useRef(null);
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

  const [formData, setFormData] = useState({
    customerName: "",
    mobileNo: "",
    countryId: "",
  });

  const navigate = useNavigate();

  // Update form state based on input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleBenefit = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  const [expandedBenefit, setExpandedBenefit] = useState(null);

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

      console.log("Submission Successful", data);
      // Here you could clear the form or give feedback to the user
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 360);
      setExpandedBenefit(null);
    };

    const handleOutsideClick = (event) => {
      // Check if the click is outside the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Close the modal
        setOpen(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Assuming 768px as the breakpoint for mobile
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fullText = `At Ztartvisa, a leading <b>visa consultant in Dubai</b>, we
  provide expert assistance for your visa application process. Our
  dedicated team ensures accurate and compliant applications for
  popular destinations such as Australia, the UK, Italy, Canada,
  Switzerland, France, Spain, Turkey, Japan, and the USA. We stay
  updated on the latest visa laws, ensuring swift and efficient
  processing to meet critical deadlines. With continuous support
  from consultation to submission, we guarantee a seamless
  experience. Trust Ztartvisa for excellent visa services in Dubai
  and let us guide you through your journey with confidence!`;

  const shortText = fullText.slice(0, 150) + "...";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const HighLights = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="">
        <div
          className={`flex gap-x-10 lg:hidden ${
            isOpen ? "bg-white" : "bg-white"
          } rounded-md md:gap-x-0  justify-between items-center  pl-0 p-0 cursor-pointer transition duration-300 ease-in-out `}
          onClick={toggleOpen}
        >
          <div className="font-PoppinsMedium text-sm flex gap-3 md:text-sm p-2 md:pl-5">
            <TiTick className="text-visaclr  text-sm bg-gray-200 rounded-2xl" />

            {title}
          </div>
          <div
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <button className="lg:hidden text-gray-500 hover:text-gray-700">
              <FaChevronDown />
            </button>
          </div>
        </div>
        <div
          className={`bg-white px-5 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="p-4 pl-0 text-sm font-PoppinsRegular">{description}</p>
        </div>
      </div>
    );
  };

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="">
        <div
          className={`flex gap-x-10  ${
            isOpen ? "bg-white" : "bg-white"
          } rounded-md md:gap-x-0  justify-between items-center  pl-0 p-4 cursor-pointer transition duration-300 ease-in-out `}
          onClick={toggleOpen}
        >
          <div className="font-PoppinsMedium text-sm md:text-base pl-5">
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
          className={`bg-white px-5 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="p-4 pl-0 text-sm font-PoppinsRegular">{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Best Visa Services In Dubai UAE, Visa agents In Dubai UAE</title>
        <meta
          name="description"
          content="Best visa services in Dubai UAE. Expert visa agents in Dubai. We simplify tourist and business visa service in Dubai UAE ensuring a smooth and Steady process."
        />
      </Helmet>
      <main className="w-11/12 md:w-11/12 xl:w-9/12 mx-auto h-full pt-5">
        {/* Banner */}
        <section className="px-2 md:px-0 w-full   rounded-xl   ">
          <div className="bg-[url(https://res.cloudinary.com/dqtrifv2l/image/upload/c_fill,w_auto,q_auto,f_auto/tinted_1_hgph8p.webp)]   h-[50vh] pt-10 md:h-4/6 md:py-24 items-center  flex flex-col  justify-center rounded-3xl bg-cover bg-center pb-5 text-white ">
            <div className="pt-8  lg:pt-10 text-center xs:text-[40px]  sm:text-[47px] md:text-5xl lg:text-7xl xl:tracking-wider space-y-4 font-PoppinsBold xl:font-PoppinsBold ">
              <h1 className="text-2xl leading-4 md:leading-8 md:text-5xl ">
                Get Ready To Travel
                <br />
                <span className="text-sm md:text-[25px] leading-8 font-PoppinsMedium md:font-PoppinsRegular    ">
                  with our visa services in Dubai
                </span>
              </h1>
            </div>
            <p className="text-center text-xs md:text-sm font-PoppinsLight  md:py-2 px-9 md:px-0 xl:px-40 ">
              <span className="text-nowrap">
                Tired of the visa application maze?{" "}
              </span>{" "}
              Ztartvisa is your one-stop solution for expert visa{" "}
              <br className=" hidden md:block " />
              services in Dubai. With our expert team, you can expect a smooth
              journey from start to finish.
            </p>
            <div className="w-full flex justify-center items-center pt-4">
              <button
                className=" text-sm px-2 text-nowrap md:w-fit md:text-base font-PoppinsMedium md:px-10 lg:px-5 py-2 lg:py-3 capitalize border border-visaclr rounded-full text-visaclr bg-white hover:bg-visaclr hover:text-white duration-200"
                type="submit"
                onClick={() => navigate("/contact")}
              >
                Get Your Visa Today
              </button>
            </div>
          </div>
          {/* ---FORM---- */}
          <form
            onSubmit={handleSubmit} // Add form submission handler
            ref={modalRef}
            className="w-[95%] mx-auto fixed left-0 right-0 top-16 lg:top-20  bg-white z-20  px-3 py-2 flex flex-col gap-y-5 xl:hidden"
          >
            <span
              className={` ${
                isSticky
                  ? "flex outline outline-1 outline-gray-300  text-sm items-center justify-center gap-x-3 py-4 rounded-xl font-PoppinsRegular tracking-wide transition-all duration-150"
                  : "hidden"
              }`}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <span className="flex items-center gap-2">
                  <p>Close</p>
                  <IoCloseSharp className="text-xl text-visaclr" />
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <p>Start application</p>
                  <IoSendSharp className="text-xl text-visaclr" />
                </span>
              )}
            </span>
            {/* pop */}
            <div
              className={`${
                open
                  ? "flex flex-col gap-3 transition-all duration-100 ease-in"
                  : "hidden"
              } `}
            >
              <div className="outline outline-1 outline-gray-300 overflow-hidden rounded-2xl">
                <div className="relative w-full">
                  <input
                    className="w-full focus:outline-none py-4 lg:py-2.5 px-4 pl-11 border-b-[1px] lg:border-b-0 lg:border-r-2"
                    type="text"
                    placeholder="Name"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange} // Bind change handler
                    required
                  />
                  <AiOutlineUser className="absolute top-[14px] left-3 text-2xl text-gray-700" />
                </div>
                <div className="relative w-full">
                  <input
                    className="w-full focus:outline-none py-4 lg:py-2.5 px-4 pl-[85px] border-b-[1px] lg:border-b-0 lg:border-r-2 [&::-webkit-inner-spin-button]:appearance-none"
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
                  <p className="absolute left-9 top-[14.5px] chfont font-medium">
                    +971
                  </p>
                  <HiOutlineDevicePhoneMobile className="absolute top-4 left-3 text-2xl text-gray-700" />
                </div>
                <div className="relative w-full">
                  <select
                    className="w-fit py-4 lg:py-2.5 pl-11 outline-none appearance-none"
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
                  <IoLocationOutline className="absolute top-[14px] left-3 text-2xl text-gray-700" />
                </div>
              </div>
              <button
                className="w-full md:w-fit text-base font-PoppinsMedium px-10 lg:px-20 py-4 lg:py-3 capitalize border border-visaclr rounded-full text-visaclr bg-white hover:bg-visaclr hover:text-white duration-200"
                type="submit"
              >
                Get started!
              </button>
            </div>
            {/* pop */}
          </form>
          {/* ---main FORM---- */}
          <form
            className={`${
              isSticky
                ? "opacity-100 mt-10"
                : "grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10"
            }  bg-white `}
            onSubmit={handleSubmit} // Add form submission handler
          >
            <div className="lg:col-span-5 flex flex-col md:flex-row   items-centeroutline outline-1 outline-gray-300 overflow-hidden  md:p-2  rounded-xl">
              <div className="relative w-full ">
                <input
                  className="w-full focus:outline-none py-4 lg:py-2.5 px-10 md:px-10 lg:px-9 border-b-[1px] md:border-b-0 md:border-r-2 "
                  type="text"
                  placeholder="Name"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange} // Bind change handler
                  required
                />
                <AiOutlineUser className="absolute left-4 md:left-2 lg:left-1 top-[18px] lg:top-2 text-lg lg:text-2xl text-gray-700" />
              </div>
              <div className="relative w-full">
                <input
                  className="w-full focus:outline-none  py-4 lg:py-2.5 pl-[5.5rem] md:pl-20 xl:pl-[4.5rem] border-b-[1px] md:border-b-0 md:border-r-2 [&::-webkit-inner-spin-button]:appearance-none"
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
                <p className="absolute left-9 md:left-8 xl:left-7 top-[14.5px] lg:top-[8px] 2xl:top-[8px] chfont font-medium">
                  +971
                </p>
                <HiOutlineDevicePhoneMobile className="absolute left-4 md:left-2 lg:left-1 top-[19px] lg:top-2 text-lg lg:text-2xl text-gray-700" />
              </div>
              <div className="relative  w-full">
                <select
                  className="w-full focus:outline-none py-4 lg:py-2.5 px-10 md:px-9 lg:px-10 appearance-none "
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
                <IoLocationOutline className="absolute left-4 md:left-2 lg:left-2 top-[18px] lg:top-2 text-lg lg:text-2xl text-gray-700 pointer-events-none" />
              </div>
              <button
                className="w-full  md:w-fit text-base font-PoppinsMedium px-5 text-nowrap py-2 md:py-4 lg:py-3 capitalize border border-visaclr rounded-full text-visaclr bg-white  hover:bg-visaclr hover:text-white duration-200"
                type="submit"
              >
                Get started!
              </button>
            </div>
          </form>
        </section>

        {/*  */}

        {/* carousal */}
        <section className="py-20 lg:py-24">
          <TravelCarousal />
        </section>

        <section className="py-8 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl lg:text-5xl font-PoppinsExtraBold text-center capitalize">
              Why Ztartvisa is Your
              <br className="hidden sm:block" />
              <span className="text-visaclr block sm:inline">
                {" "}
                Best Bet for On-Time Visas
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 pt-5 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  toggleBenefit={toggleBenefit}
                  benefit={benefit}
                  index={index}
                  isMobile={isMobile}
                />
              ))}
            </div>
            <div className="mt-10 sm:mt-12 text-center">
              <button
                onClick={() => navigate("/visa")}
                className="bg-visaclr text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-visaclr-dark inline-flex items-center"
              >
                Start Your Visa Process
                <FaCheckCircle className="ml-2" size={18} />
              </button>
            </div>
          </div>
          {expandedBenefit !== null && (
            <BenefitPopup
              benefit={benefits[expandedBenefit]}
              onClose={() => setExpandedBenefit(null)}
            />
          )}
        </section>

        {/* <Feedback /> */}

        <section className="flex flex-col gap-3 mt-14 ">
          <h3 className="text-xl lg:text-5xl font-PoppinsExtraBold text-center capitalize">
            Your journey with
            <br />{" "}
            <span className="text-visaclr">
              the best visa consultant in Dubai
            </span>
          </h3>
          {/* <img loading='lazy' className='rounded-2xl h-52 lg:h-[24rem] w-full object-cover mt-3' src={Grp4} alt="image" /> */}
          {/* // add mt-5 when add image */}
          <div className="mt-10 space-y-3">
            {highlights.map((highlight) => (
              <HighLights
                title={highlight.title}
                description={highlight.description}
              />
            ))}
            <div className="hidden  lg:grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                  <h4 className="text-base lg:text-lg font-PoppinsSemibold">
                    Professional Visa Services
                  </h4>
                </span>
                <p className="pl-6 text-sm lg:text-base">
                  With our expert tourist and business visa services in Dubai,
                  you can easily explore new destinations.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                  <h4 className="text-base lg:text-lg font-PoppinsSemibold">
                    Streamlined Process
                  </h4>
                </span>
                <p className="pl-6 text-sm lg:text-base">
                  We make the visa application process stress-free by offering
                  easy document preparation and quick submission.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3">
                  <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                  <h4 className="text-base lg:text-lg font-PoppinsSemibold">
                    Expert Guidance
                  </h4>
                </span>
                <p className="pl-6 text-sm lg:text-base">
                  Ztartvisa hndles your visa needs efficiently, ensuring smooth
                  and timely approvals for both travel and business trips.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col gap-10">
          <h1 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center">
            UAE's Favorite,
            <br className="hidden lg:block" /> Visa Community
          </h1>
          <img
            loading="lazy"
            className="rounded-2xl h-52 lg:h-[25rem] w-full object-cover"
            src={ztartoffice}
            alt="image"
          />
          <div className="bg-[#F2EFEA] px-10 lg:px-0 lg:py-10 grid grid-cols-1 lg:grid-cols-3 rounded-2xl">
            <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-gray-300 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Buddy}
                alt="logo"
                loading="lazy"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Your Visa Buddy
              </h3>
              <p className="text-sm lg:text-base">
                Specialized visa support you can count on.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-gray-300 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Savemoney}
                alt="logo"
                loading="lazy"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Save Your Money
              </h3>
              <p className="text-sm lg:text-base">
                Expert advice to avoid unnecessary expenses.
              </p>
            </div>
            <div className="flex flex-col gap-3 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Solutions}
                alt="logo"
                loading="lazy"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Get Visa Solutions
              </h3>
              <p className="text-sm lg:text-base">
                Strong government connections and deep understanding of global
                visa regulations.
              </p>
            </div>
          </div>
        </section> */}

        {/* <section className='flex flex-col gap-2 py-20 lg:py-32'>
          <h1 className='text-2xl lg:text-4xl font-PoppinsBold text-center lg:text-left'>Check-in to a better deal</h1>
          <p className='text-sm lg:text-base'>Access beautiful hotels across the world with our exclusive discounts</p>
          <BetterDeal/>
          <a className='mt-10 w-full lg:w-fit mx-auto text-center md:w-fit px-10 py-3.5 font-PoppinsMedium rounded-full border border-visaclr duration-200 bg-visaclr text-white hover:bg-white hover:text-visaclr' href="#">Explore more</a>
      </section> */}

        {/* <section className='flex flex-col gap-3 pb-20'>
          <h1 className='text-2xl lg:text-4xl font-PoppinsBold text-center'>Caring Guaranteed</h1>
          <p className='text-sm lg:text-base text-center'>With ztartvisa, travel with confidence, clarity, and care. Our triple guarantee covers every aspect of your trip:</p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className=' border border-gray-300 rounded-2xl p-5 flex flex-col justify-start gap-3'>
              <img className=' h-24 w-16 object-fill' src={diamondsvg} alt="svg" />
              <h4 className='text-lg font-PoppinsSemibold leading-none'>Book with confidence guarantee</h4>
              <p className='text-sm lg:text-base tracking-wider'>Choose your room, and rest assured it's yours – no surprises. All promised amenities provided, with quick fixes for any issues.</p>
              <Link className='underline capitalize font-PoppinsSemibold'>learn more</Link>
            </div>
            <div className=' border border-gray-300 rounded-2xl p-5 flex flex-col justify-start gap-3'>
              <img className=' h-24 w-16 object-fill' src={sheildsvg} alt="svg" />
              <h4 className='text-lg font-PoppinsSemibold leading-none'>Zero hidden fees guarantee</h4>
              <p className='text-sm lg:text-base tracking-wider'>Because we hate those pesky hidden fees too. Transparent pricing, honest details – that's how we roll. In the rare case any unexpected.</p>
              <Link className='underline capitalize font-PoppinsSemibold'>learn more</Link>
            </div>
            <div className=' border border-gray-300 rounded-2xl p-5 flex flex-col justify-start gap-3'>
              <img className=' h-24 w-16 object-fill' src={heartsvg} alt="svg" />
              <h4 className='text-lg font-PoppinsSemibold leading-none'>Traveler Care guarantee</h4>
              <p className='text-sm lg:text-base tracking-wider'>Our Traveler Care team, accessible 24/7 via email, call, or WhatsApp, offers dedicated support with real-time, thoughtful solutions.</p>
              <Link className='underline capitalize font-PoppinsSemibold'>learn more</Link>
            </div>
          </div>
      </section> */}

        <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden gap-0 pb-10 pt-20 md:pt-32">
          <div className="flex-1 md:rounded-l-3xl ">
            <img
              className="hidden lg:block rounded-xl w-full  object-contain h-full"
              loading="Visa assistance in dubai"
              src={ztartnews}
              alt="insta"
            />
          </div>
          <div className="flex-1 flex flex-col gap-5 bg-[#fefce8] p-5 md:rounded-r-3xl ">
            <h4 className="text-2xl lg:text-4xl text-center lg:text-left font-PoppinsExtraBold">
              Ztartvisa: The Smart Choice
            </h4>
            <img
              className="block lg:hidden rounded-xl w-full  object-cover h-full"
              loading="Visa assistance in dubai"
              src={ztartnews}
              alt="insta"
            />
            {isMobile ? (
              <>
                <p
                  className="text-sm md:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: isExpanded ? fullText : shortText,
                  }}
                />
                <button
                  onClick={toggleReadMore}
                  className="text-left text-xs font-semibold  focus:outline-none"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: fullText }} />
            )}
            <Link
              to="/about"
              className="w-full text-sm md:text-base text-center md:w-fit px-10 py-2 md:py-3 font-PoppinsMedium rounded-full border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section className="pb-10">
          <Testimonial />
        </section>

        <section className="flex flex-col lg:flex-row gap-10  lg:py-16">
          <div className="flex-1 flex items-center text-center lg:text-left lg:items-start flex-col justify-center gap-7">
            <h5 className="text-2xl lg:text-4xl font-PoppinsExtraBold capitalize">
              Current Visa Trends and Requirements.
            </h5>
            <img
              className="block lg:hidden rounded-xl w-full  object-cover h-full"
              loading="lazy"
              src={InsatProf}
              alt="Visa Consultant in Dubai"
            />
            <p className="text-sm lg:text-base text-justify">
              Visa expertise and your ideal holiday together! The most up to
              date information on tourist visa requirements for 2024 is provided
              by Ztartvisa, your reliable partner for{" "}
              <b>visa services in Dubai</b>. We can assist you whether your
              destination is the UK, USA, Japan, Spain, Turkey, Switzerland,
              France, Italy, Canada, or Australia. Our team of professionals
              will handle the documentation and regulations, making sure your
              trip is easy. Your ideal vacation is only a click away with
              Ztartvisa.
            </p>
            <a
              className="w-full text-sm md:text-base text-center md:w-fit px-10 py-2 md:py-3.5 font-PoppinsMedium rounded-full border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
              href="https://www.instagram.com/ztartvisa?igsh=aGN4anc0bW9obmh5"
              target="_blank"
            >
              Follow us on Instagram
            </a>
          </div>
          <div className="flex-1">
            <img
              className="hidden lg:block rounded-xl w-full  object-cover h-full"
              loading="lazy"
              src={InsatProf}
              alt="Visa Consultant in Dubai"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 pb-20 pt-20">
          <div className="h-full flex flex-col justify-center space-y-3">
            <h5 className="text-2xl lg:text-4xl font-PoppinsExtraBold capitalize text-center xl:text-left">
              Frequently asked questions?
            </h5>
            <p className="text-lg lg:text-lg text-visaclr font-PoppinsSemibold text-center xl:text-left">
              Got Questions? We’ve Got Answers!
            </p>

            <p className=" text-base lg:text-base text-center xl:text-left ">
              Here’s everything you need to know about our visa services in
              Dubai.
            </p>
          </div>
          <div className="md:col-span-2">
            {LandFAQ.map((dt, i) => (
              <FAQItem key={i} question={dt.question} answer={dt.answer} />
            ))}
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row  overflow-hidden pt-10 pb-20">
          <div className="rounded-b-2xl lg:rounded-b-none lg:rounded-l-3xl flex-1 bg-[#FEFCE8] flex flex-col justify-center p-5 md:p-10 gap-7">
            <p className="text-2xl lg:text-4xl capitalize font-PoppinsExtraBold">
              Stress-Free Visas Start Here,
              <br /> not your stress
            </p>
            <p className="text-sm lg:text-base">
              Let’s simplify your visa application. Fast approvals, fewer
              headaches!
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="w-full text-xs md:text-base text-center text-nowrap md:w-fit px-2 py-2 md:py-3.5 font-PoppinsMedium rounded-full bg-transparent border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
            >
              Get Your Visa Now, Fast & Easy!
            </button>
          </div>
          <div className="flex-1">
            <img
              className="w-full md:h-96 lg:h-full object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-tr-3xl lg:rounded-br-3xl"
              src={relaxImg2}
              alt="isa Agents In Dubai"
              loading="Visa Services In Dubai"
            />
          </div>
        </section>

        {/* Go to top */}

        <div className="w-fit mx-auto pb-5 md:pb-0">
          <button
            className="w-fit text-sm md:text-base font-PoppinsMedium px-10 lg:px-8 py-2.5 lg:py-3 flex items-center gap-3 border border-visaclr rounded-full text-visaclr hover:bg-visaclr hover:text-white duration-200"
            onClick={scrollToTop}
          >
            <FaArrowUp />
            <p>Back to top</p>
          </button>
        </div>
      </main>

      {/* <Demo/> */}
    </>
  );
}

export default Homepage;

const BenefitPopup = ({ benefit, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50   transition-opacity duration-300 ease-in-out">
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="text-4xl mb-4 flex justify-between">
        {benefit.icon}

        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes size={24} />
        </button>
      </div>
      <h3 className="text-base lg:text-lg font-PoppinsSemibold">
        {benefit.title}
      </h3>
      <p className="tpl-6 text-sm lg:text-base pt-3">{benefit.description}</p>
      <div className="flex items-center text-indigo-600"></div>
    </div>
  </div>
  //   <div className="bg-white rounded-lg p-6 w-full max-w-md">
  //     <div className="flex justify-between items-center mb-4">
  //       <h3 className="text-sm font-PoppinsSemibold">{benefit.title}</h3>
  //       <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
  //         <FaTimes size={24} />
  //       </button>
  //     </div>
  //     <div className="text-2xl mb-4">{benefit.icon}</div>
  //     <p className="text-xs font-PoppinsRegular">{benefit.description}</p>
  //   </div>
);

const BenefitCard = ({ toggleBenefit, benefit, index, isMobile }) => (
  <div
    className="bg-white rounded-lg  flex flex-col justify-center space-y-2 shadow-md hover:shadow-lg p-4 sm:p-8 transition-all duration-300"
    onClick={() => isMobile && toggleBenefit(index)}
  >
    <div className="flex  items-center justify-between md:hover:cursor-pointer ">
      <div className="flex flex-col  justify-startmd:items-center">
        <div className="text-2xl sm:text-3xl mr-3">{benefit.icon}</div>
        <h3 className="text-xs lg:text-lg font-PoppinsSemibold">
          {benefit.title}
        </h3>
      </div>
    </div>
    <button className="md:hidden text-gray-500 hover:text-gray-700">
      <FaChevronDown />
    </button>
    <p className="hidden md:block text-sm lg:text-sm pt-3">
      {benefit.description}
    </p>
  </div>
);
