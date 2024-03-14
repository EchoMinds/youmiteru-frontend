import "./Catalog.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import { useCatalogQuery } from "../../hooks/useCatalogQuery";
import { CatalogParams } from "../../types/Catalog";
import { useEffect, useState } from "react";
import AnimeList from "../../components/AnimeList/AnimeList";
import { useInView } from "react-intersection-observer";

function Catalog() {
    const { ref, inView } = useInView();

    const [filterParams, setFilterParams] = useState<Partial<CatalogParams>>(
        {}
    );

    const { data, refetch, fetchNextPage, hasNextPage, isLoading, isError } =
        useCatalogQuery(filterParams);

    useEffect(() => {
        void refetch();
    }, [filterParams]);

    useEffect(() => {
        if (inView && hasNextPage) {
            void fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    if (isLoading) {
        <h1> Loading ....</h1>;
    }

    if (isError) {
        <h1> Error ....</h1>;
    }

    const handleFilterAnime = (params: CatalogParams) => {
        setFilterParams(params);
    };

    return (
        <div className="catalog">
            <NavigationBar />
            <div className="catalog__main">
                <div className="catalog__main__filter">
                    <CatalogFilter handleFilterAnime={handleFilterAnime} />
                </div>
                <div className="catalog__main__data">
                    <AnimeList anime_data={data?.pages} />
                </div>
            </div>
            {hasNextPage && (
                <div className="catalog__loading-text" ref={ref}>
                    Loading...
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Catalog;
