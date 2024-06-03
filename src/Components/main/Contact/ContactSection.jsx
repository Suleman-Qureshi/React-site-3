import React from 'react'

function ContactSection(props) {
  return (
    <>
         <section id='Contact' className='w-screen flex flex-col py-8 px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 items-center'>
         <div className='flex flex-col gap-12'>
            <h2 className='text-3xl font-semibold text-slate-700 relative before:absolute before:w-14 before:h-1 before:rounded-full before:bg-cyan-700 before:left-1/2 before:-translate-x-1/2 before:-bottom-6 text-center'>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className='flex flex-col gap-4 my-6 w-full'>
            <div className='flex max-lg:flex-col gap-4 w-full'>
                <div className='w-3/6 max-lg:w-full shadow-md p-6 flex flex-col gap-2 items-center rounded-md'>
              <div>  <i className=" w-16 h-16 fa-solid fa-location-dot shadow-md rounded-full fa-xl flex justify-center items-center text-cyan-700"></i></div>
              <h6 className='text-lg font-medium text-slate-700'>Address</h6>
              <p className='text-slate-500'>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className='w-3/6 max-lg:w-full flex gap-4'>
                    <div className='w-1/2 shadow-md p-6 flex flex-col gap-2 items-center rounded-md'>
                    <div>  <i className=" w-16 h-16 fa-solid fa-phone shadow-md rounded-full fa-xl flex justify-center items-center text-cyan-700"></i></div>
                    <h6 className='text-lg font-medium text-slate-700'>Call Us</h6>
                    <p className='text-slate-500'>+1 5589 55488 55</p>
                    </div>
                    <div className='w-1/2 shadow-md p-6 flex flex-col gap-2 items-center rounded-md'>
                    <div>  <i className=" w-16 h-16 fa-solid fa-envelope shadow-md rounded-full fa-xl flex justify-center items-center text-cyan-700"></i></div>
                    <h6 className='text-lg font-medium text-slate-700'>Email Us</h6>
                    <p className='text-slate-500'>info@example.com</p>
                    </div>
                </div>
            </div>
            <div className='w-full max-lg:flex-col flex gap-4'>
                <div className='w-1/2 max-lg:w-full overflow-hidden'><img src={props.map} className='w-full h-96' /></div>
                <form className='w-1/2 max-lg:w-full shadow-md rounded-md flex flex-col gap-4 p-4' onClick={e=>{e.preventDefault()}}>
                   <div className='flex gap-4 w-full'>
                    <input type='text' placeholder='Your Name' className='w-1/2 border border-slate-500 text-slate-500 p-2 font-light rounded-sm outline-cyan-700'/>
                    <input type='text' placeholder='Your Email' className='w-1/2 border border-slate-500 text-slate-500 p-2 font-light rounded-sm outline-cyan-700'/>
                   </div>
                    <input type='text' placeholder='Your Subject' className='w-full border border-slate-500 text-slate-500 p-2 font-light rounded-sm outline-cyan-700'/>
                    <textarea className='w-full h-full border border-slate-500 rounded-sm text-slate-500 p-2 font-light outline-cyan-700' placeholder='Message'></textarea>
                    <div className='flex justify-center'><button className='px-5 py-3 bg-cyan-700 hover:bg-opacity-70 text-white duration-150 font-medium rounded-full'>Send Message</button></div>
                </form>
            </div>
          </div>
         </section>
    </>
  )
}

export default ContactSection
