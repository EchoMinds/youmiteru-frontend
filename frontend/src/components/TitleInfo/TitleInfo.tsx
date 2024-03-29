import { ITitle } from "@/types/Title";
import styles from "./TitleInfo.module.scss";
import { TitleSeasons } from "../TitleSeasons/TitleSeasons";

interface ITitleInfoProps {
    titleInfo?: ITitle;
}

export function TitleInfo({ titleInfo }: ITitleInfoProps): JSX.Element {
    const isMobile = window.innerWidth < 1024;

    return (
        <>
            <div className={styles.titleInfo}>
                {isMobile ? (
                    <>
                        <div className={styles.info}>
                            <div className={styles.name_image}>
                                <img
                                    src={titleInfo?.titleImage}
                                    alt="Background Anime Image"
                                />
                                <p>{titleInfo?.titleName}</p>
                            </div>
                            <div className={styles.genres_desc}>
                                <p>Описание: {titleInfo?.titleDescription}</p>
                                <div className={styles.genres}>
                                    <p>Жанры: </p>
                                    {titleInfo?.genreName?.map(
                                        (item, index) => (
                                            <p key={index}>
                                                {item}
                                                {index <
                                                titleInfo.genreName.length - 1
                                                    ? ","
                                                    : "."}
                                            </p>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <img
                            src={titleInfo?.titleImage}
                            alt="Background Anime Image"
                        />
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
                                        {index < titleInfo.genreName.length - 1
                                            ? ","
                                            : "."}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <TitleSeasons seasonList={titleInfo?.seasonList} />
        </>
    );
}
