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
                                to={`/${value.title_id}`}
                                key={index}
                                className="anime-list__element"
                            >
                                <img
                                    src={value.title_image_url}
                                    alt={value.title_name}
                                />
                                <p>{value.title_name}</p>
                            </Link>
                        ))}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default AnimeList;
