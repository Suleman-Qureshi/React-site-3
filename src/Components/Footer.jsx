import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer className='w-screen flex flex-col py-8 px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 bg-cyan-700 bg-opacity-5'>
        <section className='flex max-lg:flex-col max-lg:items-center max-lg:text-center justify-between gap-6 text-slate-700'>
            <div className='w-1/6 max-lg:w-full flex flex-col gap-8'>
                <h3 className='text-4xl font-semibold'>QuickStart</h3>
                <div className='text-sm flex flex-col gap-4 my-2'>
                <p>A108 Adam Street<br/>New York, NY 535022</p>
                <div>
                <p><b>Phone:</b> +1 5589 55488 55</p>  
                <p><b>Email:</b> info@example.com</p>  
                </div>
                </div>
                <div className='flex gap-2 max-lg:justify-center text-slate-500'>
                    <Link to={'/'} target='_blank'><i className="fa-brands fa-twitter fa-lg w-10 h-10 border border-black border-opacity-50 rounded-full flex justify-center items-center cursor-pointer hover:text-cyan-700 duration-150 hover:border-cyan-700"></i></Link>
                    <Link to={'/'} target='_blank'><i className="fa-brands fa-facebook fa-lg w-10 h-10 border border-black border-opacity-50 rounded-full flex justify-center items-center cursor-pointer hover:text-cyan-700 duration-150 hover:border-cyan-700"></i></Link>
                    <Link to={'/'} target='_blank'><i className="fa-brands fa-instagram fa-lg w-10 h-10 border border-black border-opacity-50 rounded-full flex justify-center items-center cursor-pointer hover:text-cyan-700 duration-150 hover:border-cyan-700"></i></Link>
                    <Link to={'/'} target='_blank'><i className="fa-brands fa-linkedin fa-lg w-10 h-10 border border-black border-opacity-50 rounded-full flex justify-center items-center cursor-pointer hover:text-cyan-700 duration-150 hover:border-cyan-700"></i></Link>
                </div>
            </div>
            <div className='w-1/6 max-lg:w-full flex flex-col gap-3 text-slate-700 text-sm'>
                <h3 className='text-2xl font-semibold'>Useful Links</h3>
                <p className='hover:text-cyan-700 cursor-pointer'>Home</p>
                <p className='hover:text-cyan-700 cursor-pointer'>About us</p>
                <p className='hover:text-cyan-700 cursor-pointer'>Services</p>
                <p className='hover:text-cyan-700 cursor-pointer'>Terms of services</p>
                <p className='hover:text-cyan-700 cursor-pointer'>Policy privacy</p>
            </div>
            <div className='w-1/6 max-lg:w-full flex flex-col gap-3 text-slate-700 text-sm'>
                <h3 className='text-2xl font-semibold'>Our Serviecs</h3>
                <p className='hover:text-cyan-700 cursor-pointer'>Web Design</p>
                <p className='hover:text-cyan-700 cursor-pointer'>Web Developemnt</p>
                <p className='hover:text-cyan-700 cursor-pointer'>Product Managment</p>
                <p className='hover:text-cyan-700 cursor-pointer'>Marketing</p>
                <p className='hover:text-cyan-700 cursor-pointer'>Graphic Design</p>
            </div>
            <div className='w-2/6 max-lg:w-full flex flex-col gap-3'>
            <h3 className='text-2xl font-semibold'>Our Newsletter</h3>
            <p className='text-sm'>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <div id='sub-btn' className='my-4 after:top-0 relative after:absolute after:w-32 after:h-full after:bg-cyan-700 after:right-0 after:rounded-full after:text-white'><input type='email' className='w-full rounded-full border border-slate-500 py-3'/></div>
            </div>
        </section>
        <hr className='my-6'/>
        <section className='flex flex-col justify-center items-center text-slate-700 gap-2'>
            <p>&copy; Copyright <b>QuickStart</b> All Right Reserved</p>
            <p>Designed by <span className='text-cyan-700'>BootstrapMade</span></p>
        </section>
        </footer>
    </>
  )
}

export default Footer
