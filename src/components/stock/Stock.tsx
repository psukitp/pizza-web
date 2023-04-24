import About from "../about/About";
import Main from "../cards/Main";
import StockCard from "./StockCard";
import './stock.scss'

const Stock = () => {
    return (
        <>
            <section className="stock">
                <div className="container">
                    <div className="stock__cards">
                        <StockCard />
                        <StockCard />
                        <StockCard />
                        <StockCard />
                    </div>
                    <Main type='pizza'/>
                    <About />
                </div>
            </section>
        </>
    )
}

export default Stock;