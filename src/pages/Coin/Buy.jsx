import React from 'react'

function Buy({ handleBuyPopup, buyPopup, coinName }) {
    return (
        <>
            {buyPopup && (
                <div className='h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50'>
                    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black duration-200 p-4 rounded shadow-md w-[300px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold'> Buy {coinName}</h1>
                            <div className='text-2xl cursor-pointer' onClick={handleBuyPopup}>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>

                    </div>

                </div>
            )
            }
        </>
    )
}

export default Buy
