import React from 'react'

function Intro() {
  return (
    <>
        <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img class="object-cover object-center rounded" alt="hero" src="myphoto.jpg"/>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Er. Prashant Rai
              <br class="hidden lg:inline-block"/>Full Stack Developer
            </h1>
            <p class="mb-8 leading-relaxed">Final Year Student in Gujarat Technological University and Currently pursueing B.E. in Computer Science. I'm currently doing Freelance work on Fiverr and also working on my Personal Projects of Academics and Internships.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-violet-600 border-0 py-2 px-6 focus:outline-none hover:bg-violet-700 rounded text-lg"><a href="mailto:prashantrai642@gmail.com">Email</a></button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"><a href="Resume 12-10-2022.pdf" target="_blank">Download CV</a></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro