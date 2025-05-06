import React, { useState } from 'react'
import { useForm } from 'react-hook-form' 

const App = () => {

  const [toggler, settoggler] = useState(false)

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      {toggler ? (<div className='w-screen h-screen bg-gray-800 text-white p-4 flex justify-center items-center'>
        <form action="" className='w-full md:w-[30%] mt-10  bg-black/40    p-10 rounded-2xl flex flex-col gap-4 items-center'>
          {/* {name , emial , password} */}
          <h1 className='text-2xl'>Signup Form</h1>
          <input type="text" placeholder='John Sharma' className='border black p-2 w-full outline-none  rounded' />
          <input type="email" placeholder='Johnsharma@123gmail.com' className='border black p-2 w-full outline-none rounded' />
          <input type="password" placeholder='John@123' className='border black p-2 w-full outline-none rounded' />
          <button className='bg-gray-300 text-black w-[40%] py-2 rounded-lg font-medium hover:bg-gray-400 cursor-pointer hover:scale-95 '>Signup</button>
          <small calassName='text-center'>
            Already have an account?{'  '}
            <button onClick={()=> settoggler(!toggler)} type='button'> Signin</button>
          </small>
        </form>
      </div>) 
      : (<div className='w-screen h-screen bg-gray-800 text-white p-4 flex justify-center items-center'>
        <form action="" className='w-full md:w-[30%] mt-10  bg-black/40    p-10 rounded-2xl flex flex-col gap-4 items-center'>
          {/* {name , emial , password} */}
          <h1 className='text-2xl'>Login Form</h1>
          <input type="email" placeholder='Johnsharma@123gmail.com' className='border black p-2 w-full outline-none rounded' />
          <input type="password" placeholder='John@123' className='border black p-2 w-full outline-none rounded' />
          <button className='bg-gray-300 text-black w-[40%] py-2 rounded-lg font-medium hover:bg-gray-400 cursor-pointer hover:scale-95'>Login</button>
          <small calassName='text-center'>
            Dodn't have an account? {'  '}
            <button onClick={()=> settoggler(!toggler)} type='button'>Signup</button>
          </small>
        </form>
      </div>
      )}


    </div>


  )
}

export default App