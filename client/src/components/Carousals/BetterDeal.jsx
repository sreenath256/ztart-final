import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";
import {BetterDealCarousalData} from '../Constant'
import { IoMdStar } from "react-icons/io";

function SampleNextArrow({ onClick }) {
	return (
		<div className="arrow1 arrow-right1" onClick={onClick}>
			<FaArrowRight/>
		</div>
	);
}

function SamplePrevArrow({ onClick }) {
	return (
        <div className="arrow1 arrow-left1" onClick={onClick}>
            <FaArrowLeft/>
        </div>
        );
}

function BetterDeal() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        loop:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
    <Slider {...settings} className="betterDealCarousal mt-5">
        {BetterDealCarousalData?.map((data,i)=>{
            return(
                <div className="overflow-hidden" key={i}>
                    <div className="flex flex-col gap-2">
                    <img className="w-96 h-64 rounded-2xl" src={data.Img} alt="image" />
                    <span className="flex items-center gap-0 text-lg text-yellow-400">
                        <IoMdStar/>
                        <IoMdStar/>
                        <IoMdStar/>
                        <IoMdStar/>
                        <IoMdStar/>
                    </span>
                    <div className="flex flex-col gap-1">
                        <p className="text-base lg:text-lg font-PoppinsSemibold">{data.title}</p>
                        <p className="text-sm lg:text-base">{data.qots}</p>
                        <p className="text-sm lg:text-base">{data.place}</p>
                    </div>
                    </div>
                </div>
            )
        })}
    </Slider>
   </>
  )
}

export default BetterDeal