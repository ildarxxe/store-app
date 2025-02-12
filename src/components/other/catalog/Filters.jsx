import data from "./spisok.json";
import { useState, useEffect } from "react";

function Filters({ filter, setFilter }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [products, setProducts] = useState(
        data && data.length > 0 && data[0].products ? data[0].products : []
    );
    const [filteredProducts, setFilteredProducts] = useState(products);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const btn = document.querySelector(".filter_title");
        if (btn) {
            btn.dataset.content = isMenuOpen ? "▲" : "▼";
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const filtered = products.filter((product) => {
            const categoryMatch =
                filter.category === null ||
                product.category === filter.category;
            const brandMatch =
                filter.brand === null || product.brand === filter.brand;
            return categoryMatch && brandMatch;
        });
        setFilteredProducts(filtered);
    }, [filter, products]);

    const filterHandleCategory = (category) => {
        setFilter({ ...filter, category });
    };

    const filterHandleBrand = (brand) => {
        setFilter({ ...filter, brand });
    };

    const clearFilter = () => {
        setFilter({ category: null, brand: null });
    };

    return (
        <div className="filters">
            <aside className="filter-menu">
                <h2
                    className="filter_title"
                    data-content="▼"
                    onClick={toggleMenu}
                >
                    Фильтры
                </h2>
                <div className={`hidden_filter ${isMenuOpen ? "show" : ""}`}>
                    <div className="filter-group">
                        <h3>Категории</h3>
                        <ul>
                            {data[0].category.map((item, index) => (
                                <li
                                    className={`item_category link_category ${
                                        filter.category === item ? "active" : ""
                                    }`}
                                    onClick={() => filterHandleCategory(item)}
                                    key={index}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="filter-group">
                        <h3>Бренды</h3>
                        <ul>
                            {data[0].brand.map((item, index) => (
                                <li
                                    className={`item_brand link_brand ${
                                        filter.brand === item ? "active" : ""
                                    }`}
                                    onClick={() => filterHandleBrand(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="filter-group">
                        <h3>Цена</h3>
                        <div className="price-range">
                            <label for="min-price">От:</label>
                            <input
                                type="number"
                                id="min-price"
                                min="0"
                                max="1000000000"
                            />
                            <label for="max-price">До:</label>
                            <input
                                type="number"
                                id="max-price"
                                min="0"
                                max="1000000000"
                            />
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Рейтинг</h3>
                        <div className="rating">
                            <input
                                type="radio"
                                name="rating"
                                id="rating-4"
                                value="4"
                            />
                            <label for="rating-4">4 звезды и выше</label>
                            <br />
                            <input
                                type="radio"
                                name="rating"
                                id="rating-3"
                                value="3"
                            />
                            <label for="rating-3">3 звезды и выше</label>
                            <br />
                            <input
                                type="radio"
                                name="rating"
                                id="rating-2"
                                value="2"
                            />
                            <label for="rating-2">2 звезды и выше</label>
                            <br />
                            <input
                                type="radio"
                                name="rating"
                                id="rating-1"
                                value="1"
                            />
                            <label for="rating-1">1 звезда и выше</label>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>В наличии</h3>
                        <div className="availability">
                            <input type="checkbox" id="in-stock" />
                            <label for="in-stock">Только в наличии</label>
                        </div>
                    </div>

                    <div className="btns_filters">
                        <button className="style_btn" type="submit">
                            Применить
                        </button>
                        <button className="reset_filters" onClick={clearFilter}>
                            Сбросить
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Filters;
