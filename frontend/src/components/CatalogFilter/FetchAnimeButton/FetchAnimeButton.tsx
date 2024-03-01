import "./FetchAnimeButton.scss";

interface FetchAnimeButtonProps {
    selectedGenres: string[];
    selectedAgeRatings: string[];
    selectedSeasons: string[];
}

function FetchAnimeButton({
    selectedGenres,
    selectedAgeRatings,
    selectedSeasons,
}: FetchAnimeButtonProps) {
    const handleFilterData = () => {
        console.log(selectedGenres, selectedAgeRatings, selectedSeasons);
    };

    return (
        <div className="fetch-anime-button">
            <button onClick={handleFilterData}>Submit</button>
        </div>
    );
}

export default FetchAnimeButton;
