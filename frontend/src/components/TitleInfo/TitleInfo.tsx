import { ITitle } from "@/types/Title";
import styles from "./TitleInfo.module.scss";
import { TitleSeasons } from "../TitleSeasons/TitleSeasons";

interface ITitleInfoProps {
    titleInfo?: ITitle;
}

export function TitleInfo({ titleInfo }: ITitleInfoProps): JSX.Element {
    return (
        <div className={styles.titleInfo}>
            <img src={titleInfo?.titleImage} alt="Background Anime Image" />
            <div className={styles.info}>
                <div className={styles.name_desc}>
                    <p>{titleInfo?.titleName}</p>
                    <p>Описание: {titleInfo?.titleDescription}</p>
                </div>
                <div className={styles.genres}>
                    <p>Жанры: </p>
                    {titleInfo?.genreName?.map((item, index) => (
                        <p key={index}>
                            {item}
                            {index < titleInfo.genreName.length - 1 ? "," : "."}
                        </p>
                    ))}
                </div>
                <TitleSeasons seasonList={titleInfo?.seasonList} />
            </div>
        </div>
    );
}
