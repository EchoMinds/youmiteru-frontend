import "./SliderButton.scss";
import rightArrow from "../../assets/images/right-arrow.svg";

interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function NextArrow({ onClick }: NextArrowProps) {

    return (
        <div onClick={onClick} className="slider-arrow slider-arrow-right">
            <img src={rightArrow} />
        </div>
    );
}

export default NextArrow;
