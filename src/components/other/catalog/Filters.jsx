import data from "./spisok.json";
import { useState, useEffect } from "react";

function Filters() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const btn = document.querySelector('.filter_title');
        if (isMenuOpen) {
            if (btn) {
                btn.dataset.content = '▲';
            }
        } else {
            if (btn) {
                btn.dataset.content = "▼"
            }
        }
    })
    
    return (
        <div className="filters">
            <aside className="filter-menu">
                <h2 className="filter_title" data-content="▼" onClick={toggleMenu}>
                    Фильтры
                </h2>
                <div className={`hidden_filter ${isMenuOpen ? 'show' : ''}`}>
                    <div className="filter-group">
                        <h3>Категории</h3>
                        <ul>
                            {data.map((item, index) => (
                                <li className="item_category" key={index}>
                                    <a href="#" className="link_category">
                                        {item.category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="filter-group">
                        <h3>Бренды</h3>
                        <ul>
                            {data.map((item, index) => (
                                <li className="item_brand" key={index}>
                                    <a className="link_brand" href="#">
                                        {item.brand}
                                    </a>
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

                    <button className="style_btn" type="submit">
                        Применить
                    </button>
                </div>
            </aside>
        </div>
    );
}

export default Filters;
