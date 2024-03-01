import "./AgeRating.scss";

interface AgeRatingProps {}

function AgeRating({}: AgeRatingProps): JSX.Element {
    return (
        <div className="age-raiting">
            <p>Возрастной рейтинг</p>
            <ul>
                <li>
                    <input
                        type="checkbox"
                        value="Empty"
                    />
                    Empty
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="16+"
                    />
                    16+
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="18+"
                    />
                    18+
                </li>
            </ul>
        </div>
    );
}

export default AgeRating;
