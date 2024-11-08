import React from 'react'
import Image from 'next/image'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Navbar = () => {
  return (
    <header className='flex justify-around my-6 border-b-2 border-b-gray-200'>
      <nav>
        <ul className='flex items-center justify-center gap-6 h-full tracking-wider bold uppercase'>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <Image src="/bd.png" alt="logo" width={100} height={100} />

      <nav>
        <ul className='flex items-center justify-center gap-6 h-full'>
          <li>
            <a href="https://www.linkedin.com/in/bright-debrah-3b1b6b1b6/">
              <BsLinkedin className='text-xl' />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithub className='text-xl' />
            </a>
          </li>
          <li>
            <a href="">
              <SiGmail className='text-xl' />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
