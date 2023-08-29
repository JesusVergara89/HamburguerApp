import { useState } from 'react'
import './Hamburguer.css'
import Card from './components/Card'
import CreateNewProduct from './components/CreateNewProduct'

function Hamburguer() {

    const [reload, setReload] = useState(false)
 
    const functionReload = () => {
        setReload(!reload) 
    }

    return (
        <div className="Hamburguer">
            <CreateNewProduct
            functionReload={functionReload}
            />
            <Card
            reload={reload}
            />
        </div>
    )
}

export default Hamburguer