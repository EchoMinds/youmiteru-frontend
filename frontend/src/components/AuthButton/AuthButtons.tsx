import "./AuthButtons.scss";
import DiscordAuthButton from "./DiscordAuthButton/DiscordAuthButton";

interface AuthButtonProps {}

function AuthButton({}: AuthButtonProps): JSX.Element {
    return (
        <div>
            <DiscordAuthButton />
        </div>
    );
}

export default AuthButton;
