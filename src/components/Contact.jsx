import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-fit flex justify-center items-center p-4 bg-gradient-to-tr from-slate-800 to-slate-950 text-gray-300'>
        <form method="POST" action="https://getform.io/f/raeggwja" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 mt-[150px]'>
                <p className='text-4xl font-bold inline border-b-4 border-slate-600'>Contact</p>
                <p className='text-gray-300 py-8'>Message me an email through: jerbyrojo@gmail.com</p>
            </div>
            <input className='p-2  bg-gradient-to-bl from-slate-500 to-slate-900' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2  bg-gradient-to-bl from-slate-500 to-slate-900' type="email" placeholder='Email' name='email' />
            <textarea className='p-2  bg-gradient-to-tl from-slate-500 to-slate-900' name="message" rows="10" placeholder='Type your message'></textarea>
            <button className='text-white border-2 hover:bg-gradient-to-r from-slate-500 to-slate-800 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact