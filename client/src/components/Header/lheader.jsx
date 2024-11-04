import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { VisaLogo, VisaLogoOnly } from "../../assets";
import { IoCall } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { IoIosCloseCircleOutline } from "react-icons/io";

function LandHeader() {
  const navigate = useNavigate("");
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isVisaOpen, setVisaOpen] = useState(false);
  isPopupOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const visatogglePopup = () => {
    setVisaOpen(!isVisaOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 360);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [[location.pathname]]);

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
      // window.location.reload();
      setPopupOpen(false);
      setVisaOpen(false);
      console.log("Submission Successful", data);
      // Here you could clear the form or give feedback to the user
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

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
      <nav className="px-5 md:px-6 p-4 sticky top-0 left-0 right-0 bg-white z-20 flex justify-between items-center border-b border-gray-100">
        <img
          onClick={() => navigate("/")}
          loading="lazy" // Lazy load this image
          className="cursor-pointer h-7 lg:h-9 w-40 object-fill hidden md:block"
          src={VisaLogo}
          alt="Logo"
        />
        <img
          onClick={() => navigate("/")}
          loading="lazy" // Lazy load this image
          className="cursor-pointer h-9 w-9 object-fill block md:hidden"
          src={VisaLogoOnly}
          alt="Logo"
        />

        <ul className="text-base font-PoppinsMedium hidden xl:flex items-center gap-5">
          <li>
            <Link
              className="hover:text-visaclr duration-200 "
              onClick={() => setPopupOpen(false)}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-visaclr duration-200"
              onClick={() => setPopupOpen(false)}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-visaclr duration-200"
              onClick={() => setPopupOpen(false)}
              to="/visa"
            >
              Visa
            </Link>
          </li>
          {/* <li>
            <Link className="hover:text-visaclr duration-200" onClick={()=> setPopupOpen(false)} to="/faq">FAQ</Link>
          </li> */}
          <li>
            <Link
              className="hover:text-visaclr duration-200"
              onClick={() => setPopupOpen(false)}
              to="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-visaclr duration-200"
              onClick={() => setPopupOpen(false)}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:045282118"
            target="_blank"
            className="bg-visaclr lg:bg-white hover:bg-visaclrhvr duration-200 hover:text-white  font-PoppinsMedium text-white text-sm lg:text-base lg:text-visaclr border border-visaclr px-2 py-2 md:px-7 rounded-full lg:py-2.5"
          >
            <span className="">Request a call</span>
            {/* <IoCall className="block md:hidden" /> */}
          </a>
          <button
            className="lg:hidden"
            onClick={togglePopup}
            aria-label="Open menu"
          >
            <RiMenuFill className="text-xl" />
          </button>
        </div>
      </nav>

      {/* popup */}
      <div
        className={`fixed  top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300 z-[999] ${
          isPopupOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white overflow-y-scroll h-full w-full transform transition-transform duration-200 ease-in ${
            isPopupOpen ? "scale-100" : "scale-0"
          }`}
        >
          {/* ================= */}
          <button
            className="absolute top-3 right-3"
            onClick={togglePopup}
            aria-label="Close popup"
          >
            <IoCloseOutline className="text-3xl" />
          </button>
          {/* popup-body */}
          <div className="">
            <div className="h-14 grid place-items-center  w-full border-b border-gray-300">
              <p className="text-center text-base font-semibold tracking-wide capitalize text-gray-800">
                Preferences
              </p>
            </div>
            <div className="p-4 pt-5 flex flex-col gap-7 h-full">
              <div className="w-full  bg-[#f2efe9] p-5 rounded-xl text-center flex flex-col gap-3">
                <h2 className="text-[1.7rem] font-PoppinsSemibold ">
                  Before applying,
                  <br /> know your cost
                </h2>
                <p className="text-base text-gray-700">
                  Simply reach our Visa expert to know the visa process and cost
                  — absolutely free!
                </p>
                <button
                  onClick={visatogglePopup}
                  className="bg-visaclr py-3 rounded-xl text-white font-PoppinsSemibold capitalize"
                >
                  get free visa consultation
                </button>
              </div>
              <div>
                <h2 className="text-lg font-PoppinsSemibold">
                  About ztartvisa
                </h2>
                <ul className="text-base pt-4 flex flex-col gap-2">
                  <li>
                    <Link onClick={() => setPopupOpen(false)} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setPopupOpen(false)} to="/visa">
                      Visa
                    </Link>
                  </li>

                  <li>
                    {/* <Link onClick={()=> setPopupOpen(false)} to="/faq">FAQ</Link> */}
                  </li>
                  <li>
                    <Link onClick={() => setPopupOpen(false)} to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setPopupOpen(false)} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setPopupOpen(false)}
                      to="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-PoppinsSemibold">Contact Us</h2>
                <ul className="text-base pt-4 flex flex-col gap-2">
                  <li>
                    <a href="mailto:hello@ztartvisa.com">hello@ztartvisa.com</a>
                  </li>
                  <li>
                    <a href="tel:04 528 2118">04 528 2118</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-PoppinsSemibold">Business Hours</h2>
                <p className="pt-3">Monday - Friday : 9AM - 6PM</p>
                <p>Saturday & Sunday Closed</p>
              </div>
              <div>
                <h2 className="text-lg font-PoppinsSemibold">Location</h2>
                <p className="pt-3">
                  Level1, Wafi residence - Oud Metha Rd
                  <br /> Umm Hurair 2 - Dubai, UAE
                </p>
              </div>
            </div>
          </div>
          {/* ================= */}
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
                  <label htmlFor="country-select" className="sr-only">
                    Select your location
                  </label>
                  <select
                    id="country-select"
                    aria-required="true"
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
}

export default LandHeader;
