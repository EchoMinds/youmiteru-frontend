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
    bg_image_url: string;
}

function SeasonDetails({
    season_id,
    season_image_url,
    season_name,
    bg_image_url,
    rating,
    release_date,
    short_description,
    age_restriction,
    year_season,
    genres,
}: SeasonDetailsProps) {
    return (
        <div className="season-details">
            <div className="season-details__img">
                <img src={season_image_url} alt="season-image"/>
            </div>
        </div>
    );
}

export default SeasonDetails;
