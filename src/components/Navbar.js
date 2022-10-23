import React from 'react'

const Navbar = () => {
  return (
    <>
        <header className="sticky top-0 z-30 w-full px-2 py-0 bg-white sm:px-4 shadow-x text-gray-100 bg-gray-900 body-font" id="my-Header">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 hover: md:mb-0" href="/">
      
          <svg width="50" height="50" viewBox="-32.583735 -32.583735 416.84217 365.16747" >
            <g>
              <path fill="black" stroke="white" d="M 0 300 l 100 -300 l 200 0 c 58.86234 0 60 50 40 110 c -19.996015 59.973009 -39.996015 89.973009 -109.942068 89.997311 l -100.057931 0.002688 l -30 100 l -100 0 "/>
              <path fill="indigo" stroke="black" d="M 230 60 c 39.999997 0 40.465933 18.757507 30.465933 48.757507 c 0 0 -10 30 -50.318659 31.227083 l -60.147273 0.015409 l 30 -80 l 50 0 "/>
            </g>
          </svg>

        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-violet-600 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10"></path>
          </svg> */}

          
        <span className="ml-3 text-xl">Portfolio Website</span>
      </a>
      {/* <nav className="md:ml-auto   flex flex-wrap items-center  text-base justify-center "> */}
      <nav className="md:mx-auto   flex flex-wrap items-center  text-base justify-center ">

      
        <a className="mr-5 hover:text-white" href="/home">Home</a>
        <a className="mr-5 hover:text-white" href="/about">About</a>
        <a className="mr-5 hover:text-white" href="/service">Services</a>
        <a className="mr-5 hover:text-white" href="/contact">Contact Us</a>
      </nav>
      <button  id="btn"  className="inline-flex items-center bg-violet-600 active:bg-violet-700 border-0 py-1 px-3 focus:outline-none focus:ring focus:ring-violet-300 hover:bg-violet-700 rounded text-base mt-4 md:mt-0"><a href="/login">Login</a>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-7 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
    
      </button>
    </div>
  </header>
    </>
  )
}

export default Navbar;