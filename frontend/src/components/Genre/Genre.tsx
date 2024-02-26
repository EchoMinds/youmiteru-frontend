import "./Genre.scss";

interface GenreProps {}

function Genre({}: GenreProps): JSX.Element {
    return (
        <div className="genre">
            <button>Жанр</button>
            <li>
                <ul>Фантастика</ul>
            </li>
        </div>
    );
}

export default Genre;
