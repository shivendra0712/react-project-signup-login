import React from 'react'
import { useForm } from 'react-hook-form'

const Signup = (props) => {
    const { toggler, settoggler } = props;
 const {register , handleSubmit, formState:{errors}} = useForm();

    const sumitHandler = (data) => {
        console.log(data)
    }

    return (
        <div className='w-full h-screen bg-gray-800 text-white p-4 flex justify-center items-center'>
            <form onSubmit={handleSubmit(sumitHandler)} className='w-full md:w-[40%] mt-10  bg-black/40    p-10 rounded-2xl flex flex-col gap-4 items-center'>
                {/* {name , emial , password} */}
                <h1 className='text-2xl'>Signup Form</h1>
                <input type="text" {...register('name', { required: true })} placeholder='John Sharma' className='border black p-2 w-full outline-none  rounded' />
                <input type="email" {...register('email', { required: true })} placeholder='Johnsharma@123gmail.com' className='border black p-2 w-full outline-none rounded' />
                <input type="password" {...register('password', { required: true })} placeholder='John@123' className='border black p-2 w-full outline-none rounded' />
                <button className='bg-gray-300 text-black w-[40%] py-2 rounded-lg font-medium hover:bg-gray-400 cursor-pointer hover:scale-95 '>Signup</button>
                <small className='text-center'>
                    Already have an account?{'  '}
                    <button onClick={() => settoggler(!toggler)} type='button'> Signin</button>
                </small>
            </form>
        </div>
    )
}

export default Signup