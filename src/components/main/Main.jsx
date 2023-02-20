import Card from "./Card"
import MainStyle from "./main.module.scss"
import {data} from "../../utils/data"

const Main = () => {
    return (
        <div className={MainStyle.cardsContainer}>
            {data.map((player, index)=> <Card {...player} key={index}/>)}
        </div>
  )
}

export default Main