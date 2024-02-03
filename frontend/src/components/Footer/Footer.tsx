import { Link } from "react-router-dom";

import "./Footer.scss";

import vk from "./../../assets/icons/vk-logo.png";
import discord from "./../../assets/icons/discord-logo.png";
import telegram from "./../../assets/icons/telegram-logo.png";

export function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <div className="footer__first-part">
                <Link className="footer__first-part__logo-text" to="">
                    youmiteru
                </Link>
                <div className="footer__first-part__icons">
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
                        <Link className="footer-custom-link" to="">
                            Пользовательское соглашение
                        </Link>
                    </li>
                    <li>
                        <Link className="footer-custom-link" to="">
                            Политика конфиденциальности
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer__block">
                <div className="footer__block__third-part">
                    <h1>Помощь</h1>
                    <ul>
                        <li>
                            <Link className="footer-custom-link" to="">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-custom-link" to="">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__block__four-part">
                    <h1>Другое</h1>
                    <ul>
                        <li>
                            <Link className="footer-custom-link" to="">
                                Донат
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-custom-link" to="">
                                Жалоба
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-custom-link" to="">
                                Реклама
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
