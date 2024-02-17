import "./SeasonDetails.scss";

interface SeasonDetailsProps {
    rating: number;
    release_date: string;
    short_description: string;
    age_restriction: string;
    year_season: number;
    genres: string[];
    season_id: number;
    season_image_url: string;
    season_name: string;
    total_episodes?: number;
    released_episodes?: number;
}

function SeasonDetails({
    season_id,
    season_image_url,
    season_name,
    rating,
    release_date,
    short_description,
    age_restriction,
    year_season,
    genres,
}: SeasonDetailsProps) {
    return (
        <div className="season-details">
            <h1>Season Details</h1>
        </div>
    );
}

export default SeasonDetails;
