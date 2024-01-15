import {Link} from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import "./NavigationBar.scss";
import classNames from "classnames";
import WebLogo from "@/assets/icons/website-logo.png";
import SearchIcon from "@/assets/icons/search-icon.svg";
import UserProfileIcon from "@/assets/icons/user_icon.svg";

function NavigationBar() {
    
    return (
        <nav className="navigation-bar">
            <Link to={ROUTES.HOME}>
                <div className="web-logo">
                    <img src={WebLogo} alt="WebSite Logo" />
                </div>
                
                <span className="center-panel">
                    Главное
                </span>
            </Link>
            
            <Link to={ROUTES.CATALOG}>
                <span className="center-panel">
                    Каталог
                </span>
            </Link>

            <Link to={ROUTES.HELP_PROJECT}>
                <span className="center-panel">
                    Поддержка проекта
                </span>
            </Link>

            <Link to={ROUTES.HELP}>
                <span className="center-panel">
                    Обратная связь
                </span>
            </Link>

            <div className="right-panel">
                <img src={SearchIcon} alt="Search" />
            </div>
            
            <div className={classNames("user-profile", "right-panel")}>
                <img src={UserProfileIcon} />
            </div>

            <Link to={ROUTES.LOGIN}>
                <div className={classNames("login", "right-panel")}>
                    Войти
                </div>
            </Link>
        </nav>
    );
}

export default NavigationBar;