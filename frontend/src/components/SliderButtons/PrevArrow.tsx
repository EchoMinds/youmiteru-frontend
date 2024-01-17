import "./SliderButton.scss";
import leftArrow from "../../assets/images/left-arrow.svg";

interface PrevArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function PrevArrow({ onClick }: PrevArrowProps) {

    return (
        <div className="slider-arrow slider-arrow-left" onClick={onClick}>
            <img src={leftArrow} />
        </div>
    );
}

export default PrevArrow;
