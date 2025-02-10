import data from "../goods.json";
import Sorting from "./Sorting";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from 'axios';

function CatalogGoods() {
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

    return (
        <div className="catalog_right">
            <Sorting />
            <div className="goods catalog_goods">
                <div className="goods_wrapper" ref={goodsWrapperRef}>
                    {data.map((item, index) => (
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
                                                Object.keys(propertyMap).find(
                                                    (key) => item[key]
                                                )
                                            ]
                                        }{" "}
                                        :{" "}
                                        {
                                            item[
                                                Object.keys(propertyMap).find(
                                                    (key) => item[key]
                                                )
                                            ]
                                        }
                                    </p>
                                )}
                                <p className="goods_price">
                                    Цена: {item.price} тг.
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CatalogGoods;
