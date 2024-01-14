import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { allAnime } from "../../constants/data";
import "./SectionSeasons.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${className} ${isHovered ? "show" : "hide"}`}
      style={{
        ...style,
        right: "30px",
        zIndex: 1,
        opacity: isHovered ? "1" : "0",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${className} ${isHovered ? "show" : "hide"}`}
      style={{
        ...style,
        opacity: isHovered ? "1" : "0",
        left: "5px",
        zIndex: 1,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SectionSeasons() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="card">
      <Slider {...settings}>
        {allAnime.map((item, index) => (
          <div
            key={index}
            className="cart"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card-top">
              <img src={item.season_image_url} alt={item.season_name} />
              <h1>{item.season_name}</h1>
            </div>
            <div
              className="card-description"
              style={{ opacity: hoveredIndex === index ? 1 : 0 }}
            >
              {item.season_description}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SectionSeasons;
