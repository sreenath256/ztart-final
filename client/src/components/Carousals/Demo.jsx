import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
  { id: 4, content: 'Slide 4' },
  { id: 5, content: 'Slide 5' },
  { id: 6, content: 'Slide 6' },
  // Add more slides as needed
];

const YourCustomPrevArrowComponent = ({ onClick, disabled }) => (
  <div onClick={onClick} className={`${disabled ? 'hidden' : 'arrow1 arrow-left1'}`}>
    {/* Your custom "previous" arrow content goes here */}
    Previous
  </div>
);

const YourCustomNextArrowComponent = ({ onClick, disabled }) => (
  <div onClick={onClick} className={`${disabled ? 'hidden' : 'arrow1 arrow-right1'}`}>
    {/* Your custom "next" arrow content goes here */}
    Next
  </div>
);

const YourCarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // No need to remove duplicates as the slides array is already unique

  const lastSlideIndex = slides.length - 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 slides at a time
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    prevArrow: <YourCustomPrevArrowComponent disabled={currentSlide === 0} />,
    nextArrow: <YourCustomNextArrowComponent disabled={currentSlide === lastSlideIndex} />,
  };

  const goToNext = () => {
    setCurrentSlide(currentSlide + 1);
    slider.slickNext();
  };

  const goToPrev = () => {
    setCurrentSlide(currentSlide - 1);
    slider.slickPrev();
  };

  let slider;

  return (
    <div>
      <Slider ref={(c) => (slider = c)} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className='h-20 bg-green-200 w-full'>
            {slide.content}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YourCarouselComponent;
