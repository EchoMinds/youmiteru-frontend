import "./VkAuthButton.scss";

import VkLogo from "./../../../assets/icons/vk-logo.svg";

interface VkAuthButtonProps {}

function VkAuthButton({}: VkAuthButtonProps): JSX.Element {
    return (
        <button className="vk-auth-btn">
            <img src={VkLogo} alt="Vk Logo" />
            <p>Продолжить с Vk</p>
        </button>
    );
}

export default VkAuthButton;
