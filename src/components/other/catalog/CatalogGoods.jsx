import data from "../goods.json";
import Sorting from "./Sorting";

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

  return (
    <div className="catalog_right">
        <Sorting />
        <div className="goods catalog_goods">
        <div className="goods_wrapper">
            {data.map((item, index) => (
            <div className="card" key={index}>
                <img className="goods_img" src={item.img} alt={item.name} />
                <div className="goods_text">
                <h3 className="goods_name">{item.name}</h3>
                {Object.keys(propertyMap).find(key => item[key]) && (
                    <p className={`goods_${Object.keys(propertyMap).find(key => item[key])}`}>
                    {propertyMap[Object.keys(propertyMap).find(key => item[key])]} : {item[Object.keys(propertyMap).find(key => item[key])]}
                    </p>
                )}
                <p className="goods_price">Цена: {item.price} тг.</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}

export default CatalogGoods;