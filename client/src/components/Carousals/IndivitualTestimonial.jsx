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
    <article className="bg-[#dce1c8] p-5 rounded-xl" role="article">
      {/* Decorative icon hidden from screen readers */}
      <ImQuotesLeft
        className="text-3xl text-[#a5a592]"
        aria-hidden="true"
        role="presentation"
      />

      <div className="flex flex-col min-h-[12rem] sm:min-h-[10rem] md:min-h-[13rem] lg:min-h-[25rem] justify-between">
        {isMobile ? (
          <div>
            <div
              className="text-xs md:text-lg"
              aria-label={`Testimonial from ${data.name}`}
            >
              <p
                className="mb-2"
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
                className="text-left text-xs font-PoppinsRegular focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-visaclr"
                aria-expanded={isExpanded}
                aria-controls="testimonial-content"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ) : (
          <div className="" aria-label={`Testimonial from ${data.name}`}>
            <p dangerouslySetInnerHTML={{ __html: data.testi }} />
          </div>
        )}

        <footer className="text-xs md:text-sm capitalize pt-5 font-PoppinsSemibold">
          <p className="">
            <span className="sr-only">Testimonial by </span>
            {data.name}
          </p>
          <p className="font-PoppinsRegular text-xs md:text-sm uppercase">
            <span className="sr-only">From </span>
            {data.place}
          </p>
        </footer>
      </div>
    </article>
  );
};

export default IndivitualTestimonial;
