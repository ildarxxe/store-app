import Categories from "./components/other/home/Categotries";
import GoodsRender from "./components/other/home/GoodsRender";
import Stock from "./components/other/home/Stock";

function Home() {
    return (
        <div className="home">
            <Stock />
            <div className="d-f">
                <Categories />
                <GoodsRender />
            </div>
        </div>
    );
}

export default Home;