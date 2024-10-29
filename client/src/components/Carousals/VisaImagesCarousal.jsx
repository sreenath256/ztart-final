import {useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";
import {VisaCarousalData} from '../Constant'

const YourCustomPrevArrowComponent = ({ onClick, disabled }) => (
  <div onClick={onClick} className={`${disabled ? 'hidden' : 'arrow1 arrow-left1 shadow-2xl shadow-black'}`}>
    {/* Your custom "previous" arrow content goes here */}
    <FaArrowLeft/>
  </div>
);

const YourCustomNextArrowComponent = ({ onClick, disabled }) => (
  <div onClick={onClick} className={` ${disabled ? 'hidden' : 'arrow1 arrow-right1 shadow-2xl shadow-black'}`}>
    {/* Your custom "next" arrow content goes here */}
    <FaArrowRight/>
  </div>
);

function VisaImagesCarousal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastSlideIndex, setLastSlideIndex] = useState(VisaCarousalData.length - 1);
    var settings = {
        infinite: true,
        speed: 1000,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        swipe: false, // Disable swiping
        draggable: false, // Disable dragging
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        prevArrow: <YourCustomPrevArrowComponent disabled={currentSlide === 0} />,
        nextArrow: <YourCustomNextArrowComponent disabled={currentSlide === lastSlideIndex} />, // Change to your last slide index
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
  
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              swipe: true, // Disable swiping
              draggable: true, // Disable dragging
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              swipe: true, // Disable swiping
              draggable: true, // Disable dragging
              arrows:false,
              autoplay:true

            }
          }
        ]
        
      };
  return (
    <>
     <Slider {...settings} className="imagesCarousal mt-5">
        {VisaCarousalData?.map((data,i)=>{
            return(
                <div key={i}>
                    <img  loading='lazy' className={`h-48 md:h-72 lg:h-full w-full object-cover object-${data.fit}  rounded-[1rem] lg:rounded-[3rem]`} src={data.Imgs} alt="Visa process in dubai" />
                </div>
            )
        })}
     </Slider>
    </>
  )
}

export default VisaImagesCarousal