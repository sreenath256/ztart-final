import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaLinkedin, FaYoutube } from "react-icons/fa";
import { VisaLogo, HotelLogo, Trustpilot } from "../../assets";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { RiChatSmileFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { allvisaData } from "../../components/Constant";
import { FaThreads } from "react-icons/fa6";
import axios from "axios";
import { vars } from "../../constents/Api";

function Footer() {
  const location = useLocation();
  const hasFetched = useRef(false);
  const [visas, setVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVisaData = async () => {
      try {
        const response = await axios.get(
          `${vars.api_url}/api/1.0/user/testimonial/testimonials`
        );

        console.log("response...", response);

        const data = response?.data?.data;

        setVisas(data);
      } catch (error) {
        console.error("Error fetching visa data:", error);
      }
    };

    if (!hasFetched.current) {
      fetchVisaData();
      hasFetched.current = true; // Mark as fetched
    }
  }, []); // Runs once when the component mounts

  // List of specific page URLs where the div should be shown
  const allowedPages = [
    "/",
    "/about",
    "/blogs",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/visa-consultant-in-dubai",
  ]; // Add your desired page URLs

  // Check if the current pathname is included in the allowedPages array
  const shouldShowDiv = allowedPages.includes(location.pathname);

  return (
    <main className="">
      <footer className=" w-11/12 lg:w-9/12 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  lg:place-content-start text-left gap-10  lg:gap-0">
        {/* whatsapp */}
        {shouldShowDiv && (
          <div className="fixed right-5 z-50 bottom-5 md:right-1 md:bottom-5 rounded-full">
            <a
              href="https://api.whatsapp.com/send?phone=971544404197"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="bg-visaclr shadow-sm shadow-zinc-600 rounded-full h-[48px] w-[48px] cursor-pointer hover:scale-105 duration-200 grid place-items-center"
            >
              <IoLogoWhatsapp
                className="text-white text-[27px]"
                aria-hidden="true"
              />
              {/* scale-x-[-1] inline-block */}
            </a>
          </div>
        )}
        <div className="col-span-2 md:col-span-1">
          <Link to="/">
            <img
              className="h-7 lg:h-9 object-contain"
              src={VisaLogo}
              alt="logo"
              width={100} // Replace with the actual width
              height={50} // Replace with the actual height
            />
          </Link>
          <ul className="text-visaclr flex gap-3 mt-5 ml-2 text-2xl">
            <li className="hover:-translate-y-1 duration-200">
              <a
                href="https://www.instagram.com/ztartvisa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="inline-flex items-center justify-center"
              >
                <FaInstagram aria-hidden="true" role="img" />
              </a>
            </li>
            <li className="hover:-translate-y-1 duration-200">
              <a
                href="http://www.youtube.com/@ztartvisa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe us on Youtube"
              >
                <FaYoutube aria-hidden="true" role="img" />
              </a>
            </li>
            <li className="hover:-translate-y-1 duration-200">
              <a
                href="https://www.linkedin.com/company/ztartvisa/?originalSubdomain=ae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Linkedin"
              >
                <FaLinkedin aria-hidden="true" role="img" />
              </a>
            </li>
            <li className="hover:-translate-y-1 duration-200">
              <a
                href="https://x.com/ztartvisa/status/1772161296835936545"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Threads"
              >
                <FaThreads aria-hidden="true" role="img" />
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-base lg:text-lg font-PoppinsSemibold">
            About Us
          </h2>
          <ul className="text-base pt-5 flex flex-col gap-2">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base lg:text-lg font-PoppinsSemibold">
            Contact Us
          </h2>
          <ul className="text-base pt-5 flex flex-col gap-2">
            <li>
              <a href="mailto:hello@ztartvisa.com">hello@ztartvisa.com</a>
            </li>
            <li>
              <a href="tel:04 528 2118">04 528 2118</a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h2 className="text-base lg:text-lg font-PoppinsSemibold">Visas</h2>
          <ul className="text-base pt-5 grid grid-cols-2 gap-2 capitalize">
            {visas?.slice(0, 10).reverse().map((visa, i) => (
              <li
                className="cursor-pointer"
                key={i}
                onClick={() => {
                  navigate(`/visa/${visa.slug}`);
                }}
              >
                {visa?.country}
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="pl-4 md:pl-0 md:text-center pb-5 leading-relaxed">
        <p className="text-[9px] md:text-[11px]">
          Copyright © 2024 Ztartvisa Documents Clearing Services. All rights
          reserved.
        </p>
        <p className="text-[9px] md:text-[11px]">
          Level1, Wafi residence - Oud Metha Rd - Umm Hurair 2 - Dubai, UAE
        </p>
      </div>
      {/* <a href='https://dostudio.co.in' target='_blank' className='hover:underline text-center grid place-items-center py-2 xl:-mt-5 text-xs w-full'>Powered by Do studio</a> */}
    </main>
  );
}

export default Footer;
