import "./CatalogFilter.scss";
import Genre from "./Genre/Genre";

interface CatalogFilterProps {}

function CatalogFilter({}: CatalogFilterProps): JSX.Element {
    return (
        <div className="catalog-filter">
            <Genre />
        </div>
    );
}
// TODO: ГОД, РЕЙТИНГ, ВОЗРАСТ
export default CatalogFilter;
