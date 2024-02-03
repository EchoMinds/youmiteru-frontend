import { Link } from "react-router-dom";
import "./Footer.scss";

export function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <div className="footer__second-part">
                <h1>О нас</h1>
                <ul>
                    <li>
                        <Link to="">Ntrdfsa</Link>
                    </li>
                    <li>
                        <Link to="">Ntrdfsa</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__second-part">
                <h1>Помощь</h1>
                <ul>
                    <li>
                        <Link to="">Ntrdfsa</Link>
                    </li>
                    <li>
                        <Link to="">Ntrdfsa</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__second-part">
                <h1>Другое</h1>
                <ul>
                    <li>
                        <Link to="">Ntrdfsa</Link>
                    </li>
                    <li>
                        <Link to="">Ntrdfsa</Link>
                    </li>
                    <li>
                        <Link to="">Ntrdfsa</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
