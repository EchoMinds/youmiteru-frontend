import "./Catalog.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import { useCatalogQuery } from "../../hooks/useCatalogQuery";
import { CatalogParams } from "../../types/Catalog";
import { useEffect, useState } from "react";

function Catalog() {
    const [filterParams, setFilterParams] = useState<Partial<CatalogParams>>(
        {}
    );

    const CatalogQuery = useCatalogQuery(filterParams);

    useEffect(() => {
        void CatalogQuery.refetch();
    }, [filterParams]);

    const anime_data = CatalogQuery.data;

    if (CatalogQuery.isLoading) {
        <h1> Loading ....</h1>;
    }

    if (CatalogQuery.isError) {
        <h1> Error ....</h1>;
    }

    const handleFilterAnime = (params: CatalogParams) => {
        setFilterParams(params);
        console.log(params);
    };

    return (
        <div className="catalog">
            <NavigationBar />
            <div className="catalog__container">
                <CatalogFilter handleFilterAnime={handleFilterAnime} />
            </div>
            <Footer />
        </div>
    );
}

export default Catalog;
