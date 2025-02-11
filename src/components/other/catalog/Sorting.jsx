import { useEffect, useState } from "react";

import arrowDown from "../../images/arrow-down.png";
import swap from "../../images/swap.png";

function Sorting(props) {
    useEffect(() => {
        const sortOne = document.querySelector(".sort_one");
        const optionsOne = sortOne.querySelectorAll(".option");
        let selectedOption = optionsOne[0];

        optionsOne.forEach((option) => {
            option.addEventListener("click", () => {
                if (selectedOption) {
                    selectedOption.classList.remove("checked");
                }
                option.classList.add("checked");
                selectedOption = option;

            });
        });

        const sortTwo = document.querySelector(".sort_two");
        const optionsTwo = sortTwo.querySelectorAll(".option");
        let selectedOptionTwo = null;

        optionsTwo.forEach((option) => {
            option.addEventListener("click", () => {
                if (selectedOptionTwo) {
                    selectedOptionTwo.classList.remove("checked");
                }
                option.classList.add("checked");
                selectedOptionTwo = option;
            });
        });

        const sortThree = document.querySelector(".sort_three");
        const optionsThree = sortThree.querySelectorAll(".option");
        let selectedOptionThree = null;

        optionsThree.forEach((option) => {
            option.addEventListener("click", () => {
                if (selectedOptionThree) {
                    selectedOptionThree.classList.remove("checked");
                }
                option.classList.add("checked");
                selectedOptionThree = option;
            });
        });
        
    }, []);



    return (
        <div className="sorting">
            <div className="dropdown dropdown_one">
                <button className="sort_btn sort_btn_one">
                    <img src={swap} className="icon swap" alt="" />{" "}
                    <span className="value">{props.sort}</span>{" "}
                    <img className="arrow-down icon_one icon" src={arrowDown} alt="" />
                </button>
                <div className="sort_one sort">
                    <div className={`option ${props.sort === 'По популярности' ? 'checked' : ''}`} onClick={props.onClick}>По популярности</div>
                    <div className={`option ${props.sort === 'По рейтингу' ? 'checked' : ''}`} onClick={props.onClick}>По рейтингу</div>
                    <div className={`option ${props.sort === 'По возрастанию цены' ? 'checked' : ''}`} onClick={props.onClick}>По возрастанию цены</div>
                    <div className={`option ${props.sort === 'По убыванию цены' ? 'checked' : ''}`} onClick={props.onClick}>По убыванию цены</div>
                </div>
            </div>

            <div className="dropdown dropdown_two">
                <button className="sort_btn sort_btn_two">
                    По цене{" "}
                    <img className="arrow-down icon_two icon" src={arrowDown} alt="" />
                </button>
                <div className="sort_two sort">
                    <div className={`option`} onClick={props.onClickPrice}>Сначала дешевое</div>
                    <div className={`option`} onClick={props.onClickPrice}>Сначала дорогое</div>
                </div>
            </div>

            <div className="dropdown dropdown_three">
                <button className="sort_btn sort_btn_three">
                    По дате{" "}
                    <img className="arrow-down icon_three icon" src={arrowDown} alt="" />
                </button>

                <div className="sort_three sort">
                    <div className="option" onClick={props.onClickDate}>Сначала новое</div>
                    <div className="option" onClick={props.onClickDate}>Сначала старое</div>
                </div>
            </div>
        </div>
    );
}

export default Sorting;
