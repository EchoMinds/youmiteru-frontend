import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ITitle } from "@/types/Title";
import { BASE_API_URL } from "@/constants/api";

export const useTitleQuery = (titleId?: number) => {
    return useQuery({
        queryKey: ["title-info", titleId],
        queryFn: async () => {
            const result = await axios.get(`${BASE_API_URL}/title/${titleId}`);
            return result.data as ITitle;
        },
    });
};
