import React from 'react'

function Projects() {
  return (
    <>
     <section  name="Projects" className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h2 className='text-2xl text-center mb-4 mt-4 text-white'>Projects</h2>
        <h3 className="text-xl text-center mb-8 text-white">
          Explore some of the successful projects I've worked on.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog App Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-2">Blog App</h4>
            <p className="mb-4">
              A comprehensive blog application built using Spring Boot, allowing users to create, edit, and manage blog posts efficiently.
            </p>
            <p className="font-bold">Tech Stack: </p>
            <p>Django, MySQL</p>
          </div>

          {/* Quiz App Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-2">Quiz App</h4>
            <p className="mb-4">
              A feature-rich quiz application developed to manage multiple-choice quizzes, track scores, and provide a seamless user experience.
            </p>
            <p className="font-bold">Tech Stack: </p>
            <p>Spring Boot, React</p>
          </div>

          {/* E-commerce Project Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold mb-2">E-commerce Website</h4>
            <p className="mb-4">
              A fully functional e-commerce website offering user-friendly navigation, product management, and secure payment integration.
            </p>
            <p className="font-bold">Tech Stack: </p>
            <p>React, Django, MongoDB</p>
          </div>
        </div>
      </div>
    </section>

  

    </>
  )
}

export default Projects