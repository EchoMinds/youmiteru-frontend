import "./BgBanner.scss";
import { useState } from "react";
import WatchButton from "../WatchButton/WatchButton";
import SliderBanner from "../SliderBanner/SliderBanner";
import { Banner } from "../../types/Banner";

interface BgBannerProps {
    bannerData: Banner[];
}

function BgBanner({ bannerData }: BgBannerProps): JSX.Element {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
    };

    const currentBanner = bannerData?.[currentSlideIndex];

    const bgBannerStyles = {
        backgroundImage: `url(${currentBanner?.season_image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };


    return (
        <div className="bg-banner" style={bgBannerStyles}>
            <h1>{currentBanner?.season_name}</h1>
            <p>{currentBanner?.season_description}</p>
            <WatchButton />
            {currentBanner && (
                <SliderBanner
                    bannerData={bannerData}
                    onSlideChange={handleSlideChange}
                />
            )}
        </div>
    );
}

export default BgBanner;
