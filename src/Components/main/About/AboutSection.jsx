import React from 'react'
function AboutSection(props) {
  return (
 <>
    <section id='About' className='w-screen px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 py-24 flex max-lg:flex-col-reverse gap-4'>
    <div className='flex flex-col gap-6 w-1/2 max-lg:w-full justify-between'>
        <span className='text-xl text-slate-400 font-light tracking-tight'>WHO WE ARE</span>
        <h1 className='text-4xl font-semibold text-slate-700'>Unleashing Potential with Creative Strategy</h1>
        <p className='text-black italic text-lg leading-snug'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='flex flex-col gap-4 my-2'>
            <div className='flex gap-2 items-center'>
            <i className="fa-regular fa-circle-check fa-xl text-cyan-700"></i>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='flex gap-2 items-center'>
            <i className="fa-regular fa-circle-check fa-xl text-cyan-700"></i>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
            <div className='flex gap-2'>
            <i className="fa-regular fa-circle-check fa-xl text-cyan-700 mt-3"></i>
            <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
        <div>
       <button className='bg-cyan-700 px-7 py-3 hover:bg-opacity-80 rounded-md text-white flex items-center gap-2 group duration-200'><a href='#'>Read More</a><i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 group-hover:duration-200 duration-200"></i></button>
        </div>
    </div>
    <div className='flex max-lg:flex-col gap-8 w-1/2 max-lg:w-full justify-center items-center'>
        <div className='w-1/2 max-lg:w-full  overflow-hidden'><img src={props.aboutImg1} className='rounded-lg'/></div>
        <div className='w-1/2 max-lg:w-full flex flex-col gap-8'>
            <div className='w-full h-1/2  overflow-hidden'><img src={props.aboutImg2} className='rounded-lg'/></div>
            <div className='w-full h-1/2  overflow-hidden'><img src={props.aboutImg3} className='rounded-lg'/></div>
        </div>
    </div>
    </section>
    <section className='w-screen py-12 px-80 max-2xl:px-44 max-xl:px-24 max-md:px-12 max-sm:px-3 flex justify-between max-lg:justify-center items-center gap-2 flex-wrap'>
     <img src={props.aboutLogo1} alt="logo-1" className='w-28 grayscale hover:grayscale-0 duration-200'/>
     <img src={props.aboutLogo2} alt="logo-2" className='w-28 grayscale hover:grayscale-0 duration-200'/>
     <img src={props.aboutLogo3} alt="logo-3" className='w-28 grayscale hover:grayscale-0 duration-200'/>
     <img src={props.aboutLogo4} alt="logo-4" className='w-28 grayscale hover:grayscale-0 duration-200'/>
     <img src={props.aboutLogo5} alt="logo-5" className='w-28 grayscale hover:grayscale-0 duration-200'/>
     <img src={props.aboutLogo6} alt="logo-6" className='w-28 grayscale hover:grayscale-0 duration-200'/>
    </section>
 </>
  )
}

export default AboutSection
