import styles from "./TitleInfo.module.scss";

interface ITitleInfoProps {
    titleInfo: {
        name?: string;
        genres?: string[];
        image?: string;
        description?: string;
    };
}

export function TitleInfo({ titleInfo }: ITitleInfoProps): JSX.Element {
    return (
        <div className={styles.titleInfo}>
            <img src={titleInfo.image} alt="Background Anime Image" />
            <div className={styles.info}>
                <div className={styles.name_desc}>
                    <p>{titleInfo.name}</p>
                    <p>{titleInfo.description}</p>
                </div>
                <div className={styles.genres}>
                    <p>Жанры:</p>
                    {titleInfo.genres?.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
