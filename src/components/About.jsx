import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Murad, a passionate software developer skilled in full-stack development with expertise in Java, Spring Boot, React, and Django. With an MCA degree from AKTU University, I focus on delivering efficient and scalable web solutions tailored to client needs.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Master of Computer Applications (MCA), AKTU University, 2023
          Bachelor's in [Relevant Field], [Institution], [Year]
          Full-Stack Web Development, [Online Platform/Institution], [Year]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in Java, PHP, Python, React, Spring Boot
          Experienced with Django, MySQL, JavaScript, HTML/CSS
          Strong understanding of object-oriented programming, web architecture, and design principles
          Effective problem-solving skills and collaborative team player
        </span>
        <br />
        <br />
      
      
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to utilize my expertise in full-stack development to create impactful web solutions that help businesses thrive in the digital world. I am committed to continuous growth, embracing challenges, and leveraging my skills to exceed client expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
