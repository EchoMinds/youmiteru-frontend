import "./WatchAnime.scss";
import { useSearchParams } from "react-router-dom";
import { useSeasonDetailsQuery } from "../../hooks/useSeasonDetailsQuery";
import SeasonDetails from "../../components/SeasonDetails";
import { Footer } from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

function WatchAnime () {
    const [searchParams] = useSearchParams();  
    const seasonId = searchParams.get("id");
    const SeasonDetailsQuery = useSeasonDetailsQuery(Number(seasonId));

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
                season_id={SeasonDetailsQuery.data?.seasonId}
                season_image_url={SeasonDetailsQuery.data?.imageUrl}
                season_name={SeasonDetailsQuery.data?.seasonName}
                bg_image_url={SeasonDetailsQuery.data?.bg_image_url}
                rating={SeasonDetailsQuery.data?.rating}
                release_date={SeasonDetailsQuery.data?.releaseDate}
                short_description={SeasonDetailsQuery.data?.reducedDescription}
                age_restriction={SeasonDetailsQuery.data?.ageRestriction}
                year_season={SeasonDetailsQuery.data?.yearSeason}
                genres={SeasonDetailsQuery.data?.genres}
            />
            <Footer />
        </>
    );
}

export default WatchAnime;
