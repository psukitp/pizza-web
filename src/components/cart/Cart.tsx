import PizzaInput from '../custom/PizzaInput'
import PizzaLabel from '../custom/PizzaLabel'
import './cart.scss'

const Cart = () => {

    const handleChange = () => {

    }


    return (
        <>
            <div className="cart">
                <div className="container container__cart">
                    <div className="cart__inner">
                        <div className="cart__inner-title">
                            Ваш заказ
                        </div>
                        {/* Карточки заказанных товаров */}

                        <div className="cart__client">
                            <div className="cart__title-form">
                                О вас
                            </div>
                            <div className="cart__client-about">

                                <div className="cart__client-about--name">
                                    <PizzaLabel
                                        text='Имя*' />
                                    <PizzaInput
                                        width='270px'
                                        placeholder='Алексей'
                                        onChange={handleChange} />
                                </div>

                                <div className="cart__client-about--tel">
                                    <PizzaLabel
                                        text='Телефон*' />
                                    <PizzaInput
                                        width='270px'
                                        placeholder='+7 (123) 456-78-90'
                                        onChange={handleChange} />
                                </div>

                                <div className="cart__client-about--mail">
                                    <PizzaLabel
                                        text='Почта' />
                                    <PizzaInput
                                        width='270px'
                                        placeholder='mail@mail.ru'
                                        onChange={handleChange} />
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className="cart__delivery">
                            <div className="cart__title-form">
                                Доставка
                            </div>

                            <div className="cart__delivery-street">
                                <PizzaLabel
                                    text='Улица*' />
                                <PizzaInput
                                    width='970px'
                                    placeholder='1'
                                    onChange={handleChange} />
                            </div>

                            <div className="cart__delivery-inner">
                                <div className="cart__delivery--home">
                                    <PizzaLabel
                                        text='Дом*' />
                                    <PizzaInput
                                        width='155px'
                                        placeholder='1'
                                        onChange={handleChange} />
                                </div>

                                <div className="cart__delivery--door">
                                    <PizzaLabel
                                        text='Подъезд*' />
                                    <PizzaInput
                                        width='155px'
                                        placeholder='2'
                                        onChange={handleChange} />
                                </div>

                                <div className="cart__delivery--floor">
                                    <PizzaLabel
                                        text='Этаж*' />
                                    <PizzaInput
                                        width='155px'
                                        placeholder='3'
                                        onChange={handleChange} />
                                </div>

                                <div className="cart__delivery--flat">
                                    <PizzaLabel
                                        text='Квартира*' />
                                    <PizzaInput
                                        width='155px'
                                        placeholder='4'
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cart