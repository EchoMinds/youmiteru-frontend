import { useState } from "react";
import AgeRating from "./AgeRating/AgeRating";
import "./CatalogFilter.scss";
import FetchAnimeButton from "./FetchAnimeButton/FetchAnimeButton";
import Genre from "./Genre/Genre";
import ResetButton from "./ResetButton/ResetButton";

interface CatalogFilterProps {}

function CatalogFilter({}: CatalogFilterProps): JSX.Element {
    const [selectedAgeRatings, setSelectedAgeRatings] = useState<string[]>([]);

    const handleAgeRatingUpdate = (selectedOptions: string[]) => {
        setSelectedAgeRatings(selectedOptions);
    };

    return (
        <div className="catalog-filter">
            <Genre />
            <AgeRating
                handleAgeRatingUpdate={handleAgeRatingUpdate}
                selectedAgeRatings={selectedAgeRatings}
            />
            <div className="catalog-filter__buttons">
                <ResetButton />
                <FetchAnimeButton />
            </div>
        </div>
    );
}
// TODO: ГОД, РЕЙТИНГ
export default CatalogFilter;
