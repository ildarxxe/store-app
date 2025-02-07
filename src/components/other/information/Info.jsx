import college_one from '../../images/college.jpeg';
import college_two from '../../images/college2.jpeg';
import college_three from '../../images/college3.jpeg';
import Reviews from './Reviews';

function Info() {
    return (
        <div className="info">
            <h1 className="info_title">О нас</h1>
            <div className="info_text">
                <p className="info_text_p">
                    Костанайский политехнический высший колледж сегодня – один
                    из лучших политехнических колледжей страны, входящий в ТОП –
                    10. Колледж готовит рабочие кадры для энергетической,
                    автомобильной отраслей промышленности, сельского хозяйства и
                    сферы услуг нашего региона. Высококвалифицированные
                    выпускники колледжа являются ценным кадровым ресурсом для
                    наших работодателей и не испытывают трудностей с
                    трудоустройством. Призываем вас сделать правильный выбор и
                    прийти учиться в наш колледж, чтобы получить востребованную
                    в стране рабочую профессию!
                </p>
            </div>
            <div className="info_images">
                <img src={college_one} alt="" />
                <img src={college_two} alt="" />
                <img src={college_three} alt="" />
            </div>
            <div className="info_reviews">
                <h1 className="reviews_title">Отзывы о нас</h1>
                <Reviews />
            </div>
        </div>
    );
}

export default Info;
