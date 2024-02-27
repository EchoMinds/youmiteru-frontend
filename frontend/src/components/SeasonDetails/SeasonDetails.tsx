import "./SeasonDetails.scss";
import StarIcon from "../../assets/icons/glowing-star.svg";

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
        <div className="season-container">
            <div className="season-container__bg-img">
                <img src={bg_image_url} alt="background-image" />
            </div>

            <div className="season-container__season-img">
                <img src={season_image_url} alt="season-image" />
            </div>

            <div className="season-container__season-name">
                <p>{season_name}</p>
            </div>

            <ul className="season-container__release-info">
                <li className="season-rating">
                    <p>{rating}</p>
                    <img src={StarIcon} alt="star-icon"></img>
                </li>

                <li className="season-year">
                    <p>{year_season}</p>
                </li>

                <li className="season-age-restriction">
                    <p>{age_restriction}+</p>
                </li>
            </ul>

            <ul className="season-container__details">
                <li className="season-container__details__preview-short-description">
                    <p>Краткое описание:</p>
                    <p className="short-description">{short_description}</p>
                </li>

                <li className="season-container__details__preview-release-date">
                    <p>Дата выхода:</p>
                    <p className="release-data">{release_date}</p>
                </li>

                <li className="season-container__details__genres">
                    <ul className="genre-list">
                        <li>Жанр:</li>
                        {genres?.map((genre, index) => (
                            <li key={index} className="genre-item">
                                {genre}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default SeasonDetails;
