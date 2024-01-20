import { useState } from "react";
import { useDashBoardQuery } from "../../hooks/useDashBoardQuery";
import SliderBanner from "../SliderBanner/SliderBanner";
import "./BgBanner.scss";
import WatchButton from "../WatchButton/WatchButton";

function BgBanner(): JSX.Element {
    const DashBoardQuery = useDashBoardQuery();
    const banners = DashBoardQuery.data?.banners;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentSlideIndex(index);
    };

    const currentBanner = banners?.[currentSlideIndex];

    const bgBannerStyles = {
        backgroundImage: `url(${currentBanner?.season_image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };


    return (
        <div className="bg-banner" style={bgBannerStyles}>
            <WatchButton />
            {currentBanner && (
                <SliderBanner bannerData={banners} onSlideChange={handleSlideChange} />
            )}
        </div>
    );
}

export default BgBanner;
