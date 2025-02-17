import { useState } from "react";
import arrowDown from "../../images/arrow-down.png";
import swap from "../../images/swap.png";

function Sorting(props) {
    const handleSortClick = (sortBy) => {
        props.onSortChange(sortBy);
    };

    const handleSortDirectionClick = (sortDirection) => {
        props.onSortDirectionChange(sortDirection);
    };

    const handlePriceSortClick = (priceSort) => {
        props.onPriceSortChange(priceSort);
    };

    const handleDateSortClick = (dateSort) => {
        props.onDateSortChange(dateSort);
    };

    return (
        <div className="sorting">
            <div className="sorting__dropdown sorting__dropdown_one">
                <button
                    className="sorting__button sorting__button_one"
                    onClick={() => handleSortDirectionClick(props.sortDirection === "asc" ? "desc" : "asc")}
                >
                    <img src={swap} className="sorting__icon sorting__icon_swap" alt="" />
                    <span className="value">
                        {props.sortBy === "popularity"
                            ? "По популярности"
                            : props.sortBy === "rating"
                            ? "По рейтингу"
                            : "По цене"}
                    </span>
                    <img className="arrow-down sorting__icon_one sorting__icon" src={arrowDown} alt="" />
                </button>
                <div className="sort_one sort">
                    <div
                        className={`option ${props.sortBy === "popularity" ? "checked" : ""}`}
                        onClick={() => handleSortClick("popularity")}
                    >
                        По популярности
                    </div>
                    <div
                        className={`option ${props.sortBy === "rating" ? "checked" : ""}`}
                        onClick={() => handleSortClick("rating")}
                    >
                        По рейтингу
                    </div>
                    <div
                        className={`option ${props.sortBy === "price" ? "checked" : ""}`}
                        onClick={() => handleSortClick("price")}
                    >
                        По цене
                    </div>
                </div>
            </div>

            <div className="sorting__dropdown sorting__dropdown_two">
                <button
                    className="sorting__button sorting__button_two"
                    onClick={() => handlePriceSortClick(props.priceSort === "asc" ? "desc" : "asc")}
                >
                    По цене
                    <img className="arrow-down sorting__icon_two sorting__icon" src={arrowDown} alt="" />
                </button>
                <div className="sort_two sort">
                    <div
                        className={`option ${props.priceSort === "asc" ? "checked" : ""}`}
                        onClick={() => handlePriceSortClick("asc")}
                    >
                        Сначала дешевое
                    </div>
                    <div
                        className={`option ${props.priceSort === "desc" ? "checked" : ""}`}
                        onClick={() => handlePriceSortClick("desc")}
                    >
                        Сначала дорогое
                    </div>
                </div>
            </div>

            <div className="sorting__dropdown sorting__dropdown_three">
                <button
                    className="sorting__button sorting__button_three"
                    onClick={() => handleDateSortClick(props.dateSort === "asc" ? "desc" : "asc")}
                >
                    По дате
                    <img className="arrow-down sorting__icon_three sorting__icon" src={arrowDown} alt="" />
                </button>
                <div className="sort_three sort">
                    <div
                        className={`option ${props.dateSort === "asc" ? "checked" : ""}`}
                        onClick={() => handleDateSortClick("asc")}
                    >
                        Сначала новое
                    </div>
                    <div
                        className={`option ${props.dateSort === "desc" ? "checked" : ""}`}
                        onClick={() => handleDateSortClick("desc")}
                    >
                        Сначала старое
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sorting;