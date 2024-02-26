import { useState } from "react";
import "./Genre.scss";
import { CSSTransition } from "react-transition-group";

interface GenreProps {}

function Genre({}: GenreProps): JSX.Element {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
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
                    <li>Фантастика</li>
                    <li>Драма</li>
                    <li>Комедия</li>
                    <li>Кодомо</li>
                    <li>Сёнэн</li>
                    <li>Киберпанк</li>
                </ul>
            </CSSTransition>
        </div>
    );
}

export default Genre;
