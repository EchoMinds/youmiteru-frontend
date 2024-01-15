import "./SliderBanner.scss";
import Slider from "react-slick";
import { useState } from "react";
import NextArrow from "../SliderButtons/NextArrow";
import PrevArrow from "../SliderButtons/PrevArrow";


interface SliderBannerProps {
    bannerPhotos: string[];
}

interface ResponsiveSliderSettings {
    slidesToShow: number,
    slidesToScroll: number,
    nextArrow: JSX.Element,
    prevArrow: JSX.Element,
}

interface ResponsiveSettings {
    breakpoint: number;
    settings: ResponsiveSliderSettings;
}

interface SliderBannerSettings {
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
}

function EmptyArrow() {
    return (
        <div></div>
    );
}

function SliderBanner({ bannerPhotos }: SliderBannerProps): JSX.Element {

    const [slideIndex, setSlideIndex] = useState(0);
    const ResponsiveSliderSettings: ResponsiveSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <EmptyArrow />,
        prevArrow: <EmptyArrow />,
    };

    const settings: SliderBannerSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        beforeChange: (current, next) => setSlideIndex(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: ResponsiveSliderSettings
            }]
    };

    return (
        <div className="slider-banner">
            <Slider {...settings}>
                {
                    bannerPhotos.map((img, index) => (
                        <div className={index === slideIndex ? "slider-banner__slide slider-banner__slide-active" : "slider-banner__slide"} key={index}>
                            <img src={img} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default SliderBanner;
