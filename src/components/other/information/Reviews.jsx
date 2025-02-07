import data from "./otzyvy.json";

function Reviews() {
    return (
        <div className="reviews">
            {data.map((item, index) => (
                <div className="review_card" key={index}>
                    <div className="user">
                        <img src={item.img} alt="" className="ava" />
                        <p className="review_name">{item.name}</p>
                    </div>
                    <p className="rate">Рейтинг: <span className="rating">{item.rate}</span></p>
                    <p className="review_description">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Reviews;
