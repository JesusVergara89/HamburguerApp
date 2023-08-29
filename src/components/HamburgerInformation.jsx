import React, { useState } from 'react'
import HamburguerCard from './HamburguerCard'
import UpdateCard from './UpdateCard'

const HamburgerInformation = ({ food, deleteHambuger, setDeleteHambuger }) => {

     const [updatePrice, setUpdatePrice] = useState(true)
    
     const functionUpdatePrice = () => {
        setUpdatePrice(!updatePrice)
     }
     
  return (
    <article className="Hamburger_card">
        {
           updatePrice ?
           
           <HamburguerCard 
           food={food}
           deleteHambuger={deleteHambuger}
           setDeleteHambuger={setDeleteHambuger}
           functionUpdatePrice={functionUpdatePrice}
           />
           :
           <UpdateCard
           food={food}
           functionUpdatePrice={functionUpdatePrice}
           deleteHambuger={deleteHambuger}
           setDeleteHambuger={setDeleteHambuger}
           />
        }

    </article>
  )
}

export default HamburgerInformation