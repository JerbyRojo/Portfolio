import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaHome, FaInfoCircle, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)




    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 z-10 bg-gradient-to-br from-slate-800 to-slate-950 text-gray-300'>
            <div>
                <img src={Logo} alt="Logo Design" style={{ width: '135px' }} />
            </div>

            {/* Menu */}

            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li><Link to='about' smooth={true} duration={500}>
                    About
                </Link></li>
                <li><Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li><Link to='projects' smooth={true} duration={500}>
                    Projects
                </Link></li>
                <li><Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* {Mobile Menu} */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col justify-center items-center '} >
                <li className='py-6 mb-3 text-5xl flex items-center bg-blue-900 hover:bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                    <FaHome size={30} className='mr-2 animate-pulse' />
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 mb-3 text-5xl flex items-center bg-green-900 hover:bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                    <FaInfoCircle size={30} className='mr-2 animate-pulse' />
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 mb-3 text-5xl flex items-center bg-red-900 hover:bg-gradient-to-r from-rose-500 to-red-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                    <FaTools size={30} className='mr-2 animate-pulse' />
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 mb-3 text-5xl flex items-center bg-yellow-900 hover:bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg transition-transform duration-300 hover:scale-110'>
                    <FaProjectDiagram size={30} className='mr-2 animate-pulse' />
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 mb-3 text-5xl flex items-center bg-purple-900 hover:bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg transition-transform duration-300 hover:scale-110'>
                    <FaEnvelope size={30} className='mr-2 animate-pulse' />
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>


            {/* {Social Icons} */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#3b5998] bg-opacity-65' >
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Facebook <FaFacebook size={35} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#c13584] bg-opacity-65' >
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Instagram <FaInstagram size={35} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#0077b5] bg-opacity-65' >
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Linkedin <FaLinkedin size={35} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#171515] bg-opacity-65' >
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Github <FaGithub size={35} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#ea4335] bg-opacity-65' >
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Gmail <HiOutlineMail size={35} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#5fa6ec] bg-opacity-65' >
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Resume <BsFillPersonLinesFill size={35} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar