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

    const anime_data = CatalogQuery?.data;

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
            <div className="catalog__filter">
                <CatalogFilter handleFilterAnime={handleFilterAnime} />
            </div>
            <div className="catalog__data">
                <AnimeList anime_data={anime_data} />
            </div>
            <Footer />
        </div>
    );
}

export default Catalog;
