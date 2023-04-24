import { NavLink } from 'react-router-dom';
import './header.scss'

const Header = () => {

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__inner-city">
                            <select name="city" className='header__inner-city--selector'>
                                <option>Москва</option>
                                <option>Тюмень</option>
                            </select>
                            <div className="header__inner-city--delivery">
                                Среднее время доставки*: <span>00:24:19</span>
                            </div>
                        </div>
                        <div className="header__inner-info">
                            <div className="header__inner-info--time">
                                Время работы: с 11:00 до 23:00
                            </div>
                            <div className="header__inner-info--account">
                                Просто закажи пиццу!
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="header__bottom">
                        <div className="header__bottom-logo">
                            <img src={require('./img/logo.png')} />
                        </div>
                        <NavLink to='/cart' className='header__link'>
                            <button className='header__bottom-cart--btn'>
                                <img src={require('./img/cart_img.png')} />
                                0 ₽
                            </button>
                        </NavLink>
                    </div>
                </div>
                <hr />
            </header>
        </>
    )
}

export default Header;