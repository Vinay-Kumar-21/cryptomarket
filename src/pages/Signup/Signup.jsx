import React from 'react'

function Signup() {
    return (
        <>
            <div className='flex flex-col items-center text-center mx-auto my-20 gap-9'>
                <h1 className='text-4xl'>Largest <br /> Crypto MarketPlace</h1>
                <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
            </div>

            <div className='max-w-md mx-auto p-4 rounded shadow-md border-solid border-2 border-white'>
                <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
                <form>
                    <div className='mb-4'>
                        <label className='block text-lg font-bold mb-2'>Name</label>
                        <input type='text' placeholder='Name' className='shadow appearance-none border rounded w-full focus:outline-none focus:shadow-outline text-black'></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-lg font-bold mb-2'>Email</label>
                        <input type='email' placeholder='email' className='shadow appearance-none border rounded w-full focus:outline-none text-black focus:shadow-outline' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-lg font-bold mb-2'>Password</label>
                        <input type='password' placeholder='password' className='shadow appearance-none border rounded w-full text-black focus:outline-none focus:shadow-outline' />
                    </div>

                    <div className=' flex justify-self-center'>
                        <button className='rounded-2xl bg-white text-black px-2.5 text-base  gap-2.5 font-medium border-none cursor-pointer' type='submit'>SignUp</button>
                    </div>

                </form>
            </div>
        </>


    )
}

export default Signup
