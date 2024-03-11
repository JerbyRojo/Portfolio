import React from 'react'
import Simple from '../assets/simple.PNG'
import Estate from '../assets/realestate.jpg'
import Backend from '../assets/backend.webp'
import Work from '../assets/workImg.jpeg'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen bg-gradient-to-br from-slate-800 to-slate-950 text-gray-300'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8 mt-[100px]'>
                    <p className='text-4xl font-bold inline border-b-4 border-slate-600'>Projects</p>
                    <p className='py-6'>Check out some of my recent projects</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid */}
                    <div style={{ backgroundImage: `url(${Simple})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>Web-Page Design
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jerbyrojo.github.io/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>

                                <a href="https://github.com/JerbyRojo/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Backend})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>E-Commerce
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jerbyrojo.github.io/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>

                                <a href="https://github.com/JerbyRojo/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Estate})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>E-Commerce API
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jerbyrojo.github.io/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>

                                <a href="https://github.com/JerbyRojo/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Backend})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>E-Commerce
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jerbyrojo.github.io/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>

                                <a href="https://github.com/JerbyRojo/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Work})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>E-Commerce
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jerbyrojo.github.io/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                                </a>

                                <a href="https://github.com/JerbyRojo/webportfolio" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    





                </div>



            </div>

        </div>
    )
}

export default Projects