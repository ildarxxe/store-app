import data from "./orders.json";
import React from "react";

function OrderList() {
    const getStatusColor = (status) => {
        switch (status) {
            case "Доставлен":
                return "yellow";
            case "Выполнен":
                return "green";
            case "В обработке":
                return "orange";
            case "Ожидает":
                return "grey";
            default:
                return "grey";
        }
    };

    return (
        <div className="order_list">
            <h1 className="orders_title">Ваши заказы</h1>
            <div className="orders_cards">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`basket-card order_card status-${getStatusColor(
                            item.status
                        )}`}
                    >
                        <div className="basket-card_text">
                            <p className="basket-card_title status">
                                Статус: {item.status}
                            </p>
                            <p className="basket-card_price">
                                Дата: {item.date}
                            </p>
                            <p className="basket-card_quantity">
                                Сумма: {item.summ}
                            </p>
                        </div>
                        <div className="basket-btn_cont">
                            <button className="basket-card_delete">
                                Детали заказа
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderList;
