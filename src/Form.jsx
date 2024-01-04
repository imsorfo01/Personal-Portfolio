import React from 'react'

export default function Form() {
  return (
    <div>
      <form action='https://formspree.io/f/mqkrkygr' method='POST' className='bg-gray-500 w-64 absolute right-10 top-16 text-[10px] font-bold flex flex-col gap-1 px-1 py-1 text-white'  >
        <input name='email' autoComplete="off" className='text-black px-4 bg-gray-300 py-1 outline-none' type="email" placeholder='abc@gmail.com' autoFocus required />
        <textarea name="Querry"className='w-full text-black px-4 bg-gray-300 py-1 outline-none' placeholder='Your Querry...' autoComplete="off" required></textarea>
        <input type="submit"  value="Submit" className='bg-green-400 py-1 cursor-pointer'></input>
      </form>
    </div>
  )
}
