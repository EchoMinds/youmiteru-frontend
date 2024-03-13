import "./Catalog.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import { useCatalogQuery } from "../../hooks/useCatalogQuery";
import { CatalogParams } from "../../types/Catalog";
import { useEffect, useState } from "react";
import AnimeList from "../../components/AnimeList/AnimeList";

function Catalog() {
    const [filterParams, setFilterParams] = useState<Partial<CatalogParams>>(
        {}
    );

    const CatalogQuery = useCatalogQuery(filterParams);

    useEffect(() => {
        void CatalogQuery.refetch();
    }, [filterParams]);
    console.log(CatalogQuery.data);
    const catalogData = CatalogQuery.data?.pages;

    if (CatalogQuery.isLoading) {
        <h1> Loading ....</h1>;
    }

    if (CatalogQuery.isError) {
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
                    <AnimeList anime_data={catalogData} />
                </div>
            </div>
            <button onClick={() => void CatalogQuery.fetchNextPage()}>
                More
            </button>
            <Footer />
        </div>
    );
}

export default Catalog;
