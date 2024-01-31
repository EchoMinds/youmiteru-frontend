import { useState } from "react";
import Slider from "react-slick";
import "./SliderSeasons.scss";
import PrevArrow from "../SliderButtons/PrevArrow";
import NextArrow from "../SliderButtons/NextArrow";
import { Season } from "../../types/Season";
import SectionTitle from "../SectionTitle/SectionTitle";

interface SliderSeasonsProps {
    sliderData: Season[] | [];
    onSlideChange?: (index: number) => void;
    title: string;
}

interface ResponsiveSettings {
    breakpoint: number;
}

interface SliderSeasonsSettings {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    centerMode: boolean;
    centerPadding: string;
    beforeChange?: (current: number, next: number) => void;
    nextArrow?: JSX.Element;
    prevArrow?: JSX.Element;
    responsive?: ResponsiveSettings[];
    arrows: boolean;
}

function SliderSeasons({
    sliderData,
    onSlideChange,
    title,
}: SliderSeasonsProps) {
    const [slideIndex, setSlideIndex] = useState(0);

    const settings: SliderSeasonsSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        beforeChange: (_, next) => {
            setSlideIndex(next);
            if (onSlideChange) {
                onSlideChange(next);
            }
        },
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [],
    };

    return (
        <>
            <SectionTitle title={title} />
            <div className="slider-season">
                <Slider {...settings}>
                    {sliderData &&
                        sliderData.map((item, index) => (
                            <div key={index} className="slider-season__card">
                                <img
                                    src={item.season_image_url}
                                    alt={item.season_name}
                                />
                                <h3>{item.season_name}</h3>

                                <div className="slider-season__card__description">
                                    {item.season_description}
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </>
    );
}

export default SliderSeasons;
