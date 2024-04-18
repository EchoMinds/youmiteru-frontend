import "./Home.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "@/components/Footer/Footer";
import BgBanner from "../../components/BgBanner/BgBanner";
import SliderSeasons from "../../components/SliderSeasons/SliderSeasons";
import { useDashBoardQuery } from "@/hooks/useDashBoardQuery";
import { HandleError } from "@/components/HandleError/HandleError";
import { Loader } from "@/components/Loader";

function Home() {
    const DashBoardQuery = useDashBoardQuery();

    const banners = DashBoardQuery.data?.banners;
    const popular_seasons = DashBoardQuery.data?.popularSeasons;
    const announced_seasons = DashBoardQuery.data?.announcedSeasons;
    const released_seasons = DashBoardQuery.data?.recentReleasedSeasons;

    return (
        <div className="home">
            <NavigationBar />
            {DashBoardQuery.isError ? (
                <HandleError error={DashBoardQuery.error} />
            ) : DashBoardQuery.isLoading ? (
                <Loader />
            ) : (
                <>
                    <BgBanner bannerData={banners || []} />
                    <SliderSeasons
                        title="Popular Seasons"
                        sliderData={popular_seasons || []}
                    />
                    <SliderSeasons
                        title="Announced Seasons"
                        sliderData={announced_seasons || []}
                    />
                    <SliderSeasons
                        title="Released Seasons"
                        sliderData={released_seasons || []}
                    />
                </>
            )}
            <Footer />
        </div>
    );
}

export default Home;
