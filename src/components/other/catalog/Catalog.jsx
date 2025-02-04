import Filters from "./Filters.jsx";
import CatalogGoods from "./CatalogGoods.jsx";

function Catalog() {
    return (
        <div className="catalog">
            <Filters />
            <CatalogGoods />
        </div>
    );
}

export default Catalog;