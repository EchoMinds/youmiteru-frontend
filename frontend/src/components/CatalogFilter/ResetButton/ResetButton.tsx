import "./ResetButton.scss";

interface ResetButtonProps {
    handleResetFilter: () => void;
}

function ResetButton({ handleResetFilter }: ResetButtonProps): JSX.Element {
    return (
        <div className="reset-button">
            <button onClick={handleResetFilter}>Сбросить</button>
        </div>
    );
}

export default ResetButton;
