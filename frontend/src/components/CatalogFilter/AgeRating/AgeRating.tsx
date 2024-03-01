import { useEffect } from "react";
import "./AgeRating.scss";

interface AgeRatingProps {
    handleAgeRatingUpdate: (selectedOptions: string[]) => void;
    selectedAgeRatings: string[];
}

function AgeRating({
    handleAgeRatingUpdate,
    selectedAgeRatings,
}: AgeRatingProps): JSX.Element {
    useEffect(() => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>(
            ".age-rating input[type='checkbox']"
        );
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectedAgeRatings.includes(checkbox.value);
        });
    }, [selectedAgeRatings]);

    const handleAgeCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value, checked } = e.target;

        if (checked) {
            handleAgeRatingUpdate([...selectedAgeRatings, value]);
        } else {
            handleAgeRatingUpdate(
                selectedAgeRatings.filter((option) => option !== value)
            );
        }
    };

    return (
        <div className="age-rating">
            <p>Возрастной рейтинг</p>
            <ul>
                <li>
                    <input
                        type="checkbox"
                        value="Empty"
                        onChange={handleAgeCheckboxChange}
                    />
                    Empty
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="16+"
                        onChange={handleAgeCheckboxChange}
                    />
                    16+
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="18+"
                        onChange={handleAgeCheckboxChange}
                    />
                    18+
                </li>
            </ul>
        </div>
    );
}

export default AgeRating;
