import { useState } from "react";
import "./Genre.scss";
import { CSSTransition } from "react-transition-group";

interface GenreProps {}

function Genre({}: GenreProps): JSX.Element {
    const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
    };

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setSelectedGenres((prevGenres) => {
            if (prevGenres.includes(value)) {
                return prevGenres.filter((genre) => genre !== value);
            } else {
                return [...prevGenres, value];
            }
        });
    };

    const handleSelectedGenresSubmit = () => {
        console.log("Selected genres:", selectedGenres);
    };

    return (
        <div className="genre">
            <button onClick={toggleContentVisibility}>Жанр</button>
            <CSSTransition
                in={isContentVisible}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <ul className="genre-list">
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
            </CSSTransition>
            <button onClick={handleSelectedGenresSubmit}>
                Подтвердить выбор
            </button>
        </div>
    );
}

export default Genre;
