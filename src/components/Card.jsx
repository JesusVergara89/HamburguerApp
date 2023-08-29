import { useEffect, useState } from 'react'
import useFood from '../hooks/useFood'
import HamburgerInformation from './HamburgerInformation'

const Card = ({reload}) => {

    const [deleteHambuger, setDeleteHambuger] = useState(false)

    const functionHelper = () => {
        setDeleteHambuger(!deleteHambuger)
    }

    const foods = useFood(deleteHambuger,reload)

    useEffect(()=>{
        functionHelper()
    },[reload])

    return (
        <article className="main_Card_food">
            {
                foods?.map((food, i) => (
                    <HamburgerInformation
                        food={food}
                        key={food.id}
                        deleteHambuger={deleteHambuger}
                        setDeleteHambuger={setDeleteHambuger}
                    />
                ))
            }
        </article>
    )
}

export default Card