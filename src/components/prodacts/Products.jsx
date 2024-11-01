import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Products.scss"

const BASE_URL = "https://dummyjson.com"

const Products = () => {

    const [product, setProdact] = useState(null);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/recipes`)
            .then(res => {
                // console.log(res.data.products)
                setProdact(res.data.recipes)
            })
            .catch(err => console.log(err))
            .finally()
    }, [])

    console.log(product);

    const productItem = product?.map((pro) => (
        <div className='products__box__curd' key={pro.id}>
            <img className='products__box__curd__img' src={pro.image} alt="" />
            <div className='products__box__curd__groupone'>
                <h3 className='products__box__curd__groupone__name'>{pro.name}</h3>
                <h3 className='products__box__curd__groupone__prisce'>{pro.servings}$</h3>
            </div>
            <div className='products__box__curd__grouptwo'>
                <h3 className='products__box__curd__grouptwo__oshxona'>Cuisine</h3>
                <h3 className='products__box__curd__grouptwo__restaran'>{pro.cuisine}</h3>
            </div>
            <div className='products__box__curd__grouptheree'>
                <button className='products__box__curd__grouptheree__btn'>+</button>
                <h3 className='products__box__curd__grouptheree__raiting'>{pro.rating}</h3>
            </div>
        </div>
    ))

    return (
        <>

            <div className='container'>
                <div className='products'>
                    <h3 className='products__text__top'>Menu</h3>
                    <h2 className='products__text__center'>Food Full of treaty Love</h2>
                    <p className='products__text__buttom'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
                    <div className='products__box'>
                        {
                            productItem
                        }
                    </div>
                    <button className='products__btn'>Learn More</button>
                </div>
            </div>

        </>
    )
}

export default Products