import React from 'react'

const Portfolios = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-center'>
        <div className="wraper">
            <div className="title text-slate-400 text-center text-lg">Projects</div>
            <div className="categories-button">
                <ul className='flex gap-3 justify-center py-3'>
                    <li className='bg-slate-600 py-1 px-2 rounded-md text-sm font-semibold'><a href="#">All</a></li>
                    <li className='bg-slate-600 py-1 px-2 rounded-md text-sm font-semibold'><a href="#">Social</a></li>
                    <li className='bg-slate-600 py-1 px-2 rounded-md text-sm font-semibold'><a href="#">E-commerce</a></li>
                    <li className='bg-slate-600 py-1 px-2 rounded-md text-sm font-semibold'><a href="#">Portfolios</a></li>
                    <li className='bg-slate-600 py-1 px-2 rounded-md text-sm font-semibold'><a href="#">Chat-Application</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Portfolios