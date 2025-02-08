import { useParams } from "react-router-dom";
import data from "../goods.json";

function Item() {
    const { productName } = useParams();
    const product = data.find((p) => p.name === productName);

    if (!product) {
        return <div>Товар не найден</div>;
    }

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

    return (
        <div className="item">
            <h1>{product.name}</h1>
            <div className="image-gallery">
                <img
                    src={product.img}
                    alt={product.name}
                    className="product-image"
                />
            </div>
            <div className="product-info">
                <p className="product-description">
                    {product.description || "Описание отсутствует"}
                </p>
                <div className="product-properties">
                    {Object.keys(product).map((key) => {
                        if (propertyMap[key] && product[key]) {
                            return (
                                <p key={key} className={`product-${key}`}>
                                    {propertyMap[key]}: {product[key]}
                                </p>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>

            <div className="product-actions">
                <p className="product-price">
                    {product.price + " тг." || "Цена не указана"}
                </p>
                <button className="add-to-cart">Добавить в корзину</button>
            </div>

            <div className="product-reviews">
                {product.reviews.map((review, index) => (
                    <p key={index} className="review">
                        Отзыв: {review}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Item;
