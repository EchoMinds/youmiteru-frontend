import { useDashBoardQuery } from "../../hooks/useDashBoardQuery";
import { Banner } from "../../types/Banner";
import SliderBanner from "../SliderBanner/SliderBanner";
import "./BgBanner.scss";

function BgBanner(): JSX.Element {
    const DashBoardQuery = useDashBoardQuery();
    const banners = DashBoardQuery.data?.banners;

    return (
        <div className="bg-banner">
            <SliderBanner bannerData={banners} />
        </div>
    );
}

export default BgBanner;
