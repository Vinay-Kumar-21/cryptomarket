import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow1.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'


function Navbar() {

    const { setCurrency } = useContext(CoinContext);

    const currencyHandler = (e) => {
        switch (e.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: <span>&#8364;</span> });
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", symbol: "₹" });
                break;
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
        }
    }
    return (
        <div className='flex items-center justify-between navbar'>
            <Link to={'/'}>
                <img src={logo} alt='' className='logo' />
            </Link>

            <ul className='flex gap-10 list-none'>
                <Link to={'/'}> <li>Home</li> </Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>

            <div className=" flex items-center nav-right">
                <select className='text-black' onChange={currencyHandler}>
                    <option value='usd'>USD</option>
                    <option value='eur'>EUR</option>
                    <option value='inr'>INR</option>
                </select>
                <Link to='/signup'>
                    <button className='flex items-center gap-2.5 font-medium border-none cursor-pointer'>Sign up <img src={arrow} className='flex' /></button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
