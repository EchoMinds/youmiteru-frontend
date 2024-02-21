import "./DiscordAuthButton.scss";

import DiscordLogo from "./../../../assets/icons/discord-login-logo.svg";

interface DiscordAuthButtonProps {}

function DiscordAuthButton({}: DiscordAuthButtonProps): JSX.Element {
    return (
        <div className="discord-auth-btn">
            <img src={DiscordLogo} alt="Discord Logo" />
            <p>Продолжить с Discord</p>
        </div>
    );
}

export default DiscordAuthButton;
