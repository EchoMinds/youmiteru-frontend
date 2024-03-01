import "./ResetButton.scss";

interface ResetButtonProps {
    handleResetFilter: () => void;
}

function ResetButton({ handleResetFilter }: ResetButtonProps) {
    return (
        <div className="reset-button">
            <button onClick={handleResetFilter}>Reset</button>
        </div>
    );
}

export default ResetButton;
