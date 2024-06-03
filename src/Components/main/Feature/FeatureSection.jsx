import React, { useState } from 'react'

function FeatureSection(props) {
const [featureBtn, setfeatureBtn] = useState(props.fImg1)
const [featureBtnBg1, setfeatureBtnBg1] = useState(true)
const [featureBtnBg2, setfeatureBtnBg2] = useState(false)
const [featureBtnBg3, setfeatureBtnBg3] = useState(false)
const feature_btn1=()=>{
    if(featureBtn!=props.fImg1){setfeatureBtn(props.fImg1)}
    if(!featureBtnBg1){
         setfeatureBtnBg1(true)
         setfeatureBtnBg2(false)
         setfeatureBtnBg3(false)
    }
}
const feature_btn2=()=>{
    if(featureBtn!=props.fImg2){setfeatureBtn(props.fImg2)}
    if(!featureBtnBg2){
        setfeatureBtnBg1(false)
        setfeatureBtnBg2(true)
        setfeatureBtnBg3(false)
        
   }
}
const feature_btn3=()=>{
    if(featureBtn!=props.fImg3){ setfeatureBtn(props.fImg3)}
    if(!featureBtnBg3){
        setfeatureBtnBg1(false)
    setfeatureBtnBg2(false)
    setfeatureBtnBg3(true)
   }
}
  return (
    <>
        <section id='Feature' className='w-screen flex flex-col py-8 px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 items-center'>
          <div className='flex flex-col gap-12'>
            <h2 className='text-3xl font-semibold text-slate-700 relative before:absolute before:w-14 before:h-1 before:rounded-full before:bg-cyan-700 before:left-1/2 before:-translate-x-1/2 before:-bottom-6 text-center'>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className='w-full flex justify-between items-center gap-12 max-xl:gap-6 my-12 max-lg:flex-col max-lg:gap-0'>
            <div className='w-1/2 max-lg:w-full flex flex-col justify-between' >
                <div className={`w-5/6 flex gap-6 p-6 bg-opacity-10 ${featureBtnBg1?"bg-cyan-700 ":"hover:bg-cyan-700 hover:bg-opacity-5"} rounded-lg cursor-pointer max-2xl:w-full`} onClick={feature_btn1}>
                <div><i className="fa-solid fa-binoculars fa-xl bg-white rounded-full shadow-md flex justify-center items-center text-cyan-700 w-14 h-14"></i></div>
                    <div className='flex flex-col gap-6 max-lg:gap-1'>
                        <h3 className='text-xl text-slate-600 font-medium max-lg:hidden'>Modi sit est dela pireda nest</h3>
                        <p className='text-slate-700 max-lg:text-sm'>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    </div>
                </div>
                <div className={`w-5/6  flex gap-6 p-6 bg-opacity-10 ${featureBtnBg2?" bg-cyan-700":"hover:bg-cyan-700 hover:bg-opacity-5"} rounded-lg cursor-pointer max-xl:w-full`} onClick={feature_btn2}>
                <div><i className="fa-solid fa-box fa-xl bg-white rounded-full shadow-md flex justify-center items-center text-cyan-700 w-14 h-14"></i></div>
                    <div className='flex flex-col gap-6 max-lg:gap-1'>
                        <h3 className='text-xl text-slate-600 font-medium max-lg:hidden'>Unde praesenti mara setra le</h3>
                        <p className='text-slate-700 max-lg:text-sm'>
                      Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique
                      tenetur aut voluptates sed voluptas ipsum voluptas
                    </p>
                    </div>
                </div>
                <div className={`w-5/6 flex gap-6 p-6 bg-opacity-10 ${featureBtnBg3?" bg-cyan-700":"hover:bg-cyan-700 hover:bg-opacity-5"} rounded-lg cursor-pointer max-xl:w-full`} onClick={feature_btn3}>
                <div><i className="fa-solid fa-sun fa-xl bg-white rounded-full shadow-md flex justify-center items-center text-cyan-700 w-14 h-14"></i></div>
                    <div className='flex flex-col gap-6 max-lg:gap-1'>
                        <h3 className='text-xl text-slate-600 font-medium max-lg:hidden'>Pariatur explica nitro dela</h3>
                        <p className='text-slate-700 max-lg:text-sm'>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      Debitis nulla est maxime voluptas dolor aut
                    </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 max-lg:w-full h-full rounded-lg overflow-hidden'><img src={featureBtn} alt='Feature-tabsImg'/></div>
          </div>
          <div className='flex max-lg:flex-col justify-between items-center gap-16 max-xl:gap-8 my-12'>
             <div className='w-2/3 max-lg:w-full rounded-2xl overflow-hidden'><img src={props.fImg4}  className='w-full h-full'/></div>
             <div className='w-1/2 h-1/3 max-lg:w-full p-16 max-xl:p-14 ml-12 max-xl:ml-6 max-lg:ml-0 bg-cyan-700 bg-opacity-10 rounded-lg'>
                <div className='w-full h-full flex flex-col gap-6'>
                 <h3 className='text-2xl text-slate-700 font-semibold'>Corporis temporibus maiores provident</h3>
                 <p className='text-slate-700'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                 <div>
                    <button className='px-6 py-2 bg-cyan-700 text-white rounded-lg hover:bg-opacity-85 duration-200'><a href='#'>Learn More</a></button>
                 </div>
                </div>
             </div>
          </div>
          <div className='flex justify-between items-center max-lg:flex-col-reverse gap-16 max-xl:gap-8 my-12'>
          <div className='w-1/2 h-1/3 max-lg:w-full p-16 mr-12 max-lg:mr-0 bg-cyan-700 bg-opacity-10 rounded-lg text-slate-500'>
                <div className='w-full h-full flex flex-col gap-6'>
                 <h3 className='text-2xl text-slate-700 font-semibold'>Neque ipsum omnis sapiente quod quia dicta</h3>
                 <p className='text-slate-700'>Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares</p>
                 <div className=' flex flex-col gap-4'>
                    <p><i className="fa-solid fa-chalkboard text-cyan-700"></i>&nbsp; &nbsp;Et corporis ea eveniet ducimus.</p>
                    <p><i className="fa-solid fa-certificate text-cyan-700"></i>&nbsp; &nbsp;Exercitationem dolorem sapiente.</p>
                    <p><i className="fa-regular fa-sun text-cyan-700"></i>&nbsp; &nbsp;Veniam quia modi magnam.</p>
                 </div>
                 <div>
                    <button className='px-6 py-2 bg-cyan-700 text-white rounded-lg hover:bg-opacity-85 duration-200'><a href='#'>Learn More</a></button>
                 </div>
                </div>
             </div>
          <div className='w-1/2 max-lg:w-full rounded-2xl overflow-hidden'><img src={props.fImg5} /></div>
          </div>
        </section>
    </>
  )
}

export default FeatureSection
