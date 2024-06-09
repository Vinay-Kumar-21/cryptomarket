import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

function Home() {

    const { allCoin, currency } = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('')

    const inputHandler = (e) => {
        setInput(e.target.value);
        if (e.target.value === "") {
            setDisplayCoin(allCoin)
        }
    }

    const searchHandler = async (e) => {
        e.preventDefault();
        const coins = await allCoin.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase());
        })
        setDisplayCoin(coins);
    }

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin]);

    return (
        <div className='home'>
            <div className=" flex flex-col items-center text-center hero">
                <h1>Largest <br /> Crypto MarketPlace</h1>
                <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>

                <form onSubmit={searchHandler} className='p-2 w-4/5 bg-white flex justify-between items-center gap-2.5'>
                    <input onChange={inputHandler} value={input} list='coinList' type='text' placeholder='search crypto...' className='outline-none border-none pl-2.5 text-black' required />

                    <datalist id='coinList'>
                        {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
                    </datalist>


                    <button type='submit' className='border-none cursor-pointer'>Search</button>
                </form>
            </div>

            <div className="crypto-table m-auto">
                <div className="table-layout grid items-center">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p className='text-center'>24H change</p>
                    <p className='text-right market-cap'>Market Cap</p>
                </div>
                {
                    displayCoin.slice(0, 25).map((item, index) => (
                        <Link to={`/coin/${item.id}`} className="table-layout grid items-center" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div className='flex items-center gap-2.5'>
                                <img src={item.image} className='w-9' />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                            <p className='text-right market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

export default Home
