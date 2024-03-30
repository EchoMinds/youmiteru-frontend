import "./WatchAnime.scss";
import { useSearchParams } from "react-router-dom";
import { useSeasonDetailsQuery } from "../../hooks/useSeasonDetailsQuery";
import SeasonDetails from "../../components/SeasonDetails";
import { Footer } from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
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
        <>
            <NavigationBar />
            <SeasonDetails
                season_id={seasonData?.seasonId}
                season_image_url={seasonData?.imageUrl}
                season_name={seasonData?.seasonName}
                bg_image_url={seasonData?.bg_image_url}
                rating={seasonData?.rating}
                release_date={seasonData?.releaseDate}
                short_description={seasonData?.reducedDescription}
                age_restriction={seasonData?.ageRestriction}
                year_season={seasonData?.yearSeason}
                genres={seasonData?.genres}
            />

            <AnimeDetailsTabs description={seasonData?.description} relatedSeasons={seasonData?.relatedSeasons}/>
            <Footer />
        </>
    );
}

export default WatchAnime;
