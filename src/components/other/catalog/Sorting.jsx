import { useEffect } from "react";

import arrowDown from "../../images/arrow-down.png";
import swap from "../../images/swap.png";

function Sorting() {
    useEffect(() => {
        const sortOne = document.querySelector(".sort_one");
        const optionsOne = sortOne.querySelectorAll(".option");
        let selectedOption = optionsOne[0];
        const sortBtns = document.querySelectorAll(".sort_btn");
        const sortContainers = document.querySelectorAll(".sort");

        optionsOne.forEach((option) => {
            option.addEventListener("click", () => {
                if (selectedOption) {
                    selectedOption.classList.remove("checked");
                }
                option.classList.add("checked");
                selectedOption = option;
                
            });

            sortContainers.forEach((sort) => {
                sort.addEventListener("mouseover", () => {
                    sort.style.visibility = "visible";
                });
            });
        });

        const sortTwo = document.querySelector(".sort_two");
        const optionsTwo = sortTwo.querySelectorAll(".option");
        let selectedOptionTwo = optionsTwo[0];

        optionsTwo.forEach((option) => {
            option.addEventListener("click", () => {
                if (option === selectedOptionTwo) {
                    option.classList.remove("checked");
                    selectedOptionTwo = null;
                } else {
                    if (selectedOptionTwo) {
                        selectedOptionTwo.classList.remove("checked");
                    }
                    option.classList.add("checked");
                    selectedOptionTwo = option;
                }
            });
        });

        const sortThree = document.querySelector(".sort_three");
        const optionsThree = sortThree.querySelectorAll(".option");
        let selectedOptionThree = optionsThree[0];

        optionsThree.forEach((option) => {
            option.addEventListener("click", () => {
                if (option === selectedOptionThree) {
                    option.classList.remove("checked");
                    selectedOptionThree = null;
                } else {
                    if (selectedOptionThree) {
                        selectedOptionThree.classList.remove("checked");
                    }
                    option.classList.add("checked");
                    selectedOptionThree = option;
                }
            });
        });

        let timeoutId;

        sortBtns.forEach((btn, index) => {
            btn.addEventListener("mouseover", () => {
                sortBtns.forEach((btn, index) => {
                    btn.addEventListener("mouseover", () => {
                        sortContainers.forEach((container, i) => {
                            if (i === index) {
                                container.style.visibility = "visible";
                            } else {
                                container.style.visibility = "hidden";
                            }
                        });
                    });

                    btn.addEventListener("mouseout", () => {
                        sortContainers.forEach((container, i) => {
                            if (i === index) {
                                container.style.visibility = "hidden";
                            }
                        });
                    });
                });
            });

            btn.addEventListener("mouseout", () => {
                timeoutId = setTimeout(() => {
                    sortContainers.forEach((container, i) => {
                        if (i === index) {
                            container.style.visibility = "hidden";
                        }
                    });
                }, 400);
            });

            sortContainers[index].addEventListener("mouseover", () => {
                clearTimeout(timeoutId);
            });

            sortContainers[index].addEventListener("mouseout", () => {
                sortContainers[index].style.visibility = "hidden";
            });
        });
    });

    return (
        <div className="sorting">
            <div className="sort_btns">
                <button className="sort_btn sort_btn_one">
                    <img src={swap} className="icon swap" alt="" />{" "}
                    <span className="value">По популярности</span>{" "}
                    <img className="arrow-down icon" src={arrowDown} alt="" />
                </button>
                <button className="sort_btn sort_btn_two">
                    По цене{" "}
                    <img className="arrow-down icon" src={arrowDown} alt="" />
                </button>
                <button className="sort_btn sort_btn_three">
                    По дате{" "}
                    <img className="arrow-down icon" src={arrowDown} alt="" />
                </button>
            </div>
            <div className="sort_hidden">
                <div className="sort_one sort">
                    <div className="option checked">По популярности</div>
                    <div className="option">По рейтингу</div>
                    <div className="option">По возрастанию цены</div>
                    <div className="option">По убыванию цены</div>
                    <div className="option">Сначала выгодные</div>
                </div>
                <div className="sort_two sort">
                    <div className="option">Сначала дешевое</div>
                    <div className="option">Сначала дорогое</div>
                </div>
                <div className="sort_three sort">
                    <div className="option">Сначала новое</div>
                    <div className="option">Сначала старое</div>
                </div>
            </div>
        </div>
    );
}

export default Sorting;
