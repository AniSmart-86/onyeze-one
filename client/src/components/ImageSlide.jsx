import React, { useEffect, useState } from "react";
import img1 from "../assets/El rehab extention.jpg";
import img2 from "../assets/img1 (18).jpg";
import img3 from "../assets/img1 (10).jpg";
import img4 from "../assets/img1 (13).jpg";
import img5 from "../assets/img1 (15).jpg";
import img6 from "../assets/img1 (22).jpg";
import "./slide.css";

const images = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
  { id: 4, url: img4 },
  { id: 5, url: img5 },
  { id: 6, url: img6 },
];

const ImageSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); // 3 seconds

    setIntervalId(interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="content">
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
      <span className="span4"></span>
        <div className="slideshow-container">
      <img src={images[currentIndex].url} alt={`Image ${currentIndex + 1}`} />
      <button className="" onClick={handlePreviousClick}>
        &lt;
      </button>
      <button className="" onClick={handleNextClick}>
        &gt;
      </button>
        </div>
    </div>
  );
};

export default ImageSlide;
