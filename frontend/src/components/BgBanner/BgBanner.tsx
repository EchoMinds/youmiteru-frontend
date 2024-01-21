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
        <>
            {currentBanner && (
                <div className="bg-banner" style={bgBannerStyles}>
                    <div className="bg-banner__season-text">
                        <h1>{currentBanner?.season_name}</h1>
                        <p>{currentBanner?.season_description}</p>
                    </div>
                    <div className="bg-banner__watch-buttons">
                        <WatchButton isWatchNow={true} />
                        <WatchButton isWatchTrailer={true} />
                    </div>
                    <div className="bg-banner__slider">
                        <SliderBanner
                            bannerData={bannerData}
                            onSlideChange={handleSlideChange}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default BgBanner;
