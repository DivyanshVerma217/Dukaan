import React from 'react'
import img1 from "../img/logo.png"

function Header() {
  return (
    <div className='bg-[#146EB4] h-80'>
        <div className='flex flex-row justify-between max-w-5xl m-auto '>
        <div >
        <img className="h-20 w-60" src = {img1} alt = "logo"/>
        </div>
        <div className='flex flex-row justify-between'>
        <button className='mr-6 text-2xl font-medium text-white'>Sign in</button>
        <button className='m-6 text-2xl bg-white p-2 hidden  lg:flex font-medium text-[#146EB4] rounded-sm '>Download for PC</button>
        </div>
        </div>

    </div>
  )
}

export default Header