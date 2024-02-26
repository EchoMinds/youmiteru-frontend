import "./Catalog.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";
import Genre from "../../components/Genre/Genre";

function Catalog() {
    return (
        <div className="catalog">
            <NavigationBar />
            <div className="catalog__container">
                <Genre />
            </div>
            <Footer />
        </div>
    );
}

export default Catalog;
