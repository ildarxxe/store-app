import Filters from "./Filters.jsx";
import CatalogGoods from "./CatalogGoods.jsx";
import { useState } from "react";

function Catalog() {
    const [filter, setFilter] = useState({ category: null, brand: null });
    return (
        <div className="catalog">
            <Filters filter={filter} setFilter={setFilter} />
            <CatalogGoods filter={filter} />
        </div>
    );
}

export default Catalog;