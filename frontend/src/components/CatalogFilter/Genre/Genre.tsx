import { useEffect, useState } from "react";
import "./Genre.scss";
import GenreList from "./GenreList/GenreList";

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
            <GenreList
                handleGenreCheckboxChange={handleGenreCheckboxChange}
                genreMenu={genreMenu}
            />
        </div>
    );
}

export default Genre;
