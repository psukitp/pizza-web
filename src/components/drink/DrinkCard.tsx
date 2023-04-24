import './drinkCard.scss'

const DrinkCard = () => {

    return (
        <>
            <div className="drink__card">
                <div className="drink__card-img">
                    <img src={require('./img/baikal.jpg')} alt="Напиток" />
                </div>
                <div className="drink__card-inner">
                    <div className="drink__card-title">
                        Байкал 0,5л
                    </div>
                    <div className="drink__card-bottom">
                        <div className="drink__card-btn">
                            <button>Выбрать</button>
                        </div>
                        <div className="drink__card-price">
                            99 ₽
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DrinkCard;