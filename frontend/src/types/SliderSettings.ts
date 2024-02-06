export interface ResponsiveSliderSettings {
    focusOnSelect: boolean;
    autoplay: boolean;
    autoplaySpeed: number;
    arrows: boolean;
}

interface ResponsiveSettings {
    breakpoint: number;
    settings: ResponsiveSliderSettings;
}

export interface SliderBannerSettings {
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
