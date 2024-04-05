import StarIcon from "../assets/icons/glowing-star.svg";
import BookmarkIcon from "./BookmarkIcon";
import { Button, IconButton } from "@mui/material";

interface SeasonDetailsProps {
    rating?: number;
    release_date?: string;
    short_description?: string;
    age_restriction?: string;
    year_season?: number;
    genres?: string[];
    season_id?: number;
    season_image_url?: string;
    season_name?: string;
    bg_image_url?: string;
}

function SeasonDetails({
    season_id,
    season_image_url,
    season_name,
    bg_image_url,
    rating,
    release_date,
    short_description,
    age_restriction,
    year_season,
    genres,
}: SeasonDetailsProps) {
    return (
        <main className="flex overflow-hidden">
            <img
                src={bg_image_url}
                alt="background-image"
                className="opacity-20 h-[460px] w-full lg:h-[500px]"
            />

            <div className="z-10 absolute flex-col gap-2 flex lg:hidden p-5">
                <img
                    src={season_image_url}
                    className="rounded-md w-[200px] h-[310px]"
                />

                <div className="flex flex-col max-w-[210px] lg:hidden">
                    <p className="font-bold pb-1">Краткое описание:</p>

                    <p className="text-white overflow-auto h-[70px]">
                        {short_description}
                    </p>
                </div>
            </div>

            <div className="flex absolute p-5 ml-[180px] lg:ml-0 lg:p-5">
                <div className="z-10 hidden h-[300px] lg:flex">
                    <img
                        src={season_image_url}
                        alt="season-image"
                        className="h-[220px] w-[250px] rounded-md lg:w-[270px] lg:h-[380px]"
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-3 ml-2 lg:gap-2 lg:ml-7 lg:items-start lg:pb-[110px]">
                    <p className="font-semibold max-w-[100px] text-[18px] lg:max-w-[800px] lg:text-[24px]">
                        {season_name}
                    </p>

                    <ul className="flex gap-5 ml-5 lg:hidden">
                        <li className="flex bg-gray-500 rounded-sm justify-center items-center max-h-[40px] w-[40px]">
                            <p>{rating}</p>
                            <img src={StarIcon} alt="star-icon"></img>
                        </li>

                        <li className="flex bg-gray-500 justify-center items-center max-w-[140px] max-h-[40px] rounded-sm">
                            <p>{year_season}</p>
                        </li>
                    </ul>

                    <p className="flex rounded-sm bg-gray-500 justify-center items-center h-[20px] w-[30px] lg:hidden">
                        {age_restriction}+
                    </p>

                    <div className="flex flex-col mr-2 items-center gap-2 lg:hidden">
                        <p className="font-medium">Дата выхода:</p>
                        <p className="text-white">{release_date}</p>
                    </div>

                    <ul className="hidden lg:flex gap-5 lg:justify-center lg:items-center">
                        <li className="flex bg-gray-500 rounded-sm justify-center items-center h-[20px] w-[40px]">
                            <p>{rating}</p>
                            <img src={StarIcon} alt="star-icon"></img>
                        </li>

                        <li className="flex bg-gray-500 max-w-[150px] max-h-[40px] rounded-sm">
                            <p>{year_season}</p>
                        </li>

                        <li className="flex rounded-sm bg-gray-500 justify-center items-center h-[20px] w-[30px] ">
                            <p>{age_restriction}+</p>
                        </li>
                    </ul>

                    <ul className="hidden lg:flex gap-3">
                        <p className="font-medium">Жанр:</p>
                        {genres?.map((genre, index) => (
                            <li
                                key={index}
                                className="underline underline-offset-4 decoration-[#5cd3a1]">
                                {genre}
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex flex-row gap-2">
                        <p className="font-medium">Дата выхода:</p>
                        <p className="text-white">{release_date}</p>
                    </div>

                    <div className="flex mr-7 flex-row gap-16 lg:hidden">
                        <ul className="flex flex-col">
                            <p className="font-medium pb-[2px]">Жанр:</p>
                            {genres?.map((genre, index) => (
                                <li
                                    key={index}
                                    className="underline underline-offset-4 decoration-[#5cd3a1]">
                                    {genre}
                                </li>
                            ))}
                        </ul>

                        {/* 
                        <ul className="flex flex-col gap-1">
                            <li className="flex bg-gray-500 rounded-sm justify-center items-center h-[20px] w-[40px]">
                                <p>{rating}</p>
                                <img src={StarIcon} alt="star-icon"></img>
                            </li>

                            <li className="flex bg-gray-500 justify-center items-center w-[40px] h-[20px] rounded-sm">
                                <p>{year_season}</p>
                            </li>

                            <li className="flex rounded-sm bg-gray-500 justify-center items-center h-[20px] w-[30px] ">
                                <p>{age_restriction}+</p>
                            </li>
                        </ul> */}
                    </div>

                    <div className="hidden flex-col ml-5 lg:flex lg:ml-0 lg:mt-5">
                        <p className="font-medium lg:text-[20px]">
                            Краткое описание:
                        </p>

                        <p className="text-white line-clamp-3 lg:line-clamp-4 lg:max-w-[500px]">
                            {short_description}
                        </p>
                    </div>

                    <div className="flex gap-5 ml-8 items-center lg:ml-0">
                        <Button
                            variant="contained"
                            size="small"
                            className="w-10 h-[40px]">
                            Trailer
                        </Button>

                        <IconButton
                            aria-label="add to favorite anime"
                            size="large"
                            className="bg-[#4e343b]"
                            color="primary">
                            <BookmarkIcon />
                        </IconButton>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-col p-5 absolute bottom-[170px] max-w-[250px] lg:hidden">
                <p className="font-bold pb-1">Краткое описание:</p>

                <p className="text-white overflow-auto h-[70px]">
                    {short_description}
                </p>
            </div> */}
        </main>
    );
}

export default SeasonDetails;
