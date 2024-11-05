import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaThreads,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_0jqfk9j";
    const templateId = "template_a16kk5l";
    const publicKey = "aR9TICluCGlXT7D0d";

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_mobile: phone,
      user_msg: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Message sent successfully", response);
        setName("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Error sending email", error);
      });
  };
  return (
    <>
    <Helmet>
        <title>Contact us for best visa service | Ztartvisa Dubai, UAE
        </title>
        <link
          rel="canonical"
          href={`https://ztartvisa.com/contact`}
        />
        <meta name="description" content="Need help with your Dubai visa process? Ztartvisa offers expert guidance and support. Contact us today for a seamless visa experience.
" />
      </Helmet>
      <div className="w-11/12 md:w-11/12 xl:w-9/12 mx-auto h-full ">
        <div className="my-10 rounded-3xl overflow-hidden bg-[#f6f6f6] border shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 rounded-3xl overflow-hidden">
            <div className="md:col-span-2 flex flex-col justify-center gap-10 rounded-3xl overflow-hidden bg-visaclr text-white p-6 py-10 xl:py-20">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl 2xl:text-6xl font-PoppinsSemibold">
                  Contact Us
                </h1>
                <p>Any question or remarks? Just write us a message!</p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex gap-5">
                  <FiPhoneCall className="text-xl" />
                  <a href="tel:045282118">04 528 2118</a>
                </span>
                <span className="flex gap-5">
                  <MdOutlineMail className="text-xl" />
                  <a href="mailto:hello@ztartvisa.com">hello@ztartvisa.com</a>
                </span>
                <span className="flex gap-5">
                  <FaLocationDot className="text-2xl" />
                  <p>
                    Level1, Wafi residence - Oud Metha Rd - Umm Hurair 2 -
                    Dubai, UAE
                  </p>
                </span>
              </div>
            </div>
            {/*  */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-3 p-10 py-10 xl:py-20 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-PoppinsMedium text-gray-500">
                  Name
                </label>
                <input
                  className="bg-transparent outline-none border-b-2 border-gray-300"
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-PoppinsMedium text-gray-500">
                  Phone
                </label>
                <input
                  className="bg-transparent outline-none border-b-2 border-gray-300 [&::-webkit-inner-spin-button]:appearance-none"
                  inputMode="numeric"
                  type="number"
                  name="user_mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-PoppinsMedium text-gray-500">
                  Message
                </label>
                <textarea
                  className="bg-transparent outline-none border-b-2 border-gray-300"
                  rows={3}
                  name="user_msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className="w-40 h-11 bg-visaclr rounded-full text-white capitalize hover:bg-visaclrhvr"
                  type="submit"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/*  */}

        <div className="h-40 md:h-52 xl:h-96 bg-cta-bg bg-cover rounded-3xl relative overflow-hidden flex justify-center items-center text-white">
          <div className="bg-[#0000009d] absolute top-0 left-0 w-full h-full"></div>
          <div className="relative">
            <h1 className="text-3xl xl:text-7xl font-PoppinsExtraBold">
              Visa on Time, <br></br>Guaranteed
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
