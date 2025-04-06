import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion';

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow =() =>{
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1)
            }
        };
            updateCardsToShow();

            window.addEventListener('resize', updateCardsToShow);
            return () => window.addEventListener('resize', updateCardsToShow);

        
    },[])

    const nextProject =() =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject =() =>{
        setCurrentIndex((prevIndex) => prevIndex ===0 ? projectsData.length -1 : prevIndex -1)
    }

  return (
    <motion.div 
        initial={{opacity: 0, y:200}}    //animation
        transition={{duration: 1}}      //animation
        whileInView={{opacity: 1, y:0}}     //animation
        viewport={{once: true}}           //animation
    
    className='container  mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' 
    id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects  
             <span className='underline underline-offset-4 decoration-1 under font-light'> Completed</span></h1>
        <p className='text-center text-gray-500 mb-45 max-w-80 mx-auto'>Crafting Spaces,  Building Legacies-Explore Our Portfolio</p>

        {/* slider buttons in left or right */}

        <div className='flex justify-between items-center -mb-50'>
            <button onClick={prevProject} className='p-3 cursor-pointer bg-blue-200 rounded mr-2 -ml-15 ' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>

            <button onClick={nextProject} className='p-3 cursor-pointer bg-blue-200 rounded  -mr-15' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* project slider container */}

        <div className='overflow-hidden'>
            {/* all images to be import in assets */}
            <div className='flex gap-6 transition-transform duration-300 ease-in-out'
                style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}% )`}}
            >
                {projectsData.map((project, index) => (
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-15 -ml-1' />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-gray-700'>
                                    {project.title}
                                </h2>
                                <p className='text-green-600 text-sm'>
                                    {project.price} <span className='px-1'>|</span> {project.location}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Projects