import { useState } from "react";
import AgeRating from "./AgeRating/AgeRating";
import "./CatalogFilter.scss";
import FetchAnimeButton from "./FetchAnimeButton/FetchAnimeButton";
import Genre from "./Genre/Genre";
import ResetButton from "./ResetButton/ResetButton";
import Season from "./Season/Season";

interface CatalogFilterProps {}

function CatalogFilter({}: CatalogFilterProps): JSX.Element {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedAgeRatings, setSelectedAgeRatings] = useState<string[]>([]);
    const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);

    const handleResetFilter = () => {
        setSelectedAgeRatings([]);
        setSelectedGenres([]);
        setSelectedSeasons([]);
    };

    return (
        <div className="catalog-filter">
            <Genre
                setSelectedGenres={setSelectedGenres}
                selectedGenres={selectedGenres}
            />
            <AgeRating
                setSelectedAgeRatings={setSelectedAgeRatings}
                selectedAgeRatings={selectedAgeRatings}
            />
            <Season
                setSelectedSeasons={setSelectedSeasons}
                selectedSeasons={selectedSeasons}
            />
            <div className="catalog-filter__buttons">
                <ResetButton handleResetFilter={handleResetFilter} />
                <FetchAnimeButton
                    selectedGenres={selectedGenres}
                    selectedAgeRatings={selectedAgeRatings}
                    selectedSeasons={selectedSeasons}
                />
            </div>
        </div>
    );
}
// TODO: ГОД, РЕЙТИНГ
export default CatalogFilter;
