import "./AuthButtons.scss";

import DiscordAuthButton from "./DiscordAuthButton/DiscordAuthButton";
import GooogleAuthButton from "./GoogleAuthButton/GoogleAuthButton";
import VkAuthButton from "./VkAuthButton/VkAuthButton";
import YandexAuthButton from "./YandexAuthButton/YandexAuthButton";

interface AuthButtonProps {}

function AuthButton({}: AuthButtonProps): JSX.Element {
    return (
        <div className="auth-buttons">
            <DiscordAuthButton />
            <GooogleAuthButton />
            <YandexAuthButton />
            <VkAuthButton />
        </div>
    );
}

export default AuthButton;
