import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { CatalogPages, CatalogParams } from "../types/Catalog";
import { BASE_API_URL } from "@/constants/api";

export const useCatalogQuery = (params?: CatalogParams) => {
    return useInfiniteQuery({
        queryKey: ["catalog", params],
        queryFn: async ({ pageParam }: { pageParam: number }) => {
            const result = await axios.get(`${BASE_API_URL}/title`, {
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
        getNextPageParam: (lastPage, allPages) => {
            const nextPage =
                allPages.length == lastPage.totalPage
                    ? undefined
                    : +(lastPage.currentPage + 1);
            return nextPage;
        },
        getPreviousPageParam: () => 0,
    });
};
