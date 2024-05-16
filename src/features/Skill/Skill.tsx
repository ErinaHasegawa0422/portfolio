import React from 'react';
import { FaJsSquare } from 'react-icons/fa'; 
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython,FaAws,FaDocker,FaGithub  } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


const Skill = () => {
  return (
    <div>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">My Skills</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FaJsSquare className="w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">JavaScript</h2>
                </div>   
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <SiTypescript className="w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">TypeScript</h2>
                </div>   
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FaPython className="w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">Python</h2>
                </div>   
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <BiLogoPostgresql className="w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">PostgreSQL</h2>
                </div>   
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <GrMysql  className="w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">MySQL</h2>
                </div>   
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FaAws className="w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">AWS</h2>
                </div>   
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FaDocker  className="w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">Docker</h2>
                </div>   
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FaGithub className="w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">GitHub</h2>
                </div>   
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;

