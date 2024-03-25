import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ITitle } from "@/types/Title";

export const useTitleQuery = (titleId?: number) => {
    return useQuery({
        queryKey: ["title-info", titleId],
        queryFn: async () => {
            const result = await axios.get(
                `http://localhost:8080/api/title/${titleId}`
            );
            console.log(result);
            return result.data as ITitle;
        },
    });
};
