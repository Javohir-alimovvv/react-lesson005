import React from 'react'
import "./About.scss"
import kenyashka from "../../assets/images/kenyashka.png"

const About = () => {
    return (
        <>

            <div className="container">
                <div className='about'>
                    <div className='about__left'>
                        <div className='about__left__box'>
                            <img className='about__left__box__img' src={kenyashka} alt="" />
                        </div>
                    </div>
                    <div className='about__right'>
                        <h3 className='about__right__title'>About US       </h3>
                        <h2 className='about__right__caticory'>Food Stalls with Persons but  to  Product marketing plane
                            catlogues etc to. </h2>
                        <p className='about__right__description'>
                            There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also
                            equipment  make your marketing plane Effective.
                        </p>
                        <button className='about__right__button'>Read More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About