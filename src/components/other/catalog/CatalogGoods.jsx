import data from "../goods.json";
import Sorting from "./Sorting";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function CatalogGoods({ filter }) {
    const [sortedData, setSortedData] = useState(data);
    const [products, setProducts] = useState(
        data && data.length > 0 ? data : []
    );
    const [value, setValue] = useState("По популярности");
    const [valuePrice, setValuePrice] = useState("");
    const [valueDate, setValueDate] = useState("");
    const [displayedProducts, setDisplayedProducts] = useState([]);

    const filteredProducts = products.filter((product) => {
        const categoryMatch =
            filter.category === null || product.category === filter.category;
        const brandMatch =
            filter.brand === null || product.brand === filter.brand;
        return categoryMatch && brandMatch;
    });

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

    const handleOptionClick = (event) => {
        setValue(event.target.textContent);
    };

    const handleOptionPriceClick = (event) => {
        setValuePrice(event.target.textContent);
    };

    const handleOptionDateClick = (event) => {
        setValueDate(event.target.textContent);
    };

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            return (
                (!filter ||
                    filter.category === null ||
                    product.category === filter.category) &&
                (!filter ||
                    filter.brand === null ||
                    product.brand === filter.brand)
            );
        });

        let newSortedData = [...filteredProducts];

        switch (value) {
            case "По возрастанию цены":
                newSortedData = [...filteredProducts].sort(
                    (a, b) => a.price - b.price
                );
                break;
            case "По убыванию цены":
                newSortedData = [...filteredProducts].sort(
                    (a, b) => b.price - a.price
                );
                break;
            case "По популярности":
                newSortedData = [...filteredProducts];
                break;
            case "По рейтингу":
                newSortedData = [...filteredProducts].sort(
                    (a, b) => b.rating - a.rating
                );
                break;
            default:
                break;
        }
        switch (valuePrice) {
            case "Сначала дешевое":
                newSortedData = [...filteredProducts].sort(
                    (a, b) => a.price - b.price
                );
                break;
            case "Сначала дорогое":
                newSortedData = [...filteredProducts].sort(
                    (a, b) => b.price - a.price
                );
                break;
            default:
                break;
        }
        switch (valueDate) {
            case "Сначала старое":
                newSortedData = [...filteredProducts].sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                );
                break;
            case "Сначала новое":
                newSortedData = [...filteredProducts].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                break;
            default:
                break;
        }

        setDisplayedProducts(newSortedData);
        setSortedData(newSortedData);
    }, [filter, value, valuePrice, valueDate, products]);

    return (
        <div className="catalog_right">
            <Sorting
                sort={value}
                onClickPrice={handleOptionPriceClick}
                onClick={handleOptionClick}
                onClickDate={handleOptionDateClick}
            />
            <div className="goods catalog_goods">
                <div className="goods_wrapper" ref={goodsWrapperRef}>
                    {displayedProducts.length === 0 ? (
                        <p className="undefined">Товар не найден</p>
                    ) : (
                        displayedProducts.map((item, index) => (
                            <div className="card" key={index}>
                                <img
                                    className="goods_img"
                                    src={item.img}
                                    alt={item.name}
                                />
                                <div className="goods_text">
                                    <h3 className="goods_name">{item.name}</h3>
                                    {Object.keys(propertyMap).find(
                                        (key) => item[key]
                                    ) && (
                                        <p
                                            className={`goods_${Object.keys(
                                                propertyMap
                                            ).find((key) => item[key])}`}
                                        >
                                            {
                                                propertyMap[
                                                    Object.keys(
                                                        propertyMap
                                                    ).find((key) => item[key])
                                                ]
                                            }{" "}
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
                                    <p className="goods_price">
                                        Цена: {item.price} тг.
                                    </p>
                                    <p className="rate">
                                        Рейтинг:{" "}
                                        <span className="rating">
                                            {item.rating}
                                        </span>
                                    </p>
                                    <p className="date">
                                        Дата:{" "}
                                        <span className="date_span">
                                            {item.date}
                                        </span>
                                    </p>
                                </div>
                                <div className="card_btn">
                                    <Link
                                        className="product_check"
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
