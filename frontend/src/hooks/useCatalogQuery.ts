import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CatalogData, CatalogParams } from "../types/Catalog";

export const useCatalogQuery = (params?: CatalogParams) => {
    return useInfiniteQuery({
        queryKey: ["catalog"],
        queryFn: async () => {
            const result = await axios.get("http://localhost:8080/api/title", {
                params: {
                    ...params,
                    offset: 0,
                },
                paramsSerializer: {
                    indexes: null,
                },
            });
            console.log(result);
            return result.data as CatalogData[];
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage,
    });
};
