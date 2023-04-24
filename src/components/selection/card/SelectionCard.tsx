import './selectionCard.scss'
import { ICard } from './selectionCardModels'



const SelectionCard = (props: ICard) => {
    return (
        <>
        <div className="selection__card">
            <img src={require('./img/pizza_icon.png')} alt='Иконка'/>
            <div className="selection__card-text">
                {props.title}
            </div>
        </div>
        </>
    )
}

export default SelectionCard 