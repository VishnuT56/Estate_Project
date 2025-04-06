import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
      initial={{opacity: 0, x:200}}    //animation
      transition={{duration: 1}}      //animation
      whileInView={{opacity: 1, x:0}}     //animation
      viewport={{once: true}}           //animation 

    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
    id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer 
          <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stores from Those Who Found Home with Us</p>

      {/* adding images */}
        <div className='flex flex-wrap justify-center gap-9'>
          {testimonialsData.map((testimonial, index) =>(
            <div key={index} className='max-w-[340px] border border-blue-500 shadow-lg rounded px-8 py-12 text-center'>
              <img className='w-20 h-2- rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
              <h2 className='text-xl text-gray-700 font-medium'>{ testimonial.name}</h2>
              <h2 className='text-gray-500 mb-4 text-sm'>{testimonial.title}</h2>

                {/* add star icons */}
              <div className='flex justify-center gap-2 text-red-500 mb-4 mt-2'>
                {Array.from({length: testimonial.rating}, (item, index)=>(
                  <img key={index} src={assets.star_icon} alt="" />
                ))}
              </div>

              <p className='text-gray-500'>{testimonial.text}</p>
            </div>
          ))}
        </div>
    </motion.div>
  )
}

export default Testimonials