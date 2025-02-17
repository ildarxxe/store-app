import data from "../goods.json";
import Sorting from "./Sorting";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function CatalogGoods({ filter }) {
    const [products, setProducts] = useState(data);
    const [sortBy, setSortBy] = useState("popularity");
    const [sortDirection, setSortDirection] = useState("asc");
    const [priceSort, setPriceSort] = useState(null);
    const [dateSort, setDateSort] = useState(null);
    const [displayedProducts, setDisplayedProducts] = useState([]);

    const propertyMap = {
        model: "Модель",
        color: "Цвет",
        type: "Тип",
        brand: "Бренд",
        author: "Автор",
        size: "Размер",
        title: "Название",
        style: "Стиль",
    };

    const goodsWrapperRef = useRef(null);

    useEffect(() => {
        const goodsWrapper = goodsWrapperRef.current;

        if (goodsWrapper) {
            const handleClick = (event) => {
                if (event.target.classList.contains("heart")) {
                    event.target.classList.toggle("fas");
                }
            };

            goodsWrapper.addEventListener("click", handleClick);

            return () => {
                goodsWrapper.removeEventListener("click", handleClick);
            };
        } else {
            console.error("Элемент .goods_wrapper не найден.");
        }
    }, []);

 
    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
        setPriceSort(null);
        setDateSort(null);
    };

    const handleSortDirectionChange = (newSortDirection) => {
        setSortDirection(newSortDirection);
    };

    const handlePriceSortChange = (newPriceSort) => {
        setPriceSort(newPriceSort);
    };

    const handleDateSortChange = (newDateSort) => {
        setDateSort(newDateSort);
    };
    
    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            return (
                (filter.category === null || product.category === filter.category) &&
                (filter.brand === null || product.brand === filter.brand)
            );
        });
    
        let newSortedData = [...filteredProducts];
    
        if (sortBy === "popularity") {
        } else if (sortBy === "rating") {
            newSortedData.sort((a, b) => (sortDirection === "asc" ? b.rating - a.rating : a.rating - b.rating));
        } else if (sortBy === "price") {
            newSortedData.sort((a, b) => (sortDirection === "asc" ? a.price - b.price : b.price - a.price));
        }
    
        if (priceSort === "asc") {
            newSortedData.sort((a, b) => a.price - b.price);
        } else if (priceSort === "desc") {
            newSortedData.sort((a, b) => b.price - a.price);
        }
    
        if (dateSort === "asc") {
            newSortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (dateSort === "desc") {
            newSortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
    
        setDisplayedProducts(newSortedData);
    }, [filter, sortBy, sortDirection, priceSort, dateSort, products]);

    return (
        <div className="catalog__right">
            <Sorting
                sortBy={sortBy}
                sortDirection={sortDirection}
                priceSort={priceSort}
                dateSort={dateSort}
                onSortChange={handleSortChange}
                onSortDirectionChange={handleSortDirectionChange}
                onPriceSortChange={handlePriceSortChange}
                onDateSortChange={handleDateSortChange}
            />
            <div className="goods catalog__goods">
                <div className="goods__wrapper" ref={goodsWrapperRef}>
                    {displayedProducts.length === 0 ? (
                        <p className="goods__undefined">Товар не найден</p>
                    ) : (
                        displayedProducts.map((item, index) => (
                            <div className="card catalog__card" key={index}>
                                <img
                                    className="goods__img"
                                    src={item.img}
                                    alt={item.name}
                                />
                                <div className="goods__text catalog__goods-text">
                                    <h3 className="goods__name">{item.name}</h3>
                                    {Object.keys(propertyMap).find(
                                        (key) => item[key]
                                    ) && (
                                        <p
                                            className={`goods__property goods__property_${Object.keys(
                                                propertyMap
                                            ).find((key) => item[key])}`}
                                        >
                                            {
                                                propertyMap[
                                                    Object.keys(
                                                        propertyMap
                                                    ).find((key) => item[key])
                                                ]
                                            }
                                            :{" "}
                                            {
                                                item[
                                                    Object.keys(
                                                        propertyMap
                                                    ).find((key) => item[key])
                                                ]
                                            }
                                        </p>
                                    )}
                                    <p className="goods__price">
                                        Цена: {item.price} тг.
                                    </p>
                                    <p className="goods__rate">
                                        Рейтинг:{" "}
                                        <span className="rating">
                                            {item.rating}
                                        </span>
                                    </p>
                                    <p className="goods__date">
                                        Дата:{" "}
                                        <span className="date_span">
                                            {item.date}
                                        </span>
                                    </p>
                                </div>
                                <div className="card__btn">
                                    <Link
                                        className="product__check"
                                        to={`/product/${item.name}`}
                                    >
                                        Посмотреть
                                    </Link>
                                    <i class="fa-regular fa-heart heart"></i>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default CatalogGoods;
