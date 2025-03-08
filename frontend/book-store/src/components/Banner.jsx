import React from 'react'
import img from "../../public/img.jpg";
function Banner ()  {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md: mt-36'>
        <div className='space-y-8'>
        <h1 className='text-2xl md:text-4xl font-bold'>
            Hello, welcomes here to learn something{" "}
             <span className='text-pink-500'>new everyday!!!</span>
        </h1>
        <p className='text-sm md:text-xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque provident architecto asperiores inventore perferendis molestiae velit quod earum quaerat!
        </p>
         
        <label className="input input-bordered flex items-center gap-2 ">
       <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
      <input type="email" placeholder="mail@site.com" required/>
     </label>
     </div>
        <button className=" mt-6 btn btn-secondary">Get Started</button>
        </div>
        <div className=' order-1 w-full mt-20 md:w-1/2'>
         <img src={img} className="w-92 h-92" alt="loading..." />
        </div>
    </div>
    </>
  )
}

export default Banner