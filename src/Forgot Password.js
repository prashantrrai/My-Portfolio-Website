import React from 'react'

const ForgotPassword = () => {

  const handleMsg = (e) => {
    e.preventDefault()
    document.getElementById('msg').innerText='Work in Progress'
  }


  return (
    <>
        
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col items-center justify-center h-screen">
          

        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
            <p class="leading-relaxed mt-4" id='msg'></p>
          </div>
          

          <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
            <h2 class="text-white text-lg font-medium title-font mb-5">Forgot Password</h2>
            <div class="relative mb-4">


              <label for="email" class="leading-7 text-sm text-gray-400">Enter your Email</label>
              <input type="text" id="username" name="username" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={handleMsg}>Send OTP</button>
            
            <a class="text-md mt-3 hover:text-violet-600 hover:underline text-gray-100 " href='/login'>Login Back</a>
           </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword