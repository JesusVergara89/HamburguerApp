import React, { useState } from 'react'
import UpdatePrice from './UpdatePrice'
import UpdateImage from './UpdateImage'
import UpdateSize from './UpdateSize'
import UpdateDescription from './UpdateDescription'
import UpdateName from './UpdateName'

const UpdateCard = ({ functionUpdatePrice, food, deleteHambuger, setDeleteHambuger }) => {

    const [showPrice, setshowPrice] = useState(true)
    const [showImage, setshowImage] = useState(true)
    const [showSize, setShowSize] = useState(true)
    const [showDescription, setShowDescription] = useState(true)
    const [showName, setShowName] = useState(true)

    const functionshowPrice = () => {
        setshowPrice(false)
        setshowImage(true)
        setShowSize(true)
        setShowDescription(true)
        setShowName(true)
    }

    const functionshowImage = () => {
        setshowPrice(true)
        setshowImage(false)
        setShowSize(true)
        setShowDescription(true)
        setShowName(true)
    }

    const functionshowSize = () => {
        setshowPrice(true)
        setshowImage(true)
        setShowSize(false)
        setShowDescription(true)
        setShowName(true)
    }

    const functionshowDescription = () => {
        setshowPrice(true)
        setshowImage(true)
        setShowSize(true)
        setShowDescription(false)
        setShowName(true)
    }

    const functionshowName = () => {
        setshowPrice(true)
        setshowImage(true)
        setShowSize(true)
        setShowDescription(true)
        setShowName(false)
    }

    return (
        <article className="main_form">
            <div className="Container_Update">
                {
                    showPrice ?
                        ''
                        :
                        <UpdatePrice
                            food={food}
                            functionUpdatePrice={functionUpdatePrice}
                            deleteHambuger={deleteHambuger}
                            setDeleteHambuger={setDeleteHambuger}
                        />
                }
                {
                    showImage ?
                        ''
                        :
                        <UpdateImage
                            food={food}
                            functionUpdatePrice={functionUpdatePrice}
                            deleteHambuger={deleteHambuger}
                            setDeleteHambuger={setDeleteHambuger}
                        />
                }
                {
                    showSize ?
                        ''
                        :
                        <UpdateSize
                            food={food}
                            functionUpdatePrice={functionUpdatePrice}
                            deleteHambuger={deleteHambuger}
                            setDeleteHambuger={setDeleteHambuger}
                        />
                }
                {
                    showDescription ?
                        ''
                        :
                        <UpdateDescription
                            food={food}
                            functionUpdatePrice={functionUpdatePrice}
                            deleteHambuger={deleteHambuger}
                            setDeleteHambuger={setDeleteHambuger}
                        />
                }
                {
                    showName ?
                        ''
                        :
                        <UpdateName
                            food={food}
                            functionUpdatePrice={functionUpdatePrice}
                            deleteHambuger={deleteHambuger}
                            setDeleteHambuger={setDeleteHambuger}
                        />
                }
            </div>
            <div className="Container_btns_update">
                <h3 className="Container_tittle">
                    Which one do you want to update?
                </h3>
                <div className="Containers_options_update">
                    <button onClick={functionshowPrice}>price</button>
                    <button onClick={functionshowImage}>image</button>
                    <button onClick={functionshowSize}>size</button>
                    <button onClick={functionshowDescription}>descrip</button>
                    <button onClick={functionshowName}>name</button>
                    <button onClick={functionUpdatePrice}>Return</button>
                </div>
            </div>
        </article>
    )
}

export default UpdateCard