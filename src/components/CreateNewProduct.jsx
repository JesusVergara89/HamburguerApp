import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';

const CreateNewProduct = ({ functionReload }) => {

    const newUuid = uuidv4();

    const { register, handleSubmit, reset } = useForm()

    const [showForm, setshowForm] = useState(true)

    const [newHamburger, setNewHamburger] = useState()

    const objReset = {
        id: '',
        image: '',
        name: '',
        size: '',
        description: '',
        price: ''
    }

    const functionShoeForm = () => {
        setshowForm(!showForm)
    }

    const onSubmit = e => {
        const obj = {
            id: newUuid,
            image: e.image,
            name: e.name,
            size: e.size,
            description: e.description,
            price: e.price
        }
        setNewHamburger(obj)
        reset(objReset)
    }

    const functionCreateHamburger = () => {
        const getConfig = () => ({
            headers: {
                "Content-Type": "application/json",
            }
        });
        const URL = 'https://sheet.best/api/sheets/fd1c65f8-e4d0-4d50-8e90-4cf7b2f8ca77'
        axios.post(URL, newHamburger, getConfig())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setNewHamburger(objReset)
        functionShoeForm()
        functionReload()
    }

    return (
        <article className="create_new_product">
            <button onClick={functionShoeForm} className="create_new_product_btn">
                Create new product
            </button>

            {showForm ?

                ''
                :
                <div className="create_new_product_container_form">
                    <form className='Hamburger_form' onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" placeholder='image' {...register("image")} />
                        <input type="text" placeholder='name' {...register("name")} />
                        <input type="text" placeholder='size' {...register("size")} />
                        <input type="text" placeholder='description' {...register("description")} />
                        <input type="text" placeholder='price' {...register("price")} />

                        <button>enter</button>
                    </form>
                    <button onClick={functionCreateHamburger} >Create</button>
                    <button onClick={functionShoeForm} >Return</button>
                </div>
            }

        </article>
    )
}

export default CreateNewProduct