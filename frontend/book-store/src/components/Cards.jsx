import React from 'react'

function Cards ({ item }) {
    
  return (
    <>
    <div className='m-4 my-3 p-3'>
    <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="curser-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white p-2 duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards