import './pizzaLabel.scss'

const PizzaLabel = (props: { text: string }) => {
    return (
        <>
            <div className="pizza-label">
                {props.text}
            </div>
        </>
    )
}

export default PizzaLabel