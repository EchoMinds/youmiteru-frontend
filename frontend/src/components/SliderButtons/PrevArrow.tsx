import "./SliderButton.scss";
import leftArrow from "../../assets/images/left-arrow.svg";

interface PrevArrowProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function PrevArrow({ onClick }: PrevArrowProps) {

    return (
        <button className="slider-arrow slider-arrow-left" onClick={onClick}>
            <img src={leftArrow} alt="left arrow" />
        </button>
    );
}

export default PrevArrow;
