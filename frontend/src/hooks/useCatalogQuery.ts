import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { CatalogPages, CatalogParams } from "../types/Catalog";

export const useCatalogQuery = (params?: CatalogParams) => {
    return useInfiniteQuery({
        queryKey: ["catalog"],
        queryFn: async ({ pageParam }: { pageParam: number }) => {
            const result = await axios.get("http://localhost:8080/api/title", {
                params: {
                    ...params,
                    offset: pageParam,
                },
                paramsSerializer: {
                    indexes: null,
                },
            });
            return result.data as CatalogPages;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.currentPage + 1,
    });
};
