import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const UpdateDescription = ({ functionUpdatePrice, food, deleteHambuger, setDeleteHambuger }) => {

    const { register, handleSubmit, reset } = useForm()

    const [changePrice, setChangePrice] = useState()

    const objReset = {
        description: ''
    }

    const onSubmit = e => {
        let obj = {
            id: food.id,
            image: food.image,
            name: food.name,
            size: food.size,
            description: e.description,
            price: food.price
        }
        setChangePrice(obj)
        reset(objReset)
    }

    const updateFunction = id => {
        const getConfig = () => ({
            headers: {
                "Content-Type": "application/json",
            }
        });
        const URL = `https://sheet.best/api/sheets/fd1c65f8-e4d0-4d50-8e90-4cf7b2f8ca77/id/*${id}*`
        axios.put(URL, changePrice, getConfig())
            .then(res => console.log('we did it'))
            .catch(err => console.log(err))
        functionUpdatePrice()
        setDeleteHambuger(!deleteHambuger)
    }
    return (
        <article className="main_form">
            <form className='Hamburger_form' onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register("description")} />

                <button>enter</button>
            </form>
            <button className='Update' onClick={(() => updateFunction(food.id))}>update</button>
        </article>
    )
}

export default UpdateDescription