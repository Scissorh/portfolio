import React from "react";

import pic from "../../public/Web.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Hi, My name is Sakib</span>
            <div className="flex space-x-1 text-xl md:text-2xl">
              <h2>and, I'm a</h2>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-blue-800 font-bold"
                strings={["Java Developer", "Backend Developer", "Full Stack Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a dedicated software developer with a strong foundation in Java and a passion for building efficient, scalable applications. My expertise spans backend development with Spring Boot, as well as full-stack projects using React and Django. I enjoy solving complex problems, and I’m constantly exploring new technologies to refine my skills and stay updated in the fast-evolving tech world.
              Whether I’m working on freelance projects or personal development, my goal is to deliver high-quality, user-focused solutions that make an impact.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mohd-sakib-chaudhary-865494225" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Scissorh" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>  
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;