import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CatalogData, CatalogParams } from "../types/Catalog";

export const useCatalogQuery = (params?: CatalogParams) => {
    return useQuery({
        queryKey: ["catalog"],
        queryFn: async () => {
            const result = await axios.get(
                "http://localhost:8080/api/title/catalog",
                {
                    params: params,
                    paramsSerializer: {
                        indexes: null,
                    },
                }
            );
            console.log(result);
            return result.data as CatalogData[];
        },
        enabled: false,
    });
};
