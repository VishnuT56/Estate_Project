import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'   //animation , and motion all div components    (npm i framer-motion)

const Header = () => {
  return (
    //background image frame
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
    style={{backgroundImage:"url('/header_img.png')"}} id='Header'>
        <Navbar/>
        
        {/* contants */}
        <motion.div 
        initial={{opacity: 0, y:100}}    //animation
        transition={{duration: 1.5}}      //animation
        whileInView={{opacity: 1, y:0}}     //animation
        viewport={{once: true}}           //animation
        
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] text-pink-500 inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16'>
                <a href='#Projects' className='border border-white px-8 py-3 rounded-xl hover:bg-orange-300 '>Projects</a>
                <a href='#Contact' className='bg-blue-500 px-8 py-3 rounded-xl hover:bg-violet-500 '>Contact Us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header