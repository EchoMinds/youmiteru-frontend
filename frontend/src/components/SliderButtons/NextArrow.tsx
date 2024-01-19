import "./SliderButton.scss";
import rightArrow from "../../assets/images/right-arrow.svg";

interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function NextArrow({ onClick }: NextArrowProps) {

    return (
        <button onClick={onClick} className="slider-arrow slider-arrow-right">
            <img src={rightArrow} alt="right arrow"/>
        </button>
    );
}

export default NextArrow;
