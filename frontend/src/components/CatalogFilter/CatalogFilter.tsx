import { useState } from "react";
import AgeRating from "./AgeRating/AgeRating";
import "./CatalogFilter.scss";
import FetchAnimeButton from "./FetchAnimeButton/FetchAnimeButton";
import Genre from "./Genre/Genre";
import ResetButton from "./ResetButton/ResetButton";

interface CatalogFilterProps {}

function CatalogFilter({}: CatalogFilterProps): JSX.Element {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedAgeRatings, setSelectedAgeRatings] = useState<string[]>([]);

    const handleGenreUpdate = (selectedOptions: string[]) => {
        setSelectedGenres(selectedOptions);
    };

    const handleResetFilter = () => {
        setSelectedAgeRatings([]);
        setSelectedGenres([]);
    };

    const handleAgeRatingUpdate = (selectedOptions: string[]) => {
        setSelectedAgeRatings(selectedOptions);
    };

    return (
        <div className="catalog-filter">
            <Genre
                handleGenreUpdate={handleGenreUpdate}
                selectedGenres={selectedGenres}
            />
            <AgeRating
                handleAgeRatingUpdate={handleAgeRatingUpdate}
                selectedAgeRatings={selectedAgeRatings}
            />
            <button
                onClick={() => {
                    console.log(selectedGenres, selectedAgeRatings);
                }}
            >
                Test
            </button>
            <div className="catalog-filter__buttons">
                <ResetButton handleResetFilter={handleResetFilter} />
                <FetchAnimeButton />
            </div>
        </div>
    );
}
// TODO: ГОД, РЕЙТИНГ
export default CatalogFilter;
