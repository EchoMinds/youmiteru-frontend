import { useState } from "react";
import "./Genre.scss";

interface GenreProps {}

function Genre({}: GenreProps): JSX.Element {
    const [genreMenu, setGenreMenu] = useState<boolean>(false);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const toggleGenreMenu = () => {
        setGenreMenu(!genreMenu);
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedGenres((prevSelectedGenres) => [
                ...prevSelectedGenres,
                value,
            ]);
        } else {
            setSelectedGenres((prevSelectedGenres) =>
                prevSelectedGenres.filter((genre) => genre !== value)
            );
        }
    };

    const handleApplySelection = () => {
        console.log("Выбранные жанры:", selectedGenres);
    };

    return (
        <div className="genre">
            <button onClick={toggleGenreMenu}>Жанры</button>
            {genreMenu && (
                <div className="genre__menu">
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                value="Фантастика"
                                onChange={handleCheckboxChange}
                            />{" "}
                            Фантастика
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Драма"
                                onChange={handleCheckboxChange}
                            />{" "}
                            Драма
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Комедия"
                                onChange={handleCheckboxChange}
                            />{" "}
                            Комедия
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Кодомо"
                                onChange={handleCheckboxChange}
                            />{" "}
                            Кодомо
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Сёнэн"
                                onChange={handleCheckboxChange}
                            />{" "}
                            Сёнэн
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                value="Киберпанк"
                                onChange={handleCheckboxChange}
                            />{" "}
                            Киберпанк
                        </li>
                    </ul>
                    <button onClick={handleApplySelection}>Выбрать</button>
                </div>
            )}
        </div>
    );
}

export default Genre;
