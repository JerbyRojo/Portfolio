import React from 'react'
import HTML from '../assets/logo-html5.png'
import CSS from '../assets/logo-css3.png'
import JavaScript from '../assets/logo-javascript.png'
import NodeJS from '../assets/logo-nodejs.png'
import ExpressJS from '../assets/logo-expressjs.png'
import Bootstrap from '../assets/logo-bootstrap.png'
import MongoDB from '../assets/logo-mongodb.png'
import GIT from '../assets/logo-git.png'
import Postman from '../assets/logo-postman.png'
import ReactIcon from '../assets/logo-react.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-gradient-to-tr from-slate-800 to-slate-950 text-gray-300'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='mt-[200px]'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-800'>Tools</p>
          <p className='py-4'>Tools used:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={HTML} alt="HTML icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">HTML</div>
              <p className="text-[12px] text-gray-500">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={CSS} alt="CSS icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">CSS</div>
              <p className="text-[12px] text-gray-500">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={JavaScript} alt="JavaScript icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">JavaScript</div>
              <p className="text-[12px] text-gray-500">JavaScript is a programming language that enables interactive web pages and is an essential part of web development.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={NodeJS} alt="NodeJS icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">NodeJS</div>
              <p className="text-[12px] text-gray-500">Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={ExpressJS} alt="ExpressJS icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">ExpressJS</div>
              <p className="text-[12px] text-gray-500">Express.js is a web application framework for Node.js, designed for building web applications and APIs.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={Bootstrap} alt="Bootstrap icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">Bootstrap</div>
              <p className="text-[12px] text-gray-500">Bootstrap is a popular CSS framework for building responsive and mobile-first websites.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={MongoDB} alt="MongoDB icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">MongoDB</div>
              <p className="text-[12px] text-gray-500">Bootstrap is a popular CSS framework for building responsive and mobile-first websites.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={GIT} alt="GIT icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">GIT</div>
              <p className="text-[12px] text-gray-500">Git is a distributed version control system for tracking changes in source code during software development.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={Postman} alt="Postman icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">Postman</div>
              <p className="text-[12px] text-gray-500">Postman is a collaboration platform for API development that simplifies each step of building an API and streamlines collaboration.</p>
            </div>
          </div>

          <div className="max-w-full rounded overflow-hidden shadow-md shadow-[#6ad1d1] hover:scale-110 duration-500">
            <img className="w-28 mx-auto block" src={ReactIcon} alt="ReactIcon icon" />
            <div className="px-3 py-3">
              <div className="font-bold text-sm mb-2">React</div>
              <p className="text-[12px] text-gray-500">React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills 