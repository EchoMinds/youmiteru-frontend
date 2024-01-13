import PropTypes from "prop-types";
import "./Button.scss";

interface Props {
    status: "Watch_Now" | "Watch_Trailer";
    className: string;
}

export const Button = ({ status, className }: Props): JSX.Element => {
    const buttonText: string = status === "Watch_Trailer" ? "Watch Trailer" : "Watch Now";
    return (
        <div className={className}>
            {status === "Watch_Now" && (
                <div className="text-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                    <path d="M0 2.87313C0 0.658533 2.70462 -0.719851 4.85991 0.394617L19.4251 7.93915C21.5626 9.04501 21.5626 11.7874 19.4251 12.8947L4.85991 20.4364C2.70462 21.5523 0 20.1739 0 17.9608V2.87313Z" fill="white" />
                </svg>{buttonText}
                </div>
            )}
            {status === "Watch_Trailer" && <div className="text-wrapper">{buttonText}</div>}
        </div>
    );
};

Button.propTypes = {
    status: PropTypes.oneOf(["Watch_Now", "Watch_Trailer"]).isRequired
};
