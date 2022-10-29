import React from 'react'
import ProjectGallery1 from './PRJ-1'
import ProjectGallery2 from './PRJ-2'

function ProjectGallery() {
  return (
    <>
        <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-4xl font-medium title-font italic text-white mb-24 text-center">
            Projects Gallery
          </h1>
            <ProjectGallery1/>
            <ProjectGallery2/>
            
          
        </div>
      </section>
    </>
  )
}

export default ProjectGallery