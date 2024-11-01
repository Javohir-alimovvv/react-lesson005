import React from 'react'
import "./Header.scss"
import logo from "../../assets/images/logojon.png"

const navbarItems = ["Home", "About us", "Menu", "Features", "Contact us"]

const Header = () => {

    const items = navbarItems?.map((list) => (
        <ul className='header__content'>
            <li className='item__link' key={list.id}>{list}</li>
        </ul>
    ))

    return (
        <>
            <header className='header__big'>
                <div className="container">
                    <div className="header">
                        <a href="#"><img className='header__logo' src={logo} alt="" /></a>
                        <nav className='navbar__item'>
                            {items}
                        </nav>
                        <div className='btn__gr'>
                            <button className='header__item__btn'>Booking Now</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header