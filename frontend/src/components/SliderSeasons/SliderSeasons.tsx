import Slider from "react-slick";
import "./SliderSeasons.scss";
import NextArrow from "../SeasonArrows/NextArrow";
import PrevArrow from "../SeasonArrows/PrevArrow";
import { Season } from "../../types/Season";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { SliderSettings } from "../../types/SliderSettings";

interface SliderSeasonsProps {
    sliderData: Season[] | [];
    onSlideChange?: (index: number) => void;
    title: string;
}

function SliderSeasons({ sliderData, title }: SliderSeasonsProps) {
    const settings: SliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [],
    };

    return (
        <>
            <SectionTitle title={title} />
            <div className="slider-season">
                <Slider {...settings}>
                    {sliderData &&
                        sliderData.map((item) => (
                            <Link
                                key={item.season_id}
                                to={`${ROUTES.SEASON}/${item.season_id}`}
                            >
                                <div className="slider-season__card">
                                    <img
                                        src={item.season_image_url}
                                        alt={item.season_name}
                                    />
                                    <div className="card_season_name">
                                        {item.season_name}
                                    </div>

                                    <div className="card_season_description">
                                        {item.season_description}
                                    </div>
                                </div>
                            </Link>
                        ))}
                </Slider>
            </div>
        </>
    );
}

export default SliderSeasons;
