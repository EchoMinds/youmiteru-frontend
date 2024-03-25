import { useParams } from "react-router-dom";
import styles from "./Title.module.scss";
import { useTitleQuery } from "@/hooks/useTitleQuery";

export function Title(): JSX.Element {
    const { titleId } = useParams<{ titleId: string }>();
    const updatedTitleId = titleId ? parseInt(titleId) : undefined;

    const TitleQuery = useTitleQuery(updatedTitleId);
    console.log(TitleQuery);
    return <div className={styles.title}>
        
    </div>;
}
