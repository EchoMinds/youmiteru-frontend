import "./YandexAuthButton.scss";

import YandexLogo from "./../../../assets/icons/yandex-logo.svg";

interface YandexAuthButtonProps {}

function YandexAuthButton({}: YandexAuthButtonProps): JSX.Element {
    return (
        <button className="yandex-auth-btn">
            <img src={YandexLogo} alt="Yandex Logo" />
            <p>Продолжить с Yandex</p>
        </button>
    );
}

export default YandexAuthButton;
