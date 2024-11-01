import React from 'react'
import "./Featur.scss"
import { texts } from '../static'

const practs = [
  texts?.map((item) => (
    <div className='feature__card' key={item.id}>
      <img className='feature__card__img' src={item.image} alt="" />
      <h3 className='feature__card__title'>{item.title}</h3>
      <p className='feature__card__desc'>{item.description}</p>
    </div>
  ))
]

const Featur = () => {
  return (
    <>
      <div className="container">
        <section className="featur">
          <h3 className='featur__top__text'>Features</h3>
          <h2 className='featur__top__text__two'>Food with a New Passion</h2>
          <div className='featur__group'>
            {
              practs
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Featur