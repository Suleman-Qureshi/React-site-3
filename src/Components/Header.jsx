import React, { useState } from 'react'

function Header(props) {
    const [Navbar, setNavbar] = useState(false);
    window.addEventListener(`scroll`, () => {
      if (window.scrollY > 180) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
    const [mobileMenu, setmobileMenu] = useState(true)
    const mobilemenuClick=()=>{
      if(!mobileMenu){
         setmobileMenu(true)
        }else{
        setmobileMenu(false)
      }
    }
    setInterval(e=>{
      if(screen.width>1024){
        setmobileMenu(true)  
      }
    },1)
  return (
    <header className="z-50 ">
        <nav className={Navbar?"flex fixed w-screen justify-between items-center px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 py-8 z-50 bg-white duration-150":"flex fixed w-screen justify-between items-center px-64 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-2 py-6 z-50 duration-150"}>
            <div className="flex gap-2 items-center">
                <img src={props.logo} alt="logo" className="h-10"/>
                <h1 className="tracking-wide text-3xl text-slate-700 font-medium">QuickStart</h1>
            </div>
            <div className="flex justify-between items-center gap-4 max-lg:hidden">
                <ul className="flex gap-6 max-2xl:gap-4 max-xl:gap-3 max-2xl:text-base text-lg text-slate-500">
                    <li><a href="#Home" className="hover:text-cyan-600 duration-150">Home</a></li>
                    <li><a href="#About" className="hover:text-cyan-600 duration-150">About</a></li>
                    <li><a href="#Feature" className="hover:text-cyan-600 duration-150">Features</a></li>
                    <li><a href="#Services" className="hover:text-cyan-600 duration-150">Services</a></li>
                    <li><a href="#Pricing" className="hover:text-cyan-600 duration-150">Pricing</a></li>
                    <div className="group duration-150">
                        <li className="cursor-pointer hover:text-cyan-600 duration-150 flex flex-nowrap gap-2 items-center"><a>Drop-down</a> <i className="fa-solid fa-angle-down translate-y-0.5"></i></li>
                        <ul id="Dropdown-1" className="hidden bg-white flex-col gap-4 absolute p-4 text-base rounded-md shadow-xl group-hover:flex group-hover:duration-200">
                            <li className="cursor-pointer hover:text-cyan-600 duration-150">Dropdown-1</li>
                            <li id="Deep-Dropdown-btn"><a href="#" className=" hover:text-cyan-600 duration-150">Deep-Dropdown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <span id="Deep-Dropdown-box" className="hidden absolute -left-44 p-4 shadow-xl border rounded-sm">
                                <ul className="flex flex-col gap-4">
                                    <li>Deep-dropdown-1</li>
                                    <li>Deep-dropdown-2</li>
                                    <li>Deep-dropdown-3</li>
                                    <li>Deep-dropdown-4</li>
                                </ul>
                            </span>
                        </li>
                            <li className="cursor-pointer hover:text-cyan-600 duration-150">Dropdown-2</li>
                            <li className="cursor-pointer hover:text-cyan-600 duration-150">Dropdown-3</li>
                            <li className="cursor-pointer hover:text-cyan-600 duration-150">Dropdown-4</li>
                        </ul>
                    </div>
                    <li><a href="#Contact" className="hover:text-cyan-600 duration-150">Contact</a></li>
                    </ul>
                </div>
                    <button className="text-white bg-cyan-600 px-4 py-2 rounded-full font-medium hover:bg-cyan-500 duration-150 max-lg:hidden">Get Started</button>
                    <span onClick={mobilemenuClick} className='hidden max-lg:block text-cyan-700'><i className="fa-solid fa-bars fa-xl "></i></span>
        </nav>
        <nav className={`${mobileMenu?'hidden':'zoom1'} mt-12 left-2 fixed top-1/2 w-5/6 -translate-y-1/2 bg-cyan-700 bg-opacity-10 border-2 border-cyan-700 border-opacity-50 rounded-lg backdrop-blur-xl z-50 flex  p-5 justify-center items-center`}>
        <ul className="flex flex-col text-center text-2xl gap-4 text-slate-500">
        <li><a onClick={mobilemenuClick} href="#Home" className="relative hover:text-cyan-600 duration-150 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:h-0.5 after:rounded-full after:bg-cyan-700 after:absolute after:-bottom-2">Home</a></li>
                    <li><a onClick={mobilemenuClick} href="#About" className="relative hover:text-cyan-600 duration-150 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:h-0.5 after:rounded-full after:bg-cyan-700 after:absolute after:-bottom-2">About</a></li>
                    <li><a onClick={mobilemenuClick} href="#Feature" className="relative hover:text-cyan-600 duration-150 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:h-0.5 after:rounded-full after:bg-cyan-700 after:absolute after:-bottom-2">Features</a></li>
                    <li><a onClick={mobilemenuClick} href="#Services" className="relative hover:text-cyan-600 duration-150 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:h-0.5 after:rounded-full after:bg-cyan-700 after:absolute after:-bottom-2">Services</a></li>
                    <li><a onClick={mobilemenuClick} href="#Pricing" className="relative hover:text-cyan-600 duration-150 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:h-0.5 after:rounded-full after:bg-cyan-700 after:absolute after:-bottom-2">Pricing</a></li>
                    <li><a onClick={mobilemenuClick} href="#Contact" className="relative hover:text-cyan-600 duration-150 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:h-0.5 after:rounded-full after:bg-cyan-700 after:absolute after:-bottom-2">Contact</a></li>
        </ul>
        </nav>
    </header>
  )
}

export default Header
