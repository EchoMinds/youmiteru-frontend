import "./AgeRating.scss";

interface AgeRatingProps {}

function AgeRating({}: AgeRatingProps): JSX.Element {
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox" name="" id="" />
                </li>
                <li>
                    <input type="checkbox" name="" id="" />
                </li>
                <li>
                    <input type="checkbox" name="" id="" />
                </li>
            </ul>
        </div>
    );
}

export default AgeRating;
