import React from 'react'
import "./Hero.scss"
import heroImg from "../../assets/images/CSmJnTefxM 1.png"

const Hero = () => {
    return (
        <>
        
            <div className='container'>
                <div className='hero'>
                    <div className='hero__left__content'>
                        <h2 className='hero__left__top__text'>Making time a good time by making food the good food.</h2>
                        <p className='hero__left__center__text'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                        <div className='hero__left__gr'>
                            <button className='hero__left__gr__btnone'>Order Now</button>
                            <button className='hero__left__gr__btnone'>Food Details</button>
                        </div>
                    </div>
                    <div className='hero__right'>
                        <div className='hero__right__box'>
                            <img className='hero__right__box__img' src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Hero