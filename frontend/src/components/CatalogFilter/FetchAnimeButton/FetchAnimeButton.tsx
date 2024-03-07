import { CatalogParams } from "../../../types/Catalog";
import "./FetchAnimeButton.scss";

interface FetchAnimeButtonProps {
    handleFilterAnime: (params: CatalogParams) => void;
    selectedGenres?: string[];
    selectedAgeRatings?: string[];
    selectedSeasons?: string[];
    selectedFormat?: string[];
    selectedState?: string[];
}

function FetchAnimeButton({
    selectedGenres,
    selectedAgeRatings,
    selectedSeasons,
    selectedFormat,
    selectedState,
    handleFilterAnime,
}: FetchAnimeButtonProps) {
    const handleFilterData = () => {
        const params: CatalogParams = {
            genres: selectedGenres,
            format: selectedFormat,
            state: selectedState,
            ageRestriction: selectedAgeRatings,
            yearSeason: selectedSeasons,
        };

        handleFilterAnime(params);
    };

    return (
        <div className="fetch-anime-button">
            <button onClick={handleFilterData}>Submit</button>
        </div>
    );
}

export default FetchAnimeButton;
