import Categories from "./components/other/Categotries";
import GoodsRender from "./components/other/GoodsRender";
import Stock from "./components/other/Stock";

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