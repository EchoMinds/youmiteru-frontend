import "./SliderBanner.scss";
import Slider from "react-slick";
import { useState } from "react";
import NextArrow from "../SliderButtons/NextArrow";
import PrevArrow from "../SliderButtons/PrevArrow";
import { Banner } from "../../types/Banner";

interface SliderBannerProps {
    bannerData: Banner[];
}

interface ResponsiveSliderSettings {
    focusOnSelect: boolean,
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

function SliderBanner({ bannerData }: SliderBannerProps): JSX.Element {
    const [slideIndex, setSlideIndex] = useState(0);
    const ResponsiveSliderSettings: ResponsiveSliderSettings = {
        focusOnSelect: true,
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
        beforeChange: (_, next) => setSlideIndex(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: ResponsiveSliderSettings
            },
        ]
    };
    
    return (
        <div className="slider-banner">
            <Slider {...settings}>
                {
                    bannerData.map((img, index) => (
                        <div className={index === slideIndex ? "slider-banner__slide slider-banner__slide-active" : "slider-banner__slide"} key={index}>
                            <img src={img.season_image_url} alt="slider picture" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default SliderBanner;
