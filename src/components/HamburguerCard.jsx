import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HamburguerCard = ({ food, deleteHambuger, setDeleteHambuger, functionUpdatePrice }) => {

    const [buy, setBuy] = useState(true)

    const toBuy = () => {
        setBuy(!buy)
    }

    const functionDeleteHumburger = (id) => {
        const targetElement = 'id'
        const targetId = id
        const URL = `https://sheet.best/api/sheets/fd1c65f8-e4d0-4d50-8e90-4cf7b2f8ca77/${targetElement}/*${targetId}*`
        axios.delete(URL)
            .then(res => {
                console.log(res)
                setDeleteHambuger(!deleteHambuger)
            })
            .catch(err => console.log(err))
    }

    return (
        <Card className='Card_food' style={{ width: '12rem' }}>
            <Card.Img className='Card_img' variant="top" src={food.image} />
            <Card.Body>
                <Card.Title className='Card_food_tittle'>{food.name}</Card.Title>
                <Card.Text className='Card_food_size'>
                    {food.size}
                </Card.Text>
                <Card.Text className='Card_food_description'>
                    {food.description}
                </Card.Text>
                <Card.Text className='Card_food_price'>
                    {`$ ${food.price}`}
                </Card.Text>
                <div className="Card_container_btn">
                    <Button className='Card_btn' onClick={toBuy} variant="primary">{buy ? <i className='bx bx-cart-download'></i> : <i className='bx bxs-bowl-hot'></i>}</Button>
                    <Button className='Card_btn_delete' onClick={(() => functionDeleteHumburger(food.id))} variant="primary"><i className='bx bxs-trash'></i></Button>
                    <button onClick={functionUpdatePrice} className='Card_btn-update' >Update <br/> items</button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default HamburguerCard