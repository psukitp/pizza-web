import './footer.scss'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__inner-logo">
                            <img src={require('./img/logo.png')} alt="Логотип" />
                        </div>
                        <div className="footer__inner-company">
                            <div className="footer__inner-title">
                                Куда пицца
                            </div>
                            <ul className='footer__inner-list'>
                                <li>
                                    О компании
                                </li>
                                <li>
                                    Пользовательское соглашение
                                </li>
                                <li>
                                    Условия гарантии
                                </li>
                            </ul>
                        </div>
                        <div className="footer__inner-help">
                            <div className="footer__inner-title">
                                Помощь
                            </div>
                            <ul className='footer__inner-list'>
                                <li>
                                    Ресторан
                                </li>
                                <li>
                                    Поддержка
                                </li>
                                <li>
                                    Отследить заказ
                                </li>
                            </ul>
                        </div>
                        <div className="footer__inner-contact">
                            <div className="footer__inner-title">
                                Контакты
                            </div>
                            <ul className='footer__inner-list'>
                                <li>
                                    +7 (926) 223-10-11
                                </li>
                                <li>
                                    Москва, ул. Юных Ленинцев, д.99
                                </li>
                                <li>
                                    Facebok
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
