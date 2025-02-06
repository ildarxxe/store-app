import BasketCard from "./BasketCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from './basketGoods.json';

function Basket() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantities, setQuantities] = useState(() => {
        const storedQuantities = localStorage.getItem('quantities');
        return storedQuantities ? JSON.parse(storedQuantities) : {};
    });

    const handleQuantityChange = (newQuantities) => {
        setQuantities(newQuantities);
        calculateTotalPrice(newQuantities);
    };

    const calculateTotalPrice = (currentQuantities) => {
        let sum = 0;
        data.forEach((item) => {
            const quantity = currentQuantities[item.name] || 0;
            sum += quantity * item.price;
        });
        setTotalPrice(sum);
    };

    useEffect(() => {
        calculateTotalPrice(quantities);
    }, [quantities]);

    useEffect(() => {
        localStorage.setItem('quantities', JSON.stringify(quantities));
    }, [quantities]);

    return (
        <div className="basket">
            <div className="basket_text">
                <h1 className="basket_summ">Общая стоимость: {totalPrice} тг.</h1>
                <h1 className="basket-cards_title">Товары в корзине:</h1>
            </div>
            <BasketCard onQuantityChange={handleQuantityChange}/>
            <Link to="/checkout" className="order_btn">Оформить заказ</Link>
        </div>
    );
}

export default Basket;
