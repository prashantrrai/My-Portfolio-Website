import axios from 'axios'
import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'

const Contact = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // const myuser = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();            //to prevent reloading
    console.log("clicked")
    document.getElementById('feedback-msg').innerText="Feedback Submitted"
    document.getElementById("feedback-from").reset();

    axios.post('https://6331e2233ea4956cfb692ca9.mockapi.io/Portfolio-Website',
    {
      name: name,
      email: email,
      message: message
    })
    // .then(() => {
    //   myuser("/myusers")
    // })
  }
  return (
    <>


      <form class="text-gray-400 bg-gray-900 body-font relative" id='feedback-from'>
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg hover:border overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.754446474061!2d70.85467231395167!3d22.811560929907962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44687703d3a95ff8!2zMjLCsDQ4JzQxLjYiTiA3MMKwNTEnMjQuNyJF!5e0!3m2!1sen!2sin!4v1664944148755!5m2!1sen!2sin" style={{filter : `grayscale(1) contrast(1.2) opacity(0.16)`}}></iframe>
            
            <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p class="mt-1">Vidhyanagar Society, Science College, Nazarbag, Bhadiyad Rd, Morbi-363642 Gujarat, India</p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a class="text-indigo-400 leading-relaxed" href='/prashantrai642@gmail.com' type='email'>prashantrai642@gmail.com</a>
                <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p class="leading-relaxed">9090909090</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
            <p class="leading-relaxed mb-5">For Any Questions and Queries Reach out to us</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"onChange={(e) => setMessage(e.target.value)} ></textarea>
            </div>
            {/* {name} */}
            {/* {email} */}

            <button class="text-white bg-violet-600 border-0 py-2 px-6 focus:bg-violet-600 outline-none 
             hover:bg-violet-700 rounded text-lg" type='submit' onClick={handlesubmit} >Submit</button>
            <p class="text-xs text-gray-400 text-opacity-90 mt-3">Don't worry your Data will not be stored or shared Anywhere.</p>
            
            <h2 id='feedback-msg'></h2>
          </div>
        </div>
      </form>

    </>
  )
}

export default Contact