import "./WatchAnime.scss";
import { useSearchParams } from "react-router-dom";
import { useSeasonDetailsQuery } from "../../hooks/useSeasonDetailsQuery";
import SeasonDetails from "../../components/SeasonDetails";
import { Footer } from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import RateSeason from "@/components/RateSeason";
import AnimeDetailsTabs from "@/components/AnimeDetailsTabs/AnimeDetailsTabs";
import PlayBackSeason from "@/components/PlayBackSeason";
import CommentsSection from "@/components/CommentsSection";

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

            <div className="pl-5 pt-3 pb-10">
                <RateSeason />
                <AnimeDetailsTabs
                    description={seasonData?.description}
                    relatedSeasons={seasonData?.relatedSeasons}
                />
            </div>

            <PlayBackSeason video_url={seasonData?.codeVideoPlayer || ""} />

            <CommentsSection comments={[]} profile_avatar_url="https://th.bing.com/th/id/R.0605bf51a35b7acc361bf192fba4f115?rik=mR7%2bEmv9jsZEAA&pid=ImgRaw&r=0" />

            <Footer />
        </main>
    );
}

export default WatchAnime;
