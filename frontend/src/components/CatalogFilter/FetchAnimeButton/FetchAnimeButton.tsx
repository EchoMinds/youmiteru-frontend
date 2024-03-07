import "./FetchAnimeButton.scss";

interface FetchAnimeButtonProps {
    selectedGenres: string[];
    selectedAgeRatings: string[];
    selectedSeasons: string[];
    selectedFormat: string[];
    selectedState: string[];
}

function FetchAnimeButton({
    selectedGenres,
    selectedAgeRatings,
    selectedSeasons,
    selectedFormat,
    selectedState,
}: FetchAnimeButtonProps) {
    const handleFilterData = () => {
        console.log(
            selectedGenres,
            selectedAgeRatings,
            selectedSeasons,
            selectedFormat,
            selectedState
        );
    };

    return (
        <div className="fetch-anime-button">
            <button onClick={handleFilterData}>Submit</button>
        </div>
    );
}

export default FetchAnimeButton;
