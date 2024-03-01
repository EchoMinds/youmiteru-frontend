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

    const handleAgeRatingUpdate = (selectedOptions: string[]) => {
        setSelectedAgeRatings(selectedOptions);
    };

    const handleResetFilter = () => {
        setSelectedAgeRatings([]);
        setSelectedGenres([]);
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
            <div className="catalog-filter__buttons">
                <ResetButton handleResetFilter={handleResetFilter} />
                <FetchAnimeButton
                    selectedGenres={selectedGenres}
                    selectedAgeRatings={selectedAgeRatings}
                />
            </div>
        </div>
    );
}
// TODO: ГОД, РЕЙТИНГ
export default CatalogFilter;
