import { useParams } from "react-router-dom";
import styles from "./Title.module.scss";
import { useTitleQuery } from "@/hooks/useTitleQuery";
import { TitleInfo } from "@/components/TitleInfo/TitleInfo";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export function Title(): JSX.Element {
    const { titleId } = useParams<{ titleId: string }>();
    const updatedTitleId = titleId ? parseInt(titleId) : undefined;

    const TitleQuery = useTitleQuery(updatedTitleId);

    const titleInfo = {
        name: TitleQuery.data?.titleName,
        genres: TitleQuery.data?.genreName,
        image: TitleQuery.data?.titleImage,
        description: TitleQuery.data?.titleDescription,
    };
    console.log(TitleQuery);
    return (
        <>
            <NavigationBar />
            <div className={styles.title}>
                <TitleInfo titleInfo={titleInfo} />
            </div>
        </>
    );
}
