import "./ResetButton.scss";

interface ResetButtonProps {}

function ResetButton({}: ResetButtonProps) {
    return (
        <div className="reset-button">
            <button>Reset</button>
        </div>
    );
}

export default ResetButton;
