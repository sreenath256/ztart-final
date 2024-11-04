import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { TestimonialData } from "../Constant";
import { useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdStar } from "react-icons/io";
import IndivitualTestimonial from "./IndivitualTestimonial";

const YourCustomPrevArrowComponent = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    className={`${
      disabled ? "hidden" : "arrow1 arrow-left1 shadow-2xl shadow-black "
    }`}
  >
    {/* Your custom "previous" arrow content goes here */}
    <FaArrowLeft />
  </div>
);

const YourCustomNextArrowComponent = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    className={` ${
      disabled ? "hidden" : "arrow1 arrow-right1 shadow-2xl shadow-black"
    }`}
  >
    {/* Your custom "next" arrow content goes here */}
    <FaArrowRight />
  </div>
);

function Testimonial() {
  const location = useLocation();

  // Define the path for the landing page
  const landingPagePath = "/visa-consultant-in-dubai";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastSlideIndex, setLastSlideIndex] = useState(
    TestimonialData.length - 3
  );
  var settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: false, // Disable swiping
    draggable: false, // Disable dragging
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    prevArrow: <YourCustomPrevArrowComponent disabled={currentSlide === 0} />,
    nextArrow: (
      <YourCustomNextArrowComponent
        disabled={currentSlide === lastSlideIndex}
      />
    ), // Change to your last slide index
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          swipe: true, // Disable swiping
          draggable: true, // Disable dragging
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          centerMode: true,
          centerPadding: "20px",
          slidesToScroll: 1,
          swipe: true, // Disable swiping
          draggable: true, // Disable dragging
          arrows: false,
        },
      },
    ],
  };
  let slider;
  return (
    <>
      {location.pathname === landingPagePath ? (
        <div className="pb-10 text-center space-y-2">
          <h3 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center px-3 md:px-0 mt-20 capitalize">
            Our applicants say it all
          </h3>
          <p className="lg:w-[80%] mx-auto">
            Hear directly from those who have experienced our visa services in
            dubai. Their testimonials highlight our commitment to excellence and
            the positive impact we've made in simplifying their visa processes.
          </p>
        </div>
      ) : (
        <>
          <h5 className="pb-10 text-xl lg:text-5xl font-PoppinsExtraBold text-center px-3 md:px-0 mt-20 capitalize">
            Thousands of Happy <br />
            <Typewriter
              words={["Travelers"]}
              cursor
              loop
              cursorColor="transparent"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </h5>
        </>
      )}

      <div className="flex flex-col items-center gap-2 pt-0 pb-5">
        <p className="text-center text-sm lg:text-base">
          Trusted by thousands with a perfect 5-star Google rating. Your journey
          is our priority!
        </p>
        <span className="flex items-center text-3xl text-yellow-400">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </span>
        {/* <img loading='lazy' className='h-10 w-36' src={Trustpilotgoogle} alt="image" />
          <p className='text-center text-base'>Based on 1,393+ reviews Trustpilot & Google</p> */}
        <span className="flex gap-5 items-center text-2xl text-yellow-400">
          <FcGoogle />
        </span>
      </div>

      <Slider
        ref={(c) => (slider = c)}
        {...settings}
        className="TestimonialCarousal"
      >
        {TestimonialData?.map((data, i) => {
          return <IndivitualTestimonial data={data} key={i} />;
        })}
      </Slider>
    </>
  );
}

export default Testimonial;
