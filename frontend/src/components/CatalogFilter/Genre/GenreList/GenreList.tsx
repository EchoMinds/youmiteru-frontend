import { genre } from "../../../../constants/genre";
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
                {genre.map((item, index) => {
                    return (
                        <li key={index}>
                            <input
                                type="checkbox"
                                value={item.originalName}
                                onChange={handleGenreCheckboxChange}
                            />{" "}
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default GenreList;
