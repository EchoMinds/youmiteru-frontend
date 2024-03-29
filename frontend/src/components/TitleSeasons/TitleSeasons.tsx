import styles from "./TitleSeasons.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { Season } from "@/types/Season";

interface ITitleSeasonsProps {
    seasonList?: Season[];
}

export function TitleSeasons({ seasonList }: ITitleSeasonsProps): JSX.Element {
    return (
        <div className={styles.seasonContainer}>
            {seasonList?.map((item, index) => (
                <Link
                    to={`${ROUTES.SEASON}/${item.seasonId}`}
                    className={styles.season}
                    key={index}
                >
                    <img src={item.imageUrl} alt="Season image" />
                    <p>{item.seasonName}</p>
                </Link>
            ))}
        </div>
    );
}
