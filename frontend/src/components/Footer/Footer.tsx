import { Link } from "react-router-dom";

import "./Footer.scss";

import vk from "./../../assets/icons/vk-logo.png";
import discord from "./../../assets/icons/discord-logo.png";
import telegram from "./../../assets/icons/telegram-logo.png";
import website from "./../../assets/icons/website-logo.png";

export function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <div className="footer__first-part">
                <Link to="">
                    <img src={website} />
                </Link>
                <div>
                    <Link to="">
                        <img src={discord} />
                    </Link>
                    <Link to="">
                        <img src={vk} />
                    </Link>
                    <Link to="">
                        <img src={telegram} />
                    </Link>
                </div>
            </div>
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
            <div className="footer__third-part">
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
            <div className="footer__four-part">
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
