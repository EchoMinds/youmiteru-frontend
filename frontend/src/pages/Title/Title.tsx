import { useParams } from "react-router-dom";
import styles from "./Title.module.scss";
import { useTitleQuery } from "@/hooks/useTitleQuery";
import { TitleInfo } from "@/components/TitleInfo/TitleInfo";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { Footer } from "@/components/Footer/Footer";

export function Title(): JSX.Element {
    const { titleId } = useParams<{ titleId: string }>();
    const updatedTitleId = titleId ? parseInt(titleId) : undefined;

    const TitleQuery = useTitleQuery(updatedTitleId);

    return (
        <>
            <NavigationBar />
            <div className={styles.title}>
                <TitleInfo titleInfo={TitleQuery.data} />
            </div>
            <Footer />
        </>
    );
}
