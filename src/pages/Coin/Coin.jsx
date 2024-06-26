import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../components/LineChart/LineChart';
import { Link } from 'react-router-dom';
import Buy from './Buy';
import Sell from './Sell';

function Coin() {

    const { coinId } = useParams();

    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();
    const { currency } = useContext(CoinContext);
    const [buyPopup, setBuyPopup] = useState(false);
    const [sellPopup, setSellPopup] = useState(false);

    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-3iPC2ZcKT4BaukQkyf69Ekbf' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response => setCoinData(response))
            .catch(err => console.error(err));
    }

    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-3iPC2ZcKT4BaukQkyf69Ekbf' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
            .then(response => response.json())
            .then(response => setHistoricalData(response))
            .catch(err => console.error(err));
    }

    const handleBuyPopup = () => {
        setBuyPopup(!buyPopup);
    }

    const handleSellPopup = () => {
        setSellPopup(!sellPopup);
    }

    useEffect(() => {
        fetchCoinData();
        fetchHistoricalData();
    }, [currency])

    if (coinData && historicalData) {
        return (
            <div className='coin'>
                <div className="flex flex-col items-center gap-5 coin-name">
                    <img src={coinData.image.large} />
                    <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
                </div>

                <div className="coin-chart">
                    <LineChart historicalData={historicalData} />
                </div>

                <div className=" flex flex-col coin-info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour high</li>
                        <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour Low</li>
                        <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
                    </ul>
                </div>
                <div className='flex justify-center gap-10 mt-4'>
                    <div className='buy'>

                        <button className='rounded-3xl bg-white text-black gap-2.5 font-bold' onClick={handleBuyPopup}>BUY</button>
                        <Buy handleBuyPopup={handleBuyPopup} buyPopup={buyPopup} coinName={coinData.name} coinSymbol={coinData.symbol} cp={coinData.market_data.current_price[currency.name]} coinImage={coinData.image.large} />


                    </div>
                    <div className='sell'>
                        <button className='rounded-3xl bg-white text-black gap-2.5 font-bold' onClick={handleSellPopup}>SELL</button>
                        <Sell handleSellPopup={handleSellPopup} sellPopup={sellPopup} coinName={coinData.name} coinSymbol={coinData.symbol} cp={coinData.market_data.current_price[currency.name]} coinImage={coinData.image.large} />
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className='grid place-self-center spinner'>
                <div className="spin"></div>
            </div>
        )
    }

}

export default Coin
