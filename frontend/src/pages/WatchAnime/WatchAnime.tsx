import "./WatchAnime.scss";
import { useSearchParams } from "react-router-dom";
import { useSeasonDetailsQuery } from "../../hooks/useSeasonDetailsQuery";
import SeasonDetails from "../../components/SeasonDetails";
import { Footer } from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import RateSeason from "@/components/RateSeason";
import AnimeDetailsTabs from "@/components/AnimeDetailsTabs/AnimeDetailsTabs";

function WatchAnime() {
    const [searchParams] = useSearchParams();
    const seasonId = searchParams.get("id");
    const SeasonDetailsQuery = useSeasonDetailsQuery(Number(seasonId));

    const seasonData = SeasonDetailsQuery.data;

    if (SeasonDetailsQuery.isLoading) {
        <h1> Loading ....</h1>;
    }

    if (SeasonDetailsQuery.isError) {
        <h1> Error ....</h1>;
    }

    return (
        <main>
            <NavigationBar />
            <SeasonDetails
                season_id={seasonData?.seasonId}
                season_image_url={seasonData?.imageUrl}
                season_name={seasonData?.seasonName}
                bg_image_url={seasonData?.animeBannerUrl || "https://cdn.wallpapersafari.com/75/35/c5bYw1.png"}
                rating={seasonData?.rating}
                release_date={seasonData?.releaseDate}
                short_description={seasonData?.reducedDescription}
                age_restriction={seasonData?.ageRestriction}
                year_season={seasonData?.yearSeason}
                genres={seasonData?.genres}
            />

            <div className="pl-5 pt-3">
                <RateSeason />
                <AnimeDetailsTabs
                    description={seasonData?.description}
                    relatedSeasons={seasonData?.relatedSeasons}
                />
            </div>
            <Footer />
        </main>
    );
}

export default WatchAnime;
