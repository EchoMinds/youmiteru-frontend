import "./WatchAnime.scss";
import { useSearchParams } from "react-router-dom";
import SeasonDetails from "../../components/SeasonDetails/SeasonDetails";


function WatchAnime () {
    const [searchParams] = useSearchParams();  
    const seasonId = searchParams.get("id");

    return (
        <>
            <h1>Watch Anime Page</h1>
            <SeasonDetails />                
        </>
    );
}

export default WatchAnime;
