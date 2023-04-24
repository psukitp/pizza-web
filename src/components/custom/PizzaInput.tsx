import './pizzaInput.scss'

const PizzaInput = (props: { width: string, placeholder: string, onChange: () => void }) => {
    return (
        <>
            <input className='pizza-input'
                placeholder={props.placeholder}
                style={{ width: props.width }}
                onChange={props.onChange} />
        </>
    )
}

export default PizzaInput