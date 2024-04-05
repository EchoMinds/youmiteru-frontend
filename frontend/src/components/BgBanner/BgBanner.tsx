import "./BgBanner.scss";
import { useState } from "react";
import WatchButton from "../WatchButton/WatchButton";
import SliderBanner from "../SliderBanner/SliderBanner";
import { Banner } from "../../types/Banner";

interface BgBannerProps {
    bannerData: Banner[] | [];
}

function BgBanner({ bannerData }: BgBannerProps): JSX.Element {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
    };

    const currentBanner = bannerData?.[currentSlideIndex];

    const bgBannerStyles = {
        backgroundImage: `url(${currentBanner?.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };

    return (
        <>
            {currentBanner && (
                <div className="bg-banner" style={bgBannerStyles}>

                    <div className="bg-banner__season-name">
                        <h1>{currentBanner?.seasonName}</h1>
                    </div>
                    <div className="bg-banner__season-description">
                        <p>{currentBanner?.description}</p>

                    </div>
                    <div className="bg-banner__watch-buttons">
                        <WatchButton
                            isWatchNow={true}
                            season_id={currentBanner.seasonId}
                        />
                        <WatchButton
                            isWatchTrailer={true}
                            season_id={currentBanner.seasonId}
                        />
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
