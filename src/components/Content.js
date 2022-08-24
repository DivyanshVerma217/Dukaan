import React from 'react'
import grp1 from "../img/grp1.png"
import grp2 from "../img/grp2.png"
import grp3 from "../img/grp3.png"

function Content() {
  return (
    <div className='h-80 bg-[#c4d8e8] flex justify-center mt-20 py-3'>

    <div className='grid grid-cols-3 gap-2 max-w-5xl m-auto  '>
      <div className='flex flex-col text-center'>
        <div className='flex justify-center'><img className='h-10 w-10' src ={grp1} alt =""/></div>
        <h1 className='text-center mt-8 text-xl font-bold'>Search</h1>
        <p className='mt-4'>Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</p>
      </div>
      <div className='flex flex-col text-center'>
      <div className='flex justify-center'><img className='h-10 w-10' src ={grp2} alt =""/></div>
        <h1 className='text-center mt-8 text-xl font-bold'>Select</h1>
        <p className='mt-4'>Choose from thousands of options generated by the slogan maker that fit your needs.</p>
      </div>
      <div className='flex flex-col text-center'>
      <div className='flex justify-center'><img className='h-10 w-10' src ={grp3} alt =""/></div>
        <h1 className='text-center mt-8 text-xl font-bold'>Stand out</h1>
        <p className='mt-4'>Congrats on your new slogan. It's time to win the world!</p>
      </div>


    </div>
    </div>
  )
}

export default Content