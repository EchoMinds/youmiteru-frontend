import { useEffect, useState } from "react";
import "./Genre.scss";

interface GenreProps {
    setSelectedGenres: (selectedOptions: string[]) => void;
    selectedGenres: string[];
}

function Genre({ setSelectedGenres, selectedGenres }: GenreProps): JSX.Element {
    const [genreMenu, setGenreMenu] = useState<boolean>(false);

    useEffect(() => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>(
            ".genre__menu input[type='checkbox']"
        );
        checkboxes.forEach((checkbox) => {
            checkbox.checked = selectedGenres.includes(checkbox.value);
        });
    }, [selectedGenres]);

    const toggleGenreMenu = () => {
        setGenreMenu(!genreMenu);
    };

    const handleGenreCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedGenres([...selectedGenres, value]);
        } else {
            setSelectedGenres(
                selectedGenres.filter((genre) => genre !== value)
            );
        }
    };

    return (
        <div className="genre">
            <button onClick={toggleGenreMenu}>Жанры</button>
            {genreMenu && (
                <div className="genre__menu">
                    <ul className="genre__menu__list">
                        <li>
                            <input
                                type="checkbox"
                                value="Фантастика"
                                onChange={handleGenreCheckboxChange}
                            />{" "}
                            Фантастика
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Драма"
                                onChange={handleGenreCheckboxChange}
                            />{" "}
                            Драма
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Комедия"
                                onChange={handleGenreCheckboxChange}
                            />{" "}
                            Комедия
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Кодомо"
                                onChange={handleGenreCheckboxChange}
                            />{" "}
                            Кодомо
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Сёнэн"
                                onChange={handleGenreCheckboxChange}
                            />{" "}
                            Сёнэн
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Киберпанк"
                                onChange={handleGenreCheckboxChange}
                            />{" "}
                            Киберпанк
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Genre;
