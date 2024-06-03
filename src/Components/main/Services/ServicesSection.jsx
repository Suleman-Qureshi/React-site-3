import React from 'react'
import { Link } from 'react-router-dom'

function ServicesSection(props) {
  return (
    <>
<section id='Services' className='flex flex-col gap-8 py-12 px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 bg-cyan-700 bg-opacity-10 items-center'>
<div className='flex flex-col gap-12 my-6'>
            <h2 className='text-3xl font-semibold text-slate-700 relative before:absolute before:w-14 before:h-1 before:rounded-full before:bg-cyan-700 before:left-1/2 before:-translate-x-1/2 before:-bottom-6 text-center'>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
<div className='flex max-lg:flex-col gap-12'>
    <div className='flex flex-col w-1/2 max-lg:w-full gap-12 justify-between'>
        <Link to={'/Catalog'} className='group flex gap-6 p-8 rounded-2xl border hover:shadow-lg duration-200 bg-white cursor-pointer'>
           <div> <i className="fa-solid fa-wave-square fa-2x p-5 bg-sky-500 bg-opacity-10 text-sky-500 border border-sky-500 rounded-xl"></i></div>
             <div className='flex flex-col text-slate-500 group-hover:text-slate-700 group-hover:duration-150 duration-150'>
                <h4 className='text-2xl font-semibold'>Nesciunt Mete</h4>
                <p className='text-lg font-light'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                <p className='text-cyan-700 group-hover:text-opacity-50 duration-150 group-hover:duration-150'>Learn More <i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </Link>
        <Link to={'/Catalog'} className='group flex gap-6 p-8 rounded-2xl border hover:shadow-lg duration-200 bg-white cursor-pointer'>
           <div> <i className="fa-solid fa-chalkboard fa-2x p-5 bg-green-500 bg-opacity-10 text-green-500 border border-green-500 rounded-xl"></i></div>
             <div className='flex flex-col text-slate-500 group-hover:text-slate-700 group-hover:duration-150 duration-150'>
                <h4 className='text-2xl font-semibold'>Nesciunt Mete</h4>
                <p className='text-lg font-light'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                <p className='text-cyan-700 group-hover:text-opacity-50 duration-150 group-hover:duration-150'>Learn More <i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </Link>
        <Link to={'/Catalog'} className='group flex gap-6 p-8 rounded-2xl border hover:shadow-lg duration-200 bg-white cursor-pointer'>
           <div> <i className="fa-solid fa-calendar-days fa-2x p-5 bg-purple-500 bg-opacity-10 text-purple-500 border border-purple-500 rounded-xl"></i></div>
             <div className='flex flex-col text-slate-500 group-hover:text-slate-700 group-hover:duration-150 duration-150'>
                <h4 className='text-2xl font-semibold'>Nesciunt Mete</h4>
                <p className='text-lg font-light'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                <p className='text-cyan-700 group-hover:text-opacity-50 duration-150 group-hover:duration-150'>Learn More <i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </Link>
    </div>
    <div className='flex flex-col w-1/2 max-lg:w-full gap-12 justify-between'>
        <Link to={'/Catalog'} className='group flex gap-6 p-8 rounded-2xl border hover:shadow-lg duration-200 bg-white cursor-pointer'>
           <div> <i className="fa-solid fa-podcast fa-2x p-5 bg-orange-500 bg-opacity-10 text-orange-500 border border-orange-500 rounded-xl"></i></div>
             <div className='flex flex-col text-slate-500 group-hover:text-slate-700 group-hover:duration-150 duration-150'>
                <h4 className='text-2xl font-semibold'>Nesciunt Mete</h4>
                <p className='text-lg font-light'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                <p className='text-cyan-700 group-hover:text-opacity-50 duration-150 group-hover:duration-150'>Learn More <i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </Link>
        <Link to={'/Catalog'} className='group flex gap-6 p-8 rounded-2xl border hover:shadow-lg duration-200 bg-white cursor-pointer'>
           <div> <i className="fa-regular fa-square fa-2x p-5 bg-red-500 bg-opacity-10 text-red-500 border border-red-500 rounded-xl"></i></div>
             <div className='flex flex-col text-slate-500 group-hover:text-slate-700 group-hover:duration-150 duration-150'>
                <h4 className='text-2xl font-semibold'>Nesciunt Mete</h4>
                <p className='text-lg font-light'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                <p className='text-cyan-700 group-hover:text-opacity-50 duration-150 group-hover:duration-150'>Learn More <i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </Link>
        <Link to={'/Catalog'} className='group flex gap-6 p-8 rounded-2xl border hover:shadow-lg duration-200 bg-white cursor-pointer'>
           <div> <i className="fa-regular fa-message fa-2x p-5 bg-pink-500 bg-opacity-10 text-pink-500 border border-pink-500 rounded-xl"></i></div>
             <div className='flex flex-col text-slate-500 group-hover:text-slate-700 group-hover:duration-150 duration-150'>
                <h4 className='text-2xl font-semibold'>Nesciunt Mete</h4>
                <p className='text-lg font-light'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                <p className='text-cyan-700 group-hover:text-opacity-50 duration-150 group-hover:duration-150'>Learn More <i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </Link>
    </div>
</div>
</section>
<section className='w-screen px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 py-12 flex max-lg:flex-col-reverse gap-14 max-xl:gap-7 justify-between items-center'>
    <div className='w-1/2 max-lg:w-full flex flex-col justify-between gap-6 text-slate-700 p-4'>
        <h3 className='text-3xl font-semibold'>Enim quis est voluptatibus aliquid consequatur</h3>
        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
        <div className='flex max-sm:flex-col gap-8 my-8'>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-4'>
                    <div><i className="fa-solid fa-chalkboard text-cyan-700 fa-xl mt-5"></i></div>
                    <div className='flex flex-col gap-4'>
                        <h5 className='text-lg font-semibold'>Lorem Ispum</h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div><i className="fa-regular fa-sun text-cyan-700 fa-xl mt-5"></i></div>
                    <div className='flex flex-col gap-4'>
                        <h5 className='text-lg font-semibold'>Lorem Ispum</h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-4'>
                    <div><i className="fa-solid fa-certificate text-cyan-700 fa-xl mt-5"></i></div>
                    <div className='flex flex-col gap-4'>
                        <h5 className='text-lg font-semibold'>Lorem Ispum</h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div><i className="fa-regular fa-sun text-cyan-700 fa-xl mt-5"></i></div>
                    <div className='flex flex-col gap-4'>
                        <h5 className='text-lg font-semibold'>Lorem Ispum</h5>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='w-1/2 max-lg:w-full'><img src={props.fImg6} /></div>
</section>
    </>
  )
}

export default ServicesSection
