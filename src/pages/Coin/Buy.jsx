import React, { useContext, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'

function Buy({ handleBuyPopup, buyPopup, coinName, coinSymbol, cp, coinImage }) {

    const { setCurrency } = useContext(CoinContext);
    const { currency } = useContext(CoinContext);

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

    const [count, setCount] = useState(0);

    const handleCount = (e) => {
        setCount(e.target.value)
    }

    let totalAmount = cp * count;
    return (
        <>
            {buyPopup && (
                <div className='h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/75'>

                    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent text-black duration-200 p-4 rounded shadow-md w-[300px] border-solid border-2 border-white'>

                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold mx-14  text-white '> Buy <span className='bg-violet-700 text-white rounded-full p-2 '>{coinName}</span></h1>
                            <div className='text-2xl cursor-pointer' onClick={handleBuyPopup}>
                                <i class="fa-solid fa-xmark"></i>
                            </div>

                        </div>

                        <form>
                            <div className='flex flex-wrap mb-4 mt-2.5'>
                                <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                                    <label className='font-bold text-black bg-white tracking-wide mb-2 text-lg rounded-full p-1'>
                                        Count
                                    </label>
                                    <input className='text-gray-700 border appearance-none block text-lg p-1 mt-2' type='number' value={count} onChange={handleCount} />
                                </div>
                            </div>
                            <div className='w-full px-3'>
                                <label className='font-bold text-black bg-white tracking-wide mb-2 text-lg rounded-full p-1'>
                                    Crypto Currency
                                </label>
                                <h2 className='text-white font-bold pt-2 text-lg flex gap-2'>{coinName}-{coinSymbol.toUpperCase()} <img src={coinImage} className='w-9' /></h2>
                            </div>

                            <div className='w-full md:w-1/2 px-3 mt-2'>
                                <label className='font-bold text-black bg-white tracking-wide mb-2 text-lg rounded-full p-1 mt-2'>Currency</label>
                                <select className='px-3 text-black mt-2 ml-2' onChange={currencyHandler}>
                                    <option value='usd'>USD</option>
                                    <option value='eur'>EUR</option>
                                    <option value='inr'>INR</option>
                                </select>
                            </div>

                            <div className='w-full px-3 mt-2 flex gap-2'>
                                <label className='font-bold text-white tracking-wide text-lg rounded-full mt-2'>Current Price:</label>
                                <h2 className='text-white font-bold mt-3'>{currency.symbol}{cp}</h2>
                            </div>

                            <div className='w-full px-3 mt-2 flex gap-2'>
                                <label className='font-bold text-white tracking-wide text-lg rounded-full mt-2'>Total payable:</label>
                                <h2 className='text-white font-bold mt-3'>{currency.symbol}{totalAmount}</h2>
                            </div>

                            <div>
                                <button className='mx-14' onClick={handleBuyPopup}>Buy</button>
                            </div>
                        </form>
                    </div>

                </div>
            )
            }
        </>
    )
}

export default Buy
