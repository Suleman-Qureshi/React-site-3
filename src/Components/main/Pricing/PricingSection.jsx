import React, { useState } from 'react'
function PricingSection() {
    const [slideToggle1, setslideToggle1] = useState(true)
    const slide_toggle1=()=>{
        if(!slideToggle1){
                 setslideToggle1(true)
                }else{
                    setslideToggle2(true)
                    setslideToggle3(true)
                    setslideToggle4(true)
                    setslideToggle5(true)
                    setslideToggle6(true)
            setslideToggle1(false)
            
        }
    }
    const [slideToggle2, setslideToggle2] = useState(true)
    const slide_toggle2=()=>{
        if(!slideToggle2){
                 setslideToggle2(true)
                }else{
                    setslideToggle1(true)
            setslideToggle2(false)
            setslideToggle3(true)
            setslideToggle4(true)
            setslideToggle5(true)
            setslideToggle6(true)
            
        }
    }
    const [slideToggle3, setslideToggle3] = useState(true)
    const slide_toggle3=()=>{
        if(!slideToggle3){
                 setslideToggle3(true)
                }else{
                    setslideToggle1(true)
                    setslideToggle2(true)
                    setslideToggle3(false)
            setslideToggle4(true)
            setslideToggle5(true)
            setslideToggle6(true)
            
        }
    }
    const [slideToggle4, setslideToggle4] = useState(true)
    const slide_toggle4=()=>{
        if(!slideToggle4){
                 setslideToggle4(true)
                }else{
                    setslideToggle1(true)
                    setslideToggle2(true)
                    setslideToggle3(true)
                    setslideToggle4(false)
            setslideToggle5(true)
            setslideToggle6(true)
            
        }
    }
    const [slideToggle5, setslideToggle5] = useState(true)
    const slide_toggle5=()=>{
        if(!slideToggle5){
                 setslideToggle5(true)
                }else{
                    setslideToggle1(true)
                    setslideToggle2(true)
                    setslideToggle3(true)
                    setslideToggle4(true)
                    setslideToggle5(false)
            setslideToggle6(true)
            
        }
    }
    const [slideToggle6, setslideToggle6] = useState(true)
    const slide_toggle6=()=>{
        if(!slideToggle6){
                 setslideToggle6(true)
                }else{
                    setslideToggle1(true)
                    setslideToggle2(true)
                    setslideToggle3(true)
                    setslideToggle4(true)
                    setslideToggle5(true)
                    setslideToggle6(false)
            
        }
    }
  return (
    <>
        <section id='Pricing' className='flex flex-col px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 gap-y-12 gap-12 items-center my-12'> 
        <div className='flex flex-col gap-12'>
            <h2 className='text-3xl font-semibold text-slate-700 relative before:absolute before:w-14 before:h-1 before:rounded-full before:bg-cyan-700 before:left-1/2 before:-translate-x-1/2 before:-bottom-6 text-center'>Pricing</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className='w-full flex max-lg:flex-col max-lg:items-center gap-8 text-slate-700'>
            <div className='w-1/3 max-lg:w-2/3 max-md:w-full py-8 px-6 bg-cyan-700 bg-opacity-10 rounded-2xl flex flex-col gap-6'>
                <h5 className='text-xl font-semibold'>Free Plan</h5>
                <p>Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                <span className='text-5xl font-semibold my-4 text-cyan-700'><sup className='text-4xl'><i className="fa-solid fa-dollar-sign"></i></sup>0<sub className='text-slate-500 text-2xl'>/ month</sub></span>
                <div className='flex flex-col gap-1 items-center'>
                    <button className='w-full px-6 py-3 bg-neutral-700 text-white rounded-md hover:bg-cyan-700 duration-200'>Start a free trial</button>
                    <p>No credit card required</p>
                    <div className='w-full items-start flex flex-col gap-4 mt-8'>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Quam adipiscing vitae proin</p>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Nec feugiat nisl pretium</p>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Nulla at volutpat diam uteera</p>
                        <p className='text-slate-500 text-lg text-opacity-50'><i className="fa-solid fa-xmark fa-lg"></i>&nbsp;<strike>Pharetra massa massa ultricies</strike></p>
                        <p className='text-slate-500 text-lg text-opacity-50'><i className="fa-solid fa-xmark fa-lg"></i>&nbsp;<strike>Massa ultricies mi quis hendrerit</strike></p>
                        <p className='text-slate-500 text-lg text-opacity-50'><i className="fa-solid fa-xmark fa-lg"></i>&nbsp;<strike>Voluptate id voluptas qui sed aperiam rerum</strike></p>
                        <p className='text-slate-500 text-lg text-opacity-50'><i className="fa-solid fa-xmark fa-lg"></i>&nbsp;<strike>Iure nihil dolores recusandae odit voluptatibus</strike></p>
                    </div>
                </div>
            </div>
            <div className='w-1/3 max-lg:w-2/3 max-md:w-full relative py-8 px-6 bg-cyan-700 bg-opacity-10 rounded-2xl flex flex-col gap-6'>
            <span className='absolute px-5 max-xl:px-2 max-xl:py-1 py-2 bg-cyan-700 text-white rounded-md top-3 right-4 max-xl:right-1'>Popular</span>
                <h5 className='text-xl font-semibold'>Busniss Plan</h5>
                <p>Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                <span className='text-5xl font-semibold my-4 text-cyan-700'><sup className='text-4xl'><i className="fa-solid fa-dollar-sign"></i></sup>29<sub className='text-slate-500 text-2xl'>/ month</sub></span>
                <div className='flex flex-col gap-1 items-center'>
                    <button className='w-full px-6 py-3 bg-cyan-700 text-white rounded-md'>Start a free trial</button>
                    <p>Credit card required</p>
                    <div className='w-full items-start flex flex-col gap-4 mt-8'>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Quam adipiscing vitae proin</p>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Nec feugiat nisl pretium</p>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Nulla at volutpat diam uteera</p>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Pharetra massa massa ultricies</p>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Massa ultricies mi quis hendrerit</p>
                        <p className='text-slate-500 text-lg'><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Voluptate id voluptas qui sed aperiam rerum</p>
                        <p className='text-slate-500 text-lg text-opacity-50'><i className="fa-solid fa-xmark fa-lg"></i>&nbsp;<strike>Iure nihil dolores recusandae odit voluptatibus</strike></p>
                    </div>
                </div>
            </div>
            <div className='w-1/3 max-lg:w-2/3 max-md:w-full py-8 px-6 bg-cyan-700 bg-opacity-10 rounded-2xl flex flex-col gap-6'>
                <h5 className='text-xl font-semibold'>Developer Plan</h5>
                <p>Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                <span className='text-5xl font-semibold my-4 text-cyan-700'><sup className='text-4xl'><i className="fa-solid fa-dollar-sign"></i></sup>49<sub className='text-slate-500 text-2xl'>/ month</sub></span>
                <div className='flex flex-col gap-1 items-center'>
                    <button className='w-full px-6 py-3 bg-neutral-700 text-white rounded-md hover:bg-cyan-700 duration-200'>Start a free trial</button>
                    <p>No credit card required</p>
                    <div className='w-full items-start flex flex-col gap-4 mt-8 text-slate-500 text-lg'>
                        <p><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Quam adipiscing vitae proin</p>
                        <p><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Nec feugiat nisl pretium</p>
                        <p><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Nulla at volutpat diam uteera</p>
                        <p><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Pharetra massa massa ultricies</p>
                        <p><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Massa ultricies mi quis hendrerit</p>
                        <p><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Voluptate id voluptas qui sed aperiam rerum</p>
                        <p><i className="fa-solid fa-check fa-lg text-green-500"></i>&nbsp;Iure nihil dolores recusandae odit voluptatibus</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-12 px-96 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 py-12'>
            <h2 className='text-3xl font-semibold text-slate-700 relative before:absolute before:w-14 before:h-1 before:rounded-full before:bg-cyan-700 before:left-1/2 before:-translate-x-1/2 before:-bottom-6 text-center'>Frequently Asked Questions</h2>
        <div className='flex flex-col gap-6 relative text-slate-600'>
        <div className={`${slideToggle1?'':'bg-cyan-700 bg-opacity-10 border-cyan-700'} border rounded-md w-full px-6 duration-200`}>
            <div id='FAQ_heading_1' onClick={slide_toggle1} className={`${slideToggle1?'text-slate-700':'text-cyan-700'} flex justify-between items-center cursor-pointer hover:text-cyan-700 py-2 my-2`}><h5>Non consectetur a erat nam at lectus urna duis?</h5><i id='icon_1' className={`${slideToggle1?'-rotate-90':''} fa-solid fa-chevron-down duration-150`}></i></div>
            <p id='FAQ_paragraph_1'  className={`${slideToggle1?'overflow-hidden h-0':'h-auto py-3'} border-t duration-300 px-6`}>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
        </div>
        <div className={`${slideToggle2?'':'bg-cyan-700 bg-opacity-10 border-cyan-700'} border rounded-md w-full px-6 duration-200`}>
            <div id='FAQ_heading_1' onClick={slide_toggle2} className={`${slideToggle2?'text-slate-700':'text-cyan-700'} flex justify-between items-center cursor-pointer hover:text-cyan-700 py-2 my-2`}><h5>Feugiat scelerisque varius morbi enim nunc faucibus?</h5><i id='icon_1' className={`${slideToggle2?'-rotate-90':''} fa-solid fa-chevron-down duration-150`}></i></div>
            <p id='FAQ_paragraph_1'  className={`${slideToggle2?'overflow-hidden h-0':'h-auto py-3'} border-t duration-300 px-6`}>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
        </div>
        <div className={`${slideToggle3?'':'bg-cyan-700 bg-opacity-10 border-cyan-700'} border rounded-md w-full px-6 duration-200`}>
            <div id='FAQ_heading_1' onClick={slide_toggle3} className={`${slideToggle3?'text-slate-700':'text-cyan-700'} flex justify-between items-center cursor-pointer hover:text-cyan-700 py-2 my-2`}><h5>Dolor sit amet consectetur adipiscing elit pellentesque?</h5><i id='icon_1' className={`${slideToggle3?'-rotate-90':''} fa-solid fa-chevron-down duration-150`}></i></div>
            <p id='FAQ_paragraph_1'  className={`${slideToggle3?'overflow-hidden h-0':'h-auto py-3'} border-t duration-300 px-6`}>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
        </div>
        <div className={`${slideToggle4?'':'bg-cyan-700 bg-opacity-10 border-cyan-700'} border rounded-md w-full px-6 duration-200`}>
            <div id='FAQ_heading_1' onClick={slide_toggle4} className={`${slideToggle4?'text-slate-700':'text-cyan-700'} flex justify-between items-center cursor-pointer hover:text-cyan-700 py-2 my-2`}><h5>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h5><i id='icon_1' className={`${slideToggle4?'-rotate-90':''} fa-solid fa-chevron-down duration-150`}></i></div>
            <p id='FAQ_paragraph_1'  className={`${slideToggle4?'overflow-hidden h-0':'h-auto py-3'} border-t duration-300 px-6`}>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
        </div>
        <div className={`${slideToggle5?'':'bg-cyan-700 bg-opacity-10 border-cyan-700'} border rounded-md w-full px-6 duration-200`}>
            <div id='FAQ_heading_1' onClick={slide_toggle5} className={`${slideToggle5?'text-slate-700':'text-cyan-700'} flex justify-between items-center cursor-pointer hover:text-cyan-700 py-2 my-2`}><h5>Tempus quam pellentesque nec nam aliquam sem et tortor?</h5><i id='icon_1' className={`${slideToggle5?'-rotate-90':''} fa-solid fa-chevron-down duration-150`}></i></div>
            <p id='FAQ_paragraph_1'  className={`${slideToggle5?'overflow-hidden h-0':'h-auto py-3'} border-t duration-300 px-6`}>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
        </div>
        <div className={`${slideToggle6?'':'bg-cyan-700 bg-opacity-10 border-cyan-700'} border rounded-md w-full px-6 duration-200`}>
            <div id='FAQ_heading_1' onClick={slide_toggle6} className={`${slideToggle6?'text-slate-700':'text-cyan-700'} flex justify-between items-center cursor-pointer hover:text-cyan-700 py-2 my-2`}><h5>Perspiciatis quod quo quos nulla quo illum ullam?</h5><i id='icon_1' className={`${slideToggle6?'-rotate-90':''} fa-solid fa-chevron-down duration-150`}></i></div>
            <p id='FAQ_paragraph_1'  className={`${slideToggle6?'overflow-hidden h-0':'h-auto py-3'} border-t duration-300 px-6`}>Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
        </div>
          </div>
          
        </section>
    </>
  )
}

export default PricingSection
