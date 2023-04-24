import { useState } from "react"
import SelectionCard from "./card/SelectionCard"
import { NavLink } from 'react-router-dom'
import './selection.scss'

const Selection = () => {
    return (
        <>
            <section className="selection">
                <div className="container">
                    <div className="selection__cards">
                        <NavLink to='/stock'>
                            <SelectionCard title='Акции' image_path='./img/stock_icon.png' />
                        </NavLink>
                        <NavLink to='/pizza'>
                            <SelectionCard title='Пицца' image_path='./img/pizza_icon.png' />
                        </NavLink>
                        <NavLink to='/drink'>
                            <SelectionCard title='Напитки' image_path='./img/drinks_icon.png' />
                        </NavLink>
                        <NavLink to='/deserts'>
                            <SelectionCard title='Десерты' image_path='./img/desets_icon.png' />
                        </NavLink>
                        <NavLink to='/sauces'>
                            <SelectionCard title='Соусы' image_path='./img/sauces_icon.png' />
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Selection