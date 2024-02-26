import "./Catalog.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";

function Catalog() {
    return (
        <div className="catalog">
            <NavigationBar />
            <div className="catalog__container">
                <CatalogFilter />
            </div>
            <Footer />
        </div>
    );
}

export default Catalog;
