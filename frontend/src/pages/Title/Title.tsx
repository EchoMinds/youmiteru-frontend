import styles from "./Title.module.scss";

interface ITitleProps {}

export function Title({}: ITitleProps): JSX.Element {
    return <div className={styles.title}>Test</div>;
}
