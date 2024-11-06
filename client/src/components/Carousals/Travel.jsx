import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { allvisaData } from "../Constant";
import axios from "axios";
import { vars } from "../../constents/Api";
import Loader from "../Loading";

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

function TravelCarousal() {
  const location = useLocation();

  // Define the path for the landing page
  const landingPagePath = "/visa-consultant-in-dubai";
  const navigate = useNavigate();
  const [visaData, setVisaData] = useState([]); // State for visa data
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const lastSlideIndex = allvisaData.length - 3;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: visaData
      ? visaData.length >= 3
        ? 3
        : 2 && visaData.length >= 2
        ? 2
        : 1
      : 3,
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
          swipe: true, // Disable swiping
          draggable: true, // Disable dragging
          slidesToShow: 1.05,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "20px",
          arrows: false,
        },
      },
    ],
  };
  let sliders;
  useEffect(() => {
    const fetchVisaData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${vars.api_url}/api/1.0/user/testimonial/testimonials`
        ); // Replace with your API endpoint

        setVisaData(response.data?.data); // Assuming the response data is an array
      } catch (error) {
        console.error("Error fetching visa data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchVisaData();
  }, []);
  return (
    <>
      <h2 className="pb-3 text-2xl lg:text-5xl font-PoppinsExtraBold text-center px-3 md:px-0">
        Popular Visas from UAE
      </h2>
      {location.pathname === landingPagePath ? (
        <p className="pb-10 text-base lg:text-lg  text-center px-3 md:px-0">
          Explore the top visa options from Dubai.
        </p>
      ) : (
        <p className="pb-10 text-base lg:text-lg  text-center px-3 md:px-0">
          Your First Choice for the Most Requested Visas
        </p>
      )}

      {loading ? (
        <Loader />
      ) : (
        <Slider
          ref={(c) => (sliders = c)}
          {...settings}
          className="travelaCarousal"
        >
          {visaData
            ?.slice()
            .reverse()
            .map((data) => {
              return (
                <div
                  className={`bg-[#DCE1C8] rounded-xl overflow-hidden`}
                  key={data._id}
                >
                  <img
                    onClick={() => navigate(`/visa/${data.slug}`)}
                    loading="lazy" // Changed to lazy for better performance
                    className="w-full h-48 sm:h-52 md:h-56 object-left-bottom object-cover cursor-pointer"
                    src={data?.imageURL}
                    alt={data?.title}
                    width="800" // Set an explicit width based on the image's expected display size
                    height="450" // Set an explicit height to maintain aspect ratio
                    srcSet={`
                  ${data?.imageURL}?w=400 400w,
                  ${data?.imageURL}?w=800 800w,
                  ${data?.imageURL}?w=1200 1200w
                  `} // Use srcSet for responsive images
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </div>
              );
            })}
        </Slider>
      )}
      <div className="w-full md:w-fit  mx-auto mt-10">
        <Link to="/visa">
          <button className="w-full md:w-fit text-sm md:text-sm font-PoppinsMedium px-10  lg:px-20 py-2 md:py-4 lg:py-3 capitalize border border-visaclr rounded-full text-visaclr bg-white hover:bg-visaclr hover:text-white duration-200">
            <p>explore more</p>
          </button>
        </Link>
      </div>
    </>
  );
}

export default TravelCarousal;
