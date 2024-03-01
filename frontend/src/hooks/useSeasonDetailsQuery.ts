import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "../constants/api";
import axios from "axios";
import { SeasonDetails } from "../types/SeasonDetails";

export const useSeasonDetailsQuery = () => {
    return useQuery({
        queryKey: ["season-details"],
        queryFn: async() => {
            const result = await axios.get(`${BASE_API_URL}/season_details`, {
                headers: {
                    "ngrok-skip-browser-warning": 69420,
                },
            });
            return result.data as SeasonDetails;
        }
    });
};
