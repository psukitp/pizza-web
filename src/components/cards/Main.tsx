import PizzaCard from './PizzaCard';
import './pizza.scss'
import { IType } from './mainModel';
import DrinkCard from '../drink/DrinkCard';

const Main = ({ type }: IType) => {

    return (
        <>
            <section className="cards">
                <div className="container">
                    <div className="cards__inner">
                        <div className="cards__inner-head">
                            <div className="cards__inner-title">
                            {type === 'pizza' ? 'Пицца' : null}
                            {type === 'drink' ? 'Напитки' : null}
                            </div>
                            <div className="cards__inner-filter">
                                <button className='cards__inner-filter--btn'>
                                    <img src={require('./img/filter_icon.png')} />
                                    Фильтры
                                </button>
                            </div>
                        </div>
                        <div className="cards__inner-cards">
                            {type === 'pizza' ? <PizzaCard /> : null}
                            {type === 'drink' ? <DrinkCard/> : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main;