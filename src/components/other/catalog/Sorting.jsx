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
            <div className="dropdown dropdown_one">
                <button
                    className="sort_btn sort_btn_one"
                    onClick={() => handleSortDirectionClick(props.sortDirection === "asc" ? "desc" : "asc")}
                >
                    <img src={swap} className="icon swap" alt="" />
                    <span className="value">
                        {props.sortBy === "popularity"
                            ? "По популярности"
                            : props.sortBy === "rating"
                            ? "По рейтингу"
                            : "По цене"}
                    </span>
                    <img className="arrow-down icon_one icon" src={arrowDown} alt="" />
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

            <div className="dropdown dropdown_two">
                <button
                    className="sort_btn sort_btn_two"
                    onClick={() => handlePriceSortClick(props.priceSort === "asc" ? "desc" : "asc")}
                >
                    По цене
                    <img className="arrow-down icon_two icon" src={arrowDown} alt="" />
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

            <div className="dropdown dropdown_three">
                <button
                    className="sort_btn sort_btn_three"
                    onClick={() => handleDateSortClick(props.dateSort === "asc" ? "desc" : "asc")}
                >
                    По дате
                    <img className="arrow-down icon_three icon" src={arrowDown} alt="" />
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