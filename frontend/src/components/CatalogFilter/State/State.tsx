import { useEffect } from "react";
import "./State.scss";

interface StateProps {
    setSelectedState: (selectedOptions: string[]) => void;
    selectedState: string[];
}

function State({ setSelectedState, selectedState }: StateProps): JSX.Element {
    useEffect(() => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>(
            ".state input[type='checkbox']"
        );
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectedState.includes(checkbox.value);
        });
    }, [selectedState]);

    const handleStateCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelectedState([...selectedState, value]);
        } else {
            setSelectedState(
                selectedState.filter((option) => option !== value)
            );
        }
    };

    return (
        <div className="state">
            <p>Состояние</p>
            <ul>
                <li>
                    <input
                        type="checkbox"
                        value="FINISHED"
                        onChange={handleStateCheckboxChange}
                    />
                    Завершено
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="ANNOUNCEMENT"
                        onChange={handleStateCheckboxChange}
                    />
                    Анонсировано
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="INCOMPLETE"
                        onChange={handleStateCheckboxChange}
                    />
                    Незавершено
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="RELEASED"
                        onChange={handleStateCheckboxChange}
                    />
                    Выпущено
                </li>
            </ul>
        </div>
    );
}

export default State;
