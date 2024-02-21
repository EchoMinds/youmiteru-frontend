import "./GoogleAuthButton.scss";

import GoogleLogo from "./../../../assets/icons/gogle-logo.svg";

interface GoogleAuthButtonProps {}

function GooogleAuthButton({}: GoogleAuthButtonProps): JSX.Element {
    return (
        <button className="google-auth-btn">
            <img src={GoogleLogo} alt="Google Logo" />
            <p>Продолжить с Vk</p>
        </button>
    );
}

export default GooogleAuthButton;
