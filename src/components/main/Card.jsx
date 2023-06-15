import CardStyle from "./main.module.scss"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball } from '@fortawesome/free-solid-svg-icons'

const Card = ({name,img,statistics}) => {
    const [toggle, setToggle] = useState(true)
    const[point, rebound, assist, star] = statistics
    
    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <>
        {toggle ? 
        (
            <div className={CardStyle.cardContainer}>
                <div onClick={handleClick} className={CardStyle.imageContainer}>
                    <img src={img} alt="" />
                </div>
                <div className={CardStyle.nameContainer}>
                    <p>{name}</p>
                </div>

            </div>
        ) : 
        (
            <div className={CardStyle.cardContainer}>
                <div onClick={handleClick} className={CardStyle.statisticsContainer}>
                    <div className={CardStyle.statistics}>
                        <FontAwesomeIcon className={CardStyle.icon} icon={faBasketball} />
                        <p>{point}</p>
                    </div>
                    <div className={CardStyle.statistics}>
                        <FontAwesomeIcon className={CardStyle.icon} icon={faBasketball} />
                        <p>{rebound}</p>
                    </div>
                    <div className={CardStyle.statistics}>
                        <FontAwesomeIcon className={CardStyle.icon} icon={faBasketball} />
                        <p>{assist}</p>
                    </div>
                    <div className={CardStyle.statistics}>
                        <FontAwesomeIcon className={CardStyle.icon} icon={faBasketball} />
                        <p>{star}</p>
                    </div>
                </div>
                <div className={CardStyle.nameContainer}>
                    <p>{name}</p>
                </div>
            </div>
        )
        }
        </>
        
    )
}

export default Card