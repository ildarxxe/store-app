import React, { useState, useEffect } from "react";
import data from "./basketGoods.json";

function BasketCard({ onQuantityChange }) {
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const initialQuantities = data.reduce((acc, item) => {
            acc[item.name] = item.quantity;
            return acc;
        }, {});
        setQuantities(initialQuantities);
    }, []);

    const handleQuantityChange = (itemName, event) => {
        const newQuantities = { ...quantities };
        const newQuantity = parseInt(event.target.value) || 0;
        newQuantities[itemName] = newQuantity;
        setQuantities(newQuantities);
        onQuantityChange(newQuantities);
    };

    useEffect(() => {
        const delete_btn = document.querySelector('.basket-card_delete');
        delete_btn.addEventListener('click', ()=> {
            
        })
    });

    return (
        <div className="basket-cards">
            {data.map((item) => (
                <div key={item.id} className="basket-card">
                    <img src={item.img} alt={item.name} className="basket_img" />
                    <div className="basket-card_text">
                        <h3 className="basket-card_title">
                            Название: {item.name}
                        </h3>
                        <p className="basket-card_price">
                            Цена: {item.price} тг.
                        </p>
                        <p className="basket-card_quantity">
                            Количество: <input
                                className="input_quantity"
                                type="number"
                                value={quantities[item.name] || 0}
                                onChange={(event) => handleQuantityChange(item.name, event)}
                            />
                        </p>
                    </div>
                    <div className="basket-btn_cont">
                        <button className="basket-card_delete">Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BasketCard;