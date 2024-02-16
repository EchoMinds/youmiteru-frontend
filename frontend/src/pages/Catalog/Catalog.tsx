import "./Catalog.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";


function Catalog () {
    return (
        <div className="catalog">
            <NavigationBar />
            <div className="catalog__container">
                <h1>Catalog</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Catalog;
