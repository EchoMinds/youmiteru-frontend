import "./AuthButtons.scss";

import DiscordAuthButton from "./DiscordAuthButton/DiscordAuthButton";
import GooogleAuthButton from "./GoogleAuthButton/GoogleAuthButton";
import VkAuthButton from "./VkAuthButton/VkAuthButton";

interface AuthButtonProps {}

function AuthButton({}: AuthButtonProps): JSX.Element {
    return (
        <div className="auth-buttons">
            <DiscordAuthButton />
            <GooogleAuthButton />
            <VkAuthButton />
        </div>
    );
}

export default AuthButton;
