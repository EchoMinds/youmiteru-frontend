import "./WatchAnime.scss";
import { useSearchParams } from "react-router-dom";
import SeasonDetails from "../../components/SeasonDetails/SeasonDetails";
import { useSeasonDetailsQuery } from "../../hooks/useSeasonDetailsQuery";


function WatchAnime () {
    const [searchParams] = useSearchParams();  
    const seasonId = searchParams.get("id");
    const SeasonDetailsQuery = useSeasonDetailsQuery();

    if (SeasonDetailsQuery.isLoading) {
        <h1> Loading ....</h1>;
    }

    if (SeasonDetailsQuery.isError) {
        <h1> Error ....</h1>;
    }


    return (
        <>
            <h1>Watch Anime Page</h1>
            <SeasonDetails
                season_id={SeasonDetailsQuery.data?.season_id}
                season_image_url={SeasonDetailsQuery.data?.season_image_url}
                season_name={SeasonDetailsQuery.data?.season_name}
                bg_image_url={SeasonDetailsQuery.data?.bg_image_url}
                rating={SeasonDetailsQuery.data?.rating}
                release_date={SeasonDetailsQuery.data?.release_date}
                short_description={SeasonDetailsQuery.data?.season_short_description}
                age_restriction={SeasonDetailsQuery.data?.age_restriction}
                year_season={SeasonDetailsQuery.data?.year_season}
                genres={SeasonDetailsQuery.data?.genres}
            />                
        </>
    );
}

export default WatchAnime;
