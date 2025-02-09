import { useEffect, useState } from "react";

import arrowDown from "../../images/arrow-down.png";
import swap from "../../images/swap.png";

function Sorting() {
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
    });

    const [selectedValue, setSelectedValue] = useState('По популярности');

    const handleOptionClick = (event) => {
        setSelectedValue(event.target.textContent);
    };

    return (
        <div className="sorting">
            <div className="dropdown dropdown_one">
                <button className="sort_btn sort_btn_one">
                    <img src={swap} className="icon swap" alt="" />{" "}
                    <span className="value">{selectedValue}</span>{" "}
                    <img className="arrow-down icon_one icon" src={arrowDown} alt="" />
                </button>
                <div className="sort_one sort">
                    <div className={`option ${selectedValue === 'По популярности' ? 'checked' : ''}`} onClick={handleOptionClick}>По популярности</div>
                    <div className={`option ${selectedValue === 'По рейтингу' ? 'checked' : ''}`} onClick={handleOptionClick}>По рейтингу</div>
                    <div className={`option ${selectedValue === 'По возрастанию цены' ? 'checked' : ''}`} onClick={handleOptionClick}>По возрастанию цены</div>
                    <div className={`option ${selectedValue === 'По убыванию цены' ? 'checked' : ''}`} onClick={handleOptionClick}>По убыванию цены</div>
                    <div className={`option ${selectedValue === 'Сначала выгодные' ? 'checked' : ''}`} onClick={handleOptionClick}>Сначала выгодные</div>
                </div>
            </div>

            <div className="dropdown dropdown_two">
                <button className="sort_btn sort_btn_two">
                    По цене{" "}
                    <img className="arrow-down icon_two icon" src={arrowDown} alt="" />
                </button>
                <div className="sort_two sort">
                    <div className="option">Сначала дешевое</div>
                    <div className="option">Сначала дорогое</div>
                </div>
            </div>

            <div className="dropdown dropdown_three">
                <button className="sort_btn sort_btn_three">
                    По дате{" "}
                    <img className="arrow-down icon_three icon" src={arrowDown} alt="" />
                </button>

                <div className="sort_three sort">
                    <div className="option">Сначала новое</div>
                    <div className="option">Сначала старое</div>
                </div>
            </div>
        </div>
    );
}

export default Sorting;
