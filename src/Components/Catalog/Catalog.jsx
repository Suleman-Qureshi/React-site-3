import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../resources/services.jpg'

function Catalog() {
  return (
    <>
        <section className='w-screen py-20 flex flex-col'> 
        <div className='text-slate-700 py-4 w-screen px-64 flex justify-between items-center bg-cyan-700 bg-opacity-10'>
          <h2 className='text-2xl font-semibold'>Service Details</h2>
          <div className='flex gap-1'>
            <Link to={'/'} className='text-cyan-700'>Home</Link>
            <p> / Services Details</p>
          </div>
        </div>
            <section className='flex px-64 py-12 gap-8'>
              <div className='flex flex-col gap-8 w-1/3'>
                <div className='flex flex-col gap-4 p-4 shadow-md'>
                  <h3 className='text-2xl font-semibold text-slate-700 my-1'>Services List</h3>
                  <hr/>
                  <div className='flex flex-col gap-2 text-white '>
                    <div className='flex bg-cyan-700 p-3 gap-3 group hover:bg-white hover:text-cyan-700 duration-200 cursor-pointer'>
                    <i className="fa-solid fa-arrow-right-long w-6 h-6 rounded-full border-2 border-white flex justify-center items-center text-xs"></i>
                    <p className='text-lg font-semibold'>Web Design</p>
                    </div>
                    <div className='flex text-slate-700 p-3 gap-3 cursor-pointer bg-cyan-700 bg-opacity-5 hover:bg-opacity-10 duration-200 hover:text-cyan-700 group'>
                    <i className="fa-solid fa-arrow-right-long w-6 h-6 rounded-full border-2 border-slate-700 group-hover:border-cyan-700 group-hover:duration-200 flex justify-center items-center text-xs"></i>
                    <p className='text-lg font-semibold'>Web Development</p>
                    </div>
                    <div className='flex text-slate-700 p-3 gap-3 cursor-pointer bg-cyan-700 bg-opacity-5 hover:bg-opacity-10 duration-200 hover:text-cyan-700 group'>
                    <i className="fa-solid fa-arrow-right-long w-6 h-6 rounded-full border-2 border-slate-700 group-hover:border-cyan-700 group-hover:duration-200 flex justify-center items-center text-xs"></i>
                    <p className='text-lg font-semibold'>Product Managment</p>
                    </div>
                    <div className='flex text-slate-700 p-3 gap-3 cursor-pointer bg-cyan-700 bg-opacity-5 hover:bg-opacity-10 duration-200 hover:text-cyan-700 group'>
                    <i className="fa-solid fa-arrow-right-long w-6 h-6 rounded-full border-2 border-slate-700 group-hover:border-cyan-700 group-hover:duration-200 flex justify-center items-center text-xs"></i>
                    <p className='text-lg font-semibold'>Graphic Design</p>
                    </div>
                    <div className='flex text-slate-700 p-3 gap-3 cursor-pointer bg-cyan-700 bg-opacity-5 hover:bg-opacity-10 duration-200 hover:text-cyan-700 group'>
                    <i className="fa-solid fa-arrow-right-long w-6 h-6 rounded-full border-2 border-slate-700 group-hover:border-cyan-700 group-hover:duration-200 flex justify-center items-center text-xs"></i>
                    <p className='text-lg font-semibold'>Marketing</p>
                    </div>
                  </div>
                </div>
              <div className='flex flex-col p-4 gap-1 shadow-md'>
              <h3 className='text-2xl font-semibold text-slate-700 my-1'>Services List</h3>
              <hr className='mb-4'/>
              <div className='flex gap-2 items-center cursor-pointer text-slate-700 font-medium hover:text-cyan-700 duration-150'>
              <i className="fa-regular fa-file-pdf fa-xl text-cyan-700"></i>
              <p>Catalog PDF</p>
              </div>
              <hr className='my-4'/>
              <div className='flex gap-2 items-center cursor-pointer text-slate-700 font-medium hover:text-cyan-700 duration-150'>
              <i className="fa-regular fa-file-word fa-xl text-cyan-700"></i>
              <p>Catalog DOC</p>
              </div>
              </div>
              <div className='flex flex-col justify-center items-center bg-cyan-700 text-white p-4 gap-3'>
              <i class="fa-solid fa-headphones-simple fa-2x"></i>
              <h3 className='text-2xl font-semibold'>Have a Question?</h3>
              <div className='flex flex-col gap-2'>
                <div className='flex gap-1 items-center'>
                <i class="fa-solid fa-phone fa-sm"></i>
                <p>+1 5589 55488 55</p>
                </div>
                <div className='flex gap-1 items-center'>
                <i class="fa-solid fa-envelope fa-sm"></i>
                <p>contact@example.com</p>
                </div>
              </div>
              </div>
              </div>
              <div className='flex flex-col gap-4 w-2/3 px-4'>
                <div><img src={img} alt='services' /></div>
              <div className='flex flex-col gap-3 text-slate-700'>
                <h3 className='text-3xl font-bold'>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h3>
                <p>Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.</p>
                <div className='flex flex-col gap-4 my-2'>
            <div className='flex gap-2 items-center'>
            <i className="fa-regular fa-circle-check fa-xl text-cyan-700"></i>
            <p>Aut eum totam accusantium voluptatem.</p>
            </div>
            <div className='flex gap-2 items-center'>
            <i className="fa-regular fa-circle-check fa-xl text-cyan-700"></i>
            <p>Assumenda et porro nisi nihil nesciunt voluptatibus.</p>
            </div>
            <div className='flex gap-2'>
            <i className="fa-regular fa-circle-check fa-xl text-cyan-700 mt-3"></i>
            <p> Ullamco laboris nisi ut aliquip ex ea</p>
            </div>
              <p>Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.</p>
              <p>Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.</p>
        </div>
              </div>
              </div>
            </section>
        </section>
    </>
  )
}

export default Catalog
