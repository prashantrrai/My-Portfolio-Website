import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Login = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  
  
  const loginSubmit = (e) => {
    e.preventDefault()
    // console.log(username,password)
    if (email==="admin@gmail.com" && password==="12345678"){
      //do routing 
      navigate('/myusers');
      // alert("login Successful")
    }else{
      alert("Incorrect Credentisals")
    }
  }


  return (
    <>
      <Navbar/>

      <section class="text-gray-400 bg-gray-900 body-font" >
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-white">Become our Partner Today ,</h1>
            <h1 class="title-font font-medium text-3xl text-white">and be the part of this journey</h1>
            <p class="leading-relaxed mt-4">Register yourself and Enjoy! the unlimited Access to our 1000+ Dynamic and Responsive contents on our website with Domain and Hosting Support.</p>
          </div>


          <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          
            <h2 class="text-white text-lg font-medium title-font mb-5">Login</h2>
            <div class="relative mb-4">


              <label for="Email" class="leading-7 text-sm text-gray-400">Email / Username</label>
              <input type="email" id="username" name="username" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required autoComplete='on' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
              <input type="password" id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg" type='submit' onClick={loginSubmit}>Submit</button>
            <a class="text-md mt-3 hover:text-violet-600 hover:underline text-gray-100" href='/forgotpassword'>* Forgot Password.</a>
            {/* <h2 id='loginfeedback'></h2> */}
            
            </div>
        </div>
      </section>

    <Footer/>
    </>
  )
}

export default Login