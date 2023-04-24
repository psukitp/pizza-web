import './pizzaCard.scss'

const PizzaCard = () => {
    return (
        <>
            <div className="pizza__card">
                <div className="pizza__card-extratext">
                    NEW
                </div>
                <div className="pizza__card-img">
                    <img src={require('./img/pizza_cont.png')} />
                </div>
                <div className="pizza__card-inner">
                    <div className="pizza__card-title">
                        Чикен Сладкий Чили
                    </div>
                    <div className="pizza__card-text">
                        Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
                    </div>
                    <div className="pizza__card-bottom">
                        <div className="pizza__card-bottom--btn">
                            <button>Выбрать</button>
                        </div>
                        <div className="pizza__card-bottom--price">
                            399 ₽
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaCard;