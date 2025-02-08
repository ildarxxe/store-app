import data from "./fav.json";

function Favorites() {
    return (
        <div className="favorites">
            <div className="favorites_cards">
                {data.map((item, index) => (
                    <div key={index} className="basket-card favorite_card">
                        <img
                            src={item.img}
                            alt={item.name}
                            className="basket_img"
                        />
                        <div className="basket-card_text">
                            <h3 className="basket-card_title">{item.name}</h3>
                        </div>
                        <div className="basket-btn_cont">
                            <button className="basket-card_delete">
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;
