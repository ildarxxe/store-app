import data from "../goods.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GoodsRender() {
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

    useEffect(() => {
        const goodsWrapper = document.querySelector(".goods__wrapper");

        const handleClick = (event) => {
            if (event.target.classList.contains("heart")) {
                event.target.classList.toggle("fas");
            }
        };

        goodsWrapper.addEventListener("click", handleClick);

        return () => {
            goodsWrapper.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="goods">
            <div className="goods__title">
                <h1>Популярные товары</h1>
            </div>
            <div className="goods__wrapper">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <img
                            className="goods__img"
                            src={item.img}
                            alt={item.name}
                        />
                        <div className="goods__text">
                            <h3 className="goods_name">{item.name}</h3>
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
                                            Object.keys(propertyMap).find(
                                                (key) => item[key]
                                            )
                                        ]
                                    }:{" "}
                                    {
                                        item[
                                            Object.keys(propertyMap).find(
                                                (key) => item[key]
                                            )
                                        ]
                                    }
                                </p>
                            )}
                            <p className="goods__price">
                                Цена: {item.price} тг.
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
                ))}
            </div>
        </div>
    );
}

export default GoodsRender;
