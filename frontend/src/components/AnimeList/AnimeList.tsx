import React from "react";
import { CatalogPages } from "../../types/Catalog";
import "./AnimeList.scss";
import { Link } from "react-router-dom";

interface AnimeListProps {
    anime_data?: CatalogPages[];
}

function AnimeList({ anime_data }: AnimeListProps): JSX.Element {
    return (
        <div className="anime-list">
            {anime_data?.map((group, index) => {
                return (
                    <React.Fragment key={index}>
                        {group.titlesForCatalog.map((value, index) => (
                            <Link
                                to={`/title/${value.titleId}`}
                                key={index}
                                className="anime-list__element"
                            >
                                <img
                                    src={value.titleImageUrl}
                                    alt={value.titleName}
                                />
                                <p>{value.titleName}</p>
                            </Link>
                        ))}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default AnimeList;
