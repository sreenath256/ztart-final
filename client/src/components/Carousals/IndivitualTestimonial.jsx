import React, { useEffect, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";

const IndivitualTestimonial = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Assuming 768px as the breakpoint for mobile
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#dce1c8] p-5 rounded-xl ">
      <ImQuotesLeft className="text-3xl text-[#a5a592]" />
      <div className="flex flex-col  min-h-[12rem] sm:min-h-[10rem] md:min-h-[13rem]  lg:min-h-[25rem] justify-between">
        {isMobile ? (
          <div>
            <p
              className={`text-xs md:text-lg }`}
              dangerouslySetInnerHTML={{
                __html: isExpanded
                  ? data.testi
                  : data.testi.length > 100
                  ? data.testi.slice(0, 120) + "..."
                  : data.testi,
              }}
            />
            <button
              onClick={toggleReadMore}
              className="text-left text-xs font-PoppinsRegular  focus:outline-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        ) : (
          <p className="" dangerouslySetInnerHTML={{ __html: data.testi }} />
        )}
        {/* <p className="text-xs md:text-base py-5 font-PoppinsSemibold">
                  {data.testi}
                </p> */}
        <div className="text-xs md:text-sm capitalize pt-5 font-PoppinsSemibold">
          <p className="">{data.name}</p>
          <p className="font-PoppinsRegular text-xs md:text-sm uppercase">
            {data.place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndivitualTestimonial;
