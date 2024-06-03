import React from 'react'

function HomeSection() {
  return (
   <>
    <section id='Home' className='flex gap-3 items-center py-36 flex-col w-screen h-screen relative before:w-full before:h-full before:absolute before:-z-10 before:opacity-20 before:top-0 bg-no-repeat bg-bottom max-2xl:py-32'>
          <div className='flex flex-col gap-2 items-center my-2  text-slate-700 max-2xl:my-0'>
            <h1 className='text-6xl max-xl:text-5xl max-lg:4xl max-sm:2xl max-sm:text-center font-semibold'>Welcome to <span className='text-cyan-700'>QuickStart</span></h1>
            <p className='text-xl max-xl:text-base max-sm:text-sm'>Quickly start the project now and set the stage of success</p>
          </div>
          <div className='flex gap-6'>
            <button className='px-6 max-xl:px-5 py-2.5 max-xl:py-2 bg-cyan-700 text-white font-medium rounded-full hover:bg-cyan-600 hover:shadow-lg duration-200 hover:shadow-cyan-900'>Get Started</button>
            <button className='hover:text-cyan-700 duration-200 font-bold'><i className="fa-solid fa-circle-play fa-2xl text-cyan-700"></i>&nbsp;&nbsp;Watch Video</button>
          </div>

    </section>
    <section className='w-screen bg-cyan-800 bg-opacity-10 py-12 flex max-lg:flex-col justify-between items-center gap-12 px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 text-slate-700'>
        <div className='flex gap-6 w-1/3 max-lg:w-full group cursor-pointer duration-200'>
        <i className="fa-solid fa-briefcase fa-2x text-cyan-700 p-7 justify-center items-center flex bg-cyan-700 bg-opacity-15 group-hover:bg-opacity-100 group-hover:text-white group-hover:duration-200 duration-200"></i>
         <div className='flex flex-col gap-1'>
            <h3 className='text-xl font-medium group-hover:text-cyan-700 group-hover:duration-200 duration-200'>Lorem Ispum</h3>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
         </div>
        </div>
        <div className='flex gap-6 w-1/3 max-lg:w-full group cursor-pointer duration-200'>
        <i className="fa-regular fa-rectangle-list fa-2x text-cyan-700 p-7 justify-center items-center flex bg-cyan-700 bg-opacity-15 group-hover:bg-opacity-100 group-hover:text-white group-hover:duration-200 duration-200"></i>
         <div className='flex flex-col gap-1'>
            <h3 className='text-xl font-medium group-hover:text-cyan-700 group-hover:duration-200 duration-200'>Dolor Sitema</h3>
            <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa</p>
         </div>
        </div>
        <div className='flex gap-6 w-1/3 max-lg:w-full group cursor-pointer duration-200'>
        <i className="fa-solid fa-signal fa-2x text-cyan-700 p-7 justify-center items-center flex bg-cyan-700 bg-opacity-15 group-hover:bg-opacity-100 group-hover:text-white group-hover:duration-200 duration-200"></i>
         <div className='flex flex-col gap-1'>
            <h3 className='text-xl font-medium group-hover:text-cyan-700 group-hover:duration-200 duration-200'>Sed ut perspiciatis</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
         </div>
        </div>
    </section>
   </>
  )
}

export default HomeSection
