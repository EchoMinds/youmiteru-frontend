import AgeRating from "./AgeRating/AgeRating";
import "./CatalogFilter.scss";
import Genre from "./Genre/Genre";

interface CatalogFilterProps {}

function CatalogFilter({}: CatalogFilterProps): JSX.Element {
    return (
        <div className="catalog-filter">
            <Genre />
            <AgeRating />
        </div>
    );
}
// TODO: ГОД, РЕЙТИНГ, ВОЗРАСТ
export default CatalogFilter;
