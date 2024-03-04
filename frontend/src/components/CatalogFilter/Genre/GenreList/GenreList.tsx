import "./GenreList.scss";

interface GenreListProps {
    handleGenreCheckboxChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    genreMenu: boolean;
}

function GenreList({ handleGenreCheckboxChange, genreMenu }: GenreListProps) {
    return (
        <div className={`genre__menu ${genreMenu ? "show" : ""}`}>
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
    );
}

export default GenreList;
