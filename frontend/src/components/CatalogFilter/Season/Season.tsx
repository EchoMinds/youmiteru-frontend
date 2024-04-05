import { useEffect } from "react";
import "./Season.scss";

interface SeasonProps {
    setSelectedSeasons: (selectedOptions: string[]) => void;
    selectedSeasons: string[];
}

function Season({
    setSelectedSeasons,
    selectedSeasons,
}: SeasonProps): JSX.Element {
    useEffect(() => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>(
            ".season-filter input[type='checkbox']"
        );
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectedSeasons.includes(checkbox.value);
        });
    }, [selectedSeasons]);

    const handleSeasonCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelectedSeasons([...selectedSeasons, value]);
        } else {
            setSelectedSeasons(
                selectedSeasons.filter((option) => option !== value)
            );
        }
    };
    return (
        <div className="season-filter">
            <p>Сезон года</p>
            <ul>
                <li>
                    <input
                        type="checkbox"
                        value="SPRING"
                        onChange={handleSeasonCheckboxChange}
                    />
                    Весна
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="SUMMER"
                        onChange={handleSeasonCheckboxChange}
                    />
                    Лето
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="AUTUMN"
                        onChange={handleSeasonCheckboxChange}
                    />
                    Осень
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="WINTER"
                        onChange={handleSeasonCheckboxChange}
                    />
                    Зима
                </li>
            </ul>
        </div>
    );
}

export default Season;
