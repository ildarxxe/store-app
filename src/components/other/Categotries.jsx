function Categories() {
    return (
        <div className="categories">
            <h1 className="category_title">Категории товаров:</h1>
            <div className="groups">
                <a href="/cloth" className="group"><h3 className="category_name">Одежда и обувь</h3></a>
                <a href="/electronics" className="group"><h3 className="category_name">Электроника</h3></a>
                <a href="/forhome" className="group"><h3 className="category_name">Товары для дома</h3></a>
                <a href="/beauti" className="group"><h3 className="category_name">Красота и здоровье</h3></a>
                <a href="/children" className="group"><h3 className="category_name">Детские товары</h3></a>
                <a href="/other" className="group"><h3 className="category_name">Другие категории</h3></a>
            </div>
        </div>
    );
}

export default Categories;