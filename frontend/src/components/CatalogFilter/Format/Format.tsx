import { useEffect } from "react";
import "./Format.scss";

interface FormatProps {
    setSelectedFormat: (selectedOptions: string[]) => void;
    selectedFormat: string[];
}

function Format({
    setSelectedFormat,
    selectedFormat,
}: FormatProps): JSX.Element {
    useEffect(() => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>(
            ".format input[type='checkbox']"
        );
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectedFormat.includes(checkbox.value);
        });
    }, [selectedFormat]);

    const handleFormatCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelectedFormat([...selectedFormat, value]);
        } else {
            setSelectedFormat(
                selectedFormat.filter((option) => option !== value)
            );
        }
    };

    return (
        <div className="format">
            <p>Формат</p>
            <ul>
                <li>
                    <input
                        type="checkbox"
                        value="OVA"
                        onChange={handleFormatCheckboxChange}
                    />
                    OVA
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="TV_SHOW"
                        onChange={handleFormatCheckboxChange}
                    />
                    TV SHOW
                </li>
                <li>
                    <input
                        type="checkbox"
                        value="MOVIE"
                        onChange={handleFormatCheckboxChange}
                    />
                    Фильм
                </li>
            </ul>
        </div>
    );
}

export default Format;
