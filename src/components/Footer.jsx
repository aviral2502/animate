import React from 'react'
import { FaDiscord, FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const socialLinks = [
  { herf: "https://dicord.com", icon: <FaDiscord />},
  { herf: "https://instagram.com", icon: <FaInstagram />},
  { herf: "https://youtube.com", icon: <FaYoutube />},
  { herf: "https://facebook.com", icon: <FaFacebook/>}
]


const Footer = () => {
  return (
    <footer className='w-screen bg-[#5724FF] py-10 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm md:text-left'>
          &copy; Nova2025; All Right Reserved
        </p>
        <div className='flex justify-center gap-4 md:justify-start'>
          {socialLinks.map((link, index) => (
            <a
            key={index}
            href={link.herf}
            target='_blank'
            rel='noopener noreferrer'
            className='text-black transition-colors hover:text-white duration-300 ease-in-out'
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a href="#privacy-policy"
        className='text-black text-center text-sm font-light md:text-right transition-colors hover:underline hover:text-white'>
          Privacy Policy
        </a>
      </div>

    </footer>
  )
}

export default Footer
